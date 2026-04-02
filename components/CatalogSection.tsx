import { AppSidebar } from "@/components/Sidebar";
import dayjs from "dayjs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import { BookPagination } from "./BookPagination";

export function getRemainingDays(target: string) {
  return Math.max(
    0,
    Math.ceil(dayjs(target).diff(dayjs(), "day", true))
  )
}

export default async function CatalogSection({ searchParams }: any) {
  const resolvedSearchParams = await searchParams;
  console.log(resolvedSearchParams)
  const page = resolvedSearchParams.page || 1
  const limit = resolvedSearchParams.limit || 10
  const sortBy = resolvedSearchParams.sortBy || "terbaru"

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNiIsImVtYWlsIjoiZXNwbG9yYW1lZGlhQGdtYWlsLmNvbSIsImlhdCI6MTc3NTAwMzYwMCwiZXhwIjoxNzc1MTMzMjAwfQ.QUJXtxQMd8FSQ38B1LTncQ2dgNQd_8Tv1YPB121u7W4"
  const res = await fetch(`https://api-dev.ziyadbooks.com/api/v1/ecommerce/products/all/category?page=${page}&limit=${limit}&sortBy=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  const books = data.data.data;

  return <section className="py-20 px-4 sm:px-6 lg:px-8">
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2">
            {books.map((book:any, index:any) => (
              <motion.div 
                key={book.id}
                initial={{ opacity: 0, y: 20}}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`https://ziyadbooks.com/product/${book.slug}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs py-0">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <div className="w-full h-48 relative">
                        <Image 
                          fill
                          src={book.image_url} 
                          alt={book.name} 
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      { book.preorder &&
                        <div className="absolute top-0 right-0">
                          <Badge className="text-md bg-red-500 text-red-50">Preorder</Badge>
                        </div>
                      }
                      
                    </div>
                  </CardHeader>

                  <CardContent className="p-3">
                    <h3 className="font-bold text text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {book.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      {book.final_price_formatted}
                    </div>
                    <Separator />
                    {!book.preorder && book.sisastok > 9 && (
                      <p className="text-right mt-2 mb-1">
                        Stok: <span className="font-bold">TERSEDIA</span>
                      </p>
                    )}

                    {!book.preorder && 0 > book.sisastok && book.sisastok < 10 && (
                      <p className="text-right mt-2 mb-1">
                        Stok: <span className="font-bold">MENIPIS</span>
                      </p>
                    )}
                    {!book.preorder && book.sisastok == 0 && (
                      <p className="text-right mt-2 mb-1">
                        Stok: <span className="font-bold">HABIS</span>
                      </p>
                    )}
                    {book.preorder && getRemainingDays(book.selesai) == 0 &&
                      <p className="text-right mt-2 mb-1">
                        <span className="font-bold">Preorder Berakhir</span>
                      </p>
                    }
                    {book.preorder && getRemainingDays(book.selesai) > 0 &&
                      <p className="text-right mt-2 mb-1">
                        <span className="font-bold">Tinggal {getRemainingDays(book.selesai)} hari lagi!</span>
                      </p>
                    }
                  </CardContent>
                </Card>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
        <BookPagination data={data} />
      </SidebarInset>
    </SidebarProvider>
  </section>
}