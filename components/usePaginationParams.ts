"use client"

import { useSearchParams, useRouter } from "next/navigation"

export function usePaginationParams() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = Number(searchParams.get("page") || 1)
  const limit = Number(searchParams.get("limit") || 10)
  const sortBy = searchParams.get("sortBy") || "terbaru"

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    if (key !== "page") params.set("page", "1")
    router.push(`?${params.toString()}`)
  }

  return {
    page,
    limit,
    sortBy,
    setPage: (p: number) => updateParams("page", String(p)),
    setLimit: (l: number) => updateParams("limit", String(l)),
    setSortBy: (s: string) => updateParams("sortBy", s),
  }
}
