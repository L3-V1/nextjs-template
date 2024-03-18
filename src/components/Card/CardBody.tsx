import React, { ComponentProps } from "react"
import { tv } from 'tailwind-variants'

const cardBody = tv({
    base:'p-6'
})

type CardBodyProps = ComponentProps<'div'>

const CardBody = ({ className, children, ...rest }: CardBodyProps) => {
    return (
        <div className={cardBody({ className })} {...rest}>{children}</div>
    )
}

export default CardBody