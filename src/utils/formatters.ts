export const formatCurrency = (value?:number): string => {
    return Intl.NumberFormat("pt-BR", { style:"currency", currency:"BRL" }).format(value ?? 0)
}

export const convertDate = (value:string): Date => {
    const dateValue  = new Date(value)
    const dataParsed = dateValue.getTime() + (dateValue.getTimezoneOffset() * 60000)
    return new Date(dataParsed)
}

export const formatDate = (value?:string): string => {
    const dateValue  = !!value ? new Date(value) : new Date()
    const dataParsed = dateValue.getTime() + (dateValue.getTimezoneOffset() * 60000)
    return new Date(dataParsed).toLocaleDateString("pt-BR")
}