import React from "react"
import { LoadingButton } from "@mui/lab"
import { Button, Grid } from "@mui/material"
import { SaveIcon, ClearIcon, DeleteForeverIcon } from "@/components/Icons"

type ActionsToolbarProps = {
    onSave?: React.MouseEventHandler<HTMLButtonElement>,
    onClear?: React.MouseEventHandler<HTMLButtonElement>,
    onDelete?: React.MouseEventHandler<HTMLButtonElement>,
    isSaving?:boolean,
    isDeleting?:boolean,
    showDelete:boolean
}

const ActionsToolbar = ({
    onSave,
    onClear,
    onDelete,
    isSaving,
    isDeleting,
    showDelete
}: ActionsToolbarProps) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={3}>
                <LoadingButton
                    fullWidth
                    loadingPosition="start"
                    loading={isSaving}
                    className="bg-blue-500"
                    variant="contained"
                    color="info"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={onSave}
                >
                    Salvar
                </LoadingButton>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    size="large"
                    startIcon={<ClearIcon />}
                    onClick={onClear}
                >
                    Limpar
                </Button>
            </Grid>
            
            {
                showDelete &&
                <Grid item xs={12} md={4} lg={3}>
                    <LoadingButton
                        fullWidth
                        loadingPosition="start"
                        loading={isDeleting}
                        variant="outlined"
                        color="error"
                        size="large"
                        startIcon={<DeleteForeverIcon />}
                        onClick={onDelete}
                    >
                        Excluir
                    </LoadingButton>
                </Grid>
            }
        </Grid>
    )
}

export default ActionsToolbar