"use client"

import { Pagination } from "@/components/ui/pagination"
import { usePaginationParams } from "./usePaginationParams"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export function BookPagination({ meta }: any) {
  const { page, limit, sortBy, setLimit, setSortBy } = usePaginationParams()

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="text-sm text-muted-foreground">
        Showing {meta.from}–{meta.to} of {meta.total} books
      </div>

      <Pagination currentpage={page} totalpages={meta.last_page} />

      <div className="flex gap-2">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="terbaru">Terbaru</SelectItem>
            <SelectItem value="lowprice">Harga Terendah</SelectItem>
            <SelectItem value="highprice">Harga Tertinggi</SelectItem>
          </SelectContent>
        </Select>

        <Select value={String(limit)} onValueChange={(v) => setLimit(Number(v))}>
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
