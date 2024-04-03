"use client"

import React from "react"
import { SnackbarProvider } from 'notistack'
import Home from "./Home"
import { DataProvider } from "@/contexts/DataContext"
import { ServerData } from "@/@types/types"

const HomeWrapper = ({ ...rest }: ServerData) => {
    return (
        <SnackbarProvider>
            <DataProvider {...rest}>
                <Home />
            </DataProvider>
        </SnackbarProvider>
    )
}

export default HomeWrapper