import React, { ComponentProps } from "react"
import { tv } from 'tailwind-variants'

const cardRoot = tv({
    base:'block rounded-lg bg-white text-surface shadow-secondary-1'
})

type CardRootProps = ComponentProps<'div'>

const CardRoot = ({ className, children, ...rest }: CardRootProps) => {
    return (
        <div className={cardRoot({ className })} {...rest}>{children}</div>
    )
}

export default CardRoot