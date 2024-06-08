import React from "react"
import { Grid, LinearProgress } from "@mui/material"

type FormHeaderProps = {
    isFetching?:boolean,
    isDebug?:boolean,
    debugValue:any
}

const FormHeader = ({ isFetching=false, isDebug=false, debugValue }: FormHeaderProps) => {
    return (
        <>
            {
                isFetching &&
                <Grid item xs={12}>
                    <div className="w-full">
                        <LinearProgress variant="indeterminate" />
                    </div>
                </Grid>
            }

            {
                isDebug &&
                <Grid item xs={12}>
                    <pre className="w-full">
                        {JSON.stringify(debugValue, null, 2)}
                    </pre>
                </Grid>
            }
        </>
    )
}

export default FormHeader