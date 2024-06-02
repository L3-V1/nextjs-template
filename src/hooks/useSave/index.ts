"use client"

import CrudRepository from "@/repository/CrudRepository"
import { useServer } from "@/contexts/ServerContext"
import { useSnackbar } from "notistack"
import { useMemo, useState } from "react"

export default function useSave<T extends object>(route:string){
    const { apiUrl } = useServer()
    const { enqueueSnackbar } = useSnackbar()
    const [isSaving, setIsSaving] = useState(false)

    const { save } = useMemo(() => {
        return CrudRepository<T>(apiUrl, route)
    }, [apiUrl, route])

    const handleSave = async (formData:T) => {
        try {
            setIsSaving(true)
            const result = await save(formData)
            if(!!result){
                enqueueSnackbar("Registro salvo com sucesso!", { variant:"success" })
            } else {
                enqueueSnackbar("Erro ao salvar registro! Tente mais tarde.", { variant:"error" })
            }
        } catch(err:unknown) {
            enqueueSnackbar(`${err}`, { variant:"error" })
        } finally {
            setIsSaving(false)
        }
    }

    return { isSaving, handleSave }
}