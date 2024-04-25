import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar, { NavItem } from "@/components/Sidebar"
import HomeIcon from "@mui/icons-material/Home"
import ViewComfyIcon from "@mui/icons-material/ViewComfy"
import { ThemeProvider } from "@mui/material"
import { DefaultTheme } from "@/themes/Default"
import { DrawerProvider } from "@/contexts/DrawerContext"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

const navItems: NavItem[] = [
    {
        label: "Home",
        link: "/",
        icon: <HomeIcon />,
    },

    {
        label: "Layout",
        link: "/template",
        icon: <ViewComfyIcon />,
    },
]

export const metadata: Metadata = {
    title: "NextJS - Template",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <html lang="en">
            <ThemeProvider theme={DefaultTheme}>
                <DrawerProvider>
                    <body className={`flex h-screen ${inter.className}`}>
                        <Sidebar
                            header={
                                <span className="text-2xl font-light">
                                    NextJS - Template
                                </span>
                            }
                            items={navItems}
                        />

                        <div className="flex flex-col flex-grow h-screen bg-zinc-100">
                            <Navbar />
                            
                            <div className="flex-grow">
                                {children}
                            </div>
                        </div>
                    </body>
                </DrawerProvider>
            </ThemeProvider>
        </html>
    )
}