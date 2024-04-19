export default function CrudRepository<T extends object>(apiUrl:string, route:string) {
    const getAll = async (): Promise<T[]> => {
        try {
            const resp = await fetch(`${apiUrl}/${route}`)
            const data = await resp.json()

            if(resp.status == 200){
                return data as T[]
            } else {
                return []
            }
        } catch(err:unknown) {
            throw `Erro durante requisição: ${err}`
        }
    }

    const getById = async (dataId:string): Promise<T | undefined> => {
        try {
            const resp = await fetch(`${apiUrl}/${route}/${dataId}`)
            const data = await resp.json()

            if(resp.status == 200){
                return data as T
            } else {
                return undefined
            }
        } catch(err:unknown) {
            throw `Erro durante requisição: ${err}`
        }
    }

    const save = async (formData:T): Promise<T | undefined> => {
        try {
            const editMode = "id" in formData
            const restUrl  = editMode ? `${route}/${formData.id}` : route
            const options  = {
                method:editMode ? 'PUT' : 'POST',
                body:JSON.stringify(formData),
                headers: {
                    'Content-type':'application/json'
                }
            }

            const resp = await fetch(`${apiUrl}/${restUrl}`, options)
            const data = await resp.json()

            if(resp.status == 200 || resp.status == 201){
                return data as T
            } else {
                return undefined
            }
        } catch(err:unknown) {
            throw `Erro durante requisição: ${err}`
        }
    }

    const deleteById = async (dataId:string): Promise<T | undefined> => {
        try {
            const options = { method:'DELETE' }
            const resp = await fetch(`${apiUrl}/${route}/${dataId}`, options)
            const data = await resp.json()

            if(resp.status == 200){
                return data as T
            } else {
                return undefined
            }
        } catch(err:unknown) {
            throw `Erro durante requisição: ${err}`
        }
    }

    return { getAll, getById, save, deleteById }
}