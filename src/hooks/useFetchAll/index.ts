"use client"

import CrudRepository from "@/repository/CrudRepository"
import { useServer } from "@/contexts/ServerContext"
import { useEffect, useMemo, useState } from "react"

export default function useFetchAll<T extends object>(route:string){
    const { apiUrl } = useServer()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<T[]>([])

    const { getAll } = useMemo(() => {
        return CrudRepository<T>(apiUrl, route)
    }, [apiUrl, route])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                setData(await getAll())
            } finally {
                setIsLoading(false)
            }
        })()
    }, [getAll])

    return { isLoading, data }
}