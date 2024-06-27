import React from "react"
import Container from "@/components/Container"
import { Card, CardActions, CardContent } from "@mui/material"

const Home = () => {
    return (
        <Container>
            <Card sx={{ width:"80%", padding:2 }}>
                <CardContent>
                    <div className="text-3xl font-light leading-tight text-center">
                        NextJS - Template
                    </div>
                </CardContent>
                <CardActions sx={{ display:"flex", justifyContent:"center" }}>
                    &copy; 2024
                </CardActions>
            </Card>
        </Container>
    )
}

export default Home