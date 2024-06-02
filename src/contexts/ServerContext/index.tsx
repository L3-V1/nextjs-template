"use client"

import { ServerData } from "@/@types/types"
import { PropsWithChildren, createContext, useContext } from "react"

const ServerContext = createContext<ServerData>({} as ServerData)

export const ServerProvider = ({ children, ...rest }: PropsWithChildren<ServerData>) => {
    return (
        <ServerContext.Provider value={{ ...rest }}>
            {children}
        </ServerContext.Provider>
    )
}

export const useServer = () => useContext(ServerContext)