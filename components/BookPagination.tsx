"use client"

import { usePaginationParams } from "./usePaginationParams"
import { PaginationWithLinks } from "./pagination-with-links";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export function BookPagination({data}: any){
    const { page, limit, sortBy, setLimit, setSortBy } = usePaginationParams()

    return (
        <PaginationWithLinks
            page={page}
            pageSize={limit}
            totalCount={data.data.total}
            pageSizeSelectOptions={{
            pageSizeOptions: [10, 25, 50],
            }}
        />
    )
}

export function BookSortation({data}: any) {
    const { page, limit, sortBy, setLimit, setSortBy } = usePaginationParams()

    const SORT_OPTIONS = [
        { value: "terbaru", label: "Terbaru" },
        { value: "lowprice", label: "Harga Terendah" },
        { value: "highprice", label: "Harga Tertinggi" },
    ]

    const selectedLabel = SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || "Sort"

    return (
        <div className="absolute right-0 gap-2">
            <Select value={sortBy} onValueChange={(value) => value !== null && setSortBy(value)}>
                <SelectTrigger className="w-[180px]">
                <SelectValue>{selectedLabel}</SelectValue>
                </SelectTrigger>

                <SelectContent>
                {SORT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
        </div>
    )
}
