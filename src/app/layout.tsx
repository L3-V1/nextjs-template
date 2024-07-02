import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@mui/material"
import { DefaultTheme } from "@/themes/Default"
import { DrawerProvider } from "@/contexts/DrawerContext"
import { HomeIcon } from '@/components/Icons'
import Sidebar, { NavItem } from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import NextLogo from "@/img/nextjs-icon.svg"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

const navItems: NavItem[] = [
    {
        label: "Home",
        link: "/",
        icon: <HomeIcon />
    }
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
                                <div className="flex gap-3 justify-center text-2xl font-light">
                                    <Image
                                        src={NextLogo}
                                        alt="NextJS Logo"
                                        width={30}
                                        height={30}
                                    />
                                    <span>NextJS - Template</span>
                                </div>
                            }
                            items={navItems}
                        />

                        <div className="flex flex-col flex-grow h-screen">
                            <Navbar />
                            
                            <div className="flex-grow bg-zinc-200">
                                {children}
                            </div>
                        </div>
                    </body>
                </DrawerProvider>
            </ThemeProvider>
        </html>
    )
}