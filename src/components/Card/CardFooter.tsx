import React, { ComponentProps } from "react"
import { tv } from 'tailwind-variants'

const cardFooter = tv({
    base:'border-t-2 border-neutral-100 px-6 py-3 text-surface/75'
})

type CardFooterProps = ComponentProps<'div'>

const CardFooter = ({ className, children, ...rest }: CardFooterProps) => {
    return (
        <div className={cardFooter({ className })} {...rest}>{children}</div>
    )
}

export default CardFooter