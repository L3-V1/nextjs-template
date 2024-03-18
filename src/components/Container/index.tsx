import React, { ComponentProps } from "react"
import { tv } from 'tailwind-variants'

const container = tv({
    base: 'flex flex-col w-full h-full justify-center items-center p-12 gap-12'
})

type ContainerProps = ComponentProps<'div'>

const Container = ({ className, children, ...rest }: ContainerProps) => {
    return <div className={container({ className })} {...rest}>{children}</div>
}

export default Container