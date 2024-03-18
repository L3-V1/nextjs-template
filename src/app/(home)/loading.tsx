import React from "react"
import Container from "@/components/Container"
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    )
}

export default Loading