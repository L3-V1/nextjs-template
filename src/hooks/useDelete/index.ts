"use client"

import CrudRepository from "@/repository/CrudRepository"
import { useServer } from "@/contexts/ServerContext"
import { useSnackbar } from "notistack"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

export default function useDelete<T extends object>(route:string, targetUrl:string){
    const { apiUrl } = useServer()
    const { enqueueSnackbar } = useSnackbar()
    const [isDeleting, setIsDeleting] = useState(false)
    const [hasDeleted, setHasDeleted] = useState(false)
    const router = useRouter()

    const { deleteById } = useMemo(() => {
        return CrudRepository<T>(apiUrl, route)
    }, [apiUrl, route])

    useEffect(() => {
        if(!hasDeleted) return
        setTimeout(() => {
            router.push(targetUrl)
        }, 1000)
    }, [hasDeleted, router, targetUrl])

    const handleDelete = async (dataId?:string) => {
        if(!dataId) return
        try {
            setIsDeleting(true)
            const result = await deleteById(dataId)
            if(!!result){
                setHasDeleted(true)
                enqueueSnackbar("Registro excluído com sucesso!", { variant:"success" })
            } else {
                enqueueSnackbar("Erro ao excluir registro! Tente mais tarde.", { variant:"error" })
            }
        } catch(err:unknown) {
            enqueueSnackbar(`${err}`, { variant:"error" })
        } finally {
            setIsDeleting(false)
        }
    }

    return { isDeleting, handleDelete }
}