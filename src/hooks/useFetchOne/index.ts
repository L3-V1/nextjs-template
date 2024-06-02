"use client"

import CrudRepository from "@/repository/CrudRepository"
import { useServer } from "@/contexts/ServerContext"
import { useEffect, useMemo, useState } from "react"

export default function useFetchOne<T extends object>(route:string){
    const { apiUrl, dataId } = useServer()
    const [isFetching, setIsFetching] = useState(false)
    const [record, setRecord] = useState<T>()

    const { getById } = useMemo(() => {
        return CrudRepository<T>(apiUrl, route)
    }, [apiUrl, route])

    useEffect(() => {
        (async () => {
            if(!dataId) return
            try {
                setIsFetching(true)
                setRecord(await getById(dataId))
            } finally {
                setIsFetching(false)
            }
        })()
    }, [dataId, getById])

    return { isFetching, record }
}