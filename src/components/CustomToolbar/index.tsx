import { GridColumnVisibilityModel, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid"
import GridToolbarAddButton from "./GridToolbarAddButton"

type CustomToolbarProps = {
    gridModel:GridColumnVisibilityModel
}

const CustomToolbar = ({ gridModel }: CustomToolbarProps) => {
    return (
        <GridToolbarContainer sx={{ padding:2, gap:2 }}>
            <GridToolbarQuickFilter />
            <GridToolbarAddButton />
            <GridToolbarFilterButton />
            <GridToolbarExport
                printOptions={
                    {
                        hideToolbar: true,
                        hideFooter: true,
                        fields: Object.keys(gridModel).filter((column) => gridModel[column])
                    }
                }
            />
        </GridToolbarContainer>
    )
}

export default CustomToolbar