"use client"

import { Box, Modal } from "@mui/material"
import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren, ReactNode, useImperativeHandle, useState } from "react"
import { Card } from "../Card"

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500
}

type ModalProps = PropsWithChildren & {
    title:ReactNode
}

export type ModalAttributes = {
    openModal:() => void,
    closeModal:() => void
}

const ModalWrapper:ForwardRefRenderFunction<ModalAttributes, ModalProps> = ({ title, children }, ref) => {
    const [open, setOpen] = useState<boolean>(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    useImperativeHandle(ref, () => {
        return {
            openModal,
            closeModal
        }
    }, [])

    if(!open) return null

    return (
        <Modal
            open={open}
            onClose={closeModal}
        >
            <Box sx={style}>
                <Card.Root>
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>{children}</Card.Body>
                </Card.Root>
            </Box>
        </Modal>
    )
}

export default forwardRef(ModalWrapper)