"use client"

import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react"

type DrawerContextData = {
    isOpen:boolean,
    toggleDrawer: () => void
}

const DrawerContext = createContext<DrawerContextData>({} as DrawerContextData)

export const DrawerProvider = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDrawer = useCallback(() => {
        setIsOpen(state => !state)
    }, [])

    return (
        <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    )
}

export const useDrawerContext = () => useContext(DrawerContext)