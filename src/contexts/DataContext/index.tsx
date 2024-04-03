"use client"

import { ServerData } from "@/@types/types"
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"

type Data = ServerData & {
    currentTab:string,
    setCurrentTab:Dispatch<SetStateAction<string>>

}
const DataContext = createContext<Data>({} as Data)

export const DataProvider = ({ children, ...rest }: PropsWithChildren<ServerData>) => {
    const [currentTab, setCurrentTab] = useState<string>("1")

    return (
        <DataContext.Provider value={{ currentTab, setCurrentTab, ...rest }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)