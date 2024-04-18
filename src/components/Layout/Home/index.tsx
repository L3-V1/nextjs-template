"use client"

import React from "react"
import { ServerData } from "@/@types/types"
import { DataProvider } from "@/contexts/DataContext"
import { SnackbarProvider } from "notistack"
import Home from "./Home"

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