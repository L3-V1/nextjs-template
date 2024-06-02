"use client"

import React from "react"
import { ServerData } from "@/@types/types"
import { SnackbarProvider } from "notistack"
import { ServerProvider } from "@/contexts/ServerContext"
import Home from "./Home"

const HomeWrapper = ({ ...rest }: ServerData) => {
    return (
        <SnackbarProvider>
            <ServerProvider {...rest}>
                <Home />
            </ServerProvider>
        </SnackbarProvider>
    )
}

export default HomeWrapper