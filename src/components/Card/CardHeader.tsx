import React, { ComponentProps } from "react"
import { tv } from 'tailwind-variants'

const cardHeader = tv({
    base:'border-b-2 border-neutral-100 px-6 py-3 text-3xl font-light leading-tight'
})

type CardHeaderProps = ComponentProps<'div'>

const CardHeader = ({ className, children, ...rest }: CardHeaderProps) => {
    return (
        <div className={cardHeader({ className })} {...rest}>{children}</div>
    )
}

export default CardHeader