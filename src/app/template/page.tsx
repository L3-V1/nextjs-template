import React from "react"
import TemplateWrapper from "@/components/Layout/Template"

export default function Page() {
    return (
        <TemplateWrapper apiUrl={`${process.env.API_URL}`} />
    )
}