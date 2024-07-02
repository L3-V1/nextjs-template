import React from "react"
import Container from "@/components/Container"
import NextLogo from "@/img/nextjs-icon.svg"
import Image from "next/image"
import { Card, CardContent } from "@mui/material"

const Home = () => {
    return (
        <Container>
            <Card sx={{ width:"90%" }}>
                <CardContent>
                    <div className="flex gap-3 py-3 justify-center text-3xl font-light leading-tight">
                        <Image
                            src={NextLogo}
                            alt="NextJS Logo"
                            width={40}
                            height={40}
                        />
                        <span>NextJS - Template</span>
                    </div>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Home