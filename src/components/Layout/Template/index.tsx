"use client"

import React from "react"
import { SnackbarProvider } from 'notistack'
import { DataProvider } from "@/contexts/DataContext"
import { ServerData } from "@/@types/types"
import Template from "./Template"

const TemplateWrapper = ({ ...rest }: ServerData) => {
    return (
        <SnackbarProvider>
            <DataProvider {...rest}>
                <Template />
            </DataProvider>
        </SnackbarProvider>
    )
}

export default TemplateWrapper