import { HugeiconsIcon } from '@hugeicons/react';
import { Github, Linkedin, Instagram, Twitter } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Twitter,
    href: "#",
    label: "X",
  },
  {
    icon: Github,
    href: "#",
    label: "Github",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  }
]

const quickLinks = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Kategori",
    href: "/kategori",
  },
  {
    name: "Tentang Kami",
    href: "/tentang-kami",
  },
  {
    name: "Kontak",
    href: "/kontak",
  },
]

export default function Footer () {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              ZiyadBooks
            </h3>
            <p className="text-muted-foreground mb-4">
              Penerbit Buku Anak No 1 di Indonesia
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(link => {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground duration-300"
                  >
                    <HugeiconsIcon icon={link.icon} className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick links*/}

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h4 className="font-semibold text-foreground mb-4">Bergabung sekarang</h4>
            <p className="text-muted-foreground mb-4">
              Bergabung jadi Ziyad Partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Email anda" />
              <Button>Bergabung</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZiyadBooks. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}