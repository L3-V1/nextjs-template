import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar, { NavItem } from "@/components/Sidebar"
import HomeIcon from "@mui/icons-material/Home"
import ViewComfyIcon from '@mui/icons-material/ViewComfy'

const inter = Inter({ subsets: ["latin"] })

const navItems:NavItem[] = [
    {
        label: "Home",
        link: "/",
        icon: <HomeIcon />
    },

    {
        label: "Layout",
        link: "/template",
        icon: <ViewComfyIcon />
    }
]

export const metadata: Metadata = {
    title: "NextJS - Template"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    
    return (
        <html lang="en">
            <body className={`flex h-screen ${inter.className}`}>
                <Sidebar 
                    header={<span className="text-2xl font-light">NextJS - Template</span>}
                    items={navItems} 
                />

                <div className="flex-grow bg-zinc-100">
                    {children}
                </div>
            </body>
        </html>
    )
}