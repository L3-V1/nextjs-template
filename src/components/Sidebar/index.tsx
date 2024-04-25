"use client"

import React, { ReactNode } from "react"
import {
    Box,
    Divider,
    Drawer,
    DrawerProps,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    useMediaQuery,
} from "@mui/material"
import Link from "next/link"
import { useDrawerContext } from "@/contexts/DrawerContext"

const drawerWidth = 300

export type NavItem = {
    label: string
    link: string
    icon?: ReactNode
}

type SidebarProps = DrawerProps & {
    header: ReactNode
    items: NavItem[]
}

const Sidebar = ({ header, items, ...rest }: SidebarProps) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))

    const { isOpen, toggleDrawer } = useDrawerContext()

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            anchor="left"
            variant={smDown ? "temporary" : "permanent"}
            open={isOpen}
            onClose={toggleDrawer}
            {...rest}
        >
            <div className="p-6">{header}</div>

            <Divider />

            <Box flex={1}>
                <List component="nav">
                    {items.map((item) => (
                        <Link key={item.label} href={item.link}>
                            <ListItemButton>
                                {item?.icon && (
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar
