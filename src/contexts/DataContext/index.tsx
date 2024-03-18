"use client"
import { ServerData } from "@/@types/types"
import { PropsWithChildren, createContext, useContext } from "react"

const DataContext = createContext<ServerData>({} as ServerData)

export const DataProvider = ({ apiUrl, children }: PropsWithChildren<ServerData>) => {
    return (
        <DataContext.Provider value={{ apiUrl }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)