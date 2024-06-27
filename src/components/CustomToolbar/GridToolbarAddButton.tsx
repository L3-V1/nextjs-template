import { Button } from "@mui/material"
import { AddCircleOutlineIcon } from "@/components/Icons"
import Link from "next/link"

type GridToolbarAddButtonProps = {
    link?:string
}

const GridToolbarAddButton = ({ link="salvar" }: GridToolbarAddButtonProps) => {
    return (
        <Link href={link}>
            <Button
                size="small"
                startIcon={<AddCircleOutlineIcon />}
            >
                Adicionar
            </Button>
        </Link>
    )
}

export default GridToolbarAddButton