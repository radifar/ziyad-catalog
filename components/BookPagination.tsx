"use client"

import { usePaginationParams } from "./usePaginationParams"
import { PaginationWithLinks } from "./pagination-with-links";

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