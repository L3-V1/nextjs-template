import ModalWrapper, { ModalAttributes } from "@/components/ModalWrapper"
import React, { forwardRef, ForwardRefRenderFunction } from "react"

type ModalInfoProps = {
    title:string
}

const ModalInfo:ForwardRefRenderFunction<ModalAttributes, ModalInfoProps> = ({ title }, ref) => {
    return (
        <ModalWrapper title={title} ref={ref}>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae ex diam. Maecenas dictum feugiat accumsan. Phasellus sem sapien, porta eget blandit id, finibus non nisl. Proin volutpat massa vitae nibh maximus porta. Proin nec nulla ac leo sagittis sodales. Ut semper in eros sit amet auctor. Quisque rhoncus quam in libero egestas elementum. Duis non posuere erat. Nulla sed tempus tellus. Integer non ligula est. Proin vitae orci at lacus porttitor laoreet. Cras elementum rhoncus aliquam. Suspendisse quis rutrum enim.</p>
        </ModalWrapper>
    )
}

export default forwardRef(ModalInfo)