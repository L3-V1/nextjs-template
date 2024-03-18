import React from "react"
import Container from "@/components/Container"
import { Card } from "@/components/Card"

const Home = () => {
    return (
        <Container>
            <Card.Root className="md:w-4/6 w-full">
                <Card.Header>NextJS - Template</Card.Header>
                <Card.Body>...</Card.Body>
                <Card.Footer>&copy; - 2024</Card.Footer>
            </Card.Root>
        </Container>
    )
}

export default Home