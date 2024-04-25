"use client"

import React from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Theme, Toolbar, useMediaQuery } from "@mui/material"
import { useDrawerContext } from "@/contexts/DrawerContext"

const Navbar = () => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))

    const { toggleDrawer } = useDrawerContext()

    return (
        <>
            {smDown && (
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            )}
        </>
    )
}

export default Navbar