"use client"

import React, { useRef } from "react"
import Container from "@/components/Container"
import { Card } from "@/components/Card"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useData } from "@/contexts/DataContext"
import { IconButton, Tab } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info'
import ModalWrapper, { ModalAttributes } from "@/components/ModalWrapper"

const Home = () => {
    const { currentTab, setCurrentTab } = useData()

    const modalRef = useRef<ModalAttributes>(null)

    return (
        <Container>
            <Card.Root className="md:w-4/6 w-full">
                <Card.Header>
                    <span>NextJS - Template</span>
                    <IconButton
                        aria-label="info"
                        sx={{ marginLeft:1 }}
                        onClick={() => modalRef.current?.openModal()}
                    >
                        <InfoIcon />
                    </IconButton>
                </Card.Header>
                <TabContext value={currentTab}>
                    <Card.Body>
                        <TabList onChange={(e, v) => setCurrentTab(v)}>
                            <Tab label="Tab 1" value="1" />
                            <Tab label="Tab 2" value="2" />
                            <Tab label="Tab 3" value="3" />
                        </TabList>

                        <TabPanel value="1">Tab 1...</TabPanel>
                        <TabPanel value="2">Tab 2...</TabPanel>
                        <TabPanel value="3">Tab 3...</TabPanel>
                    </Card.Body>
                </TabContext>
                <Card.Footer>&copy; 2024</Card.Footer>
            </Card.Root>

            <ModalWrapper ref={modalRef} title="Modal Title...">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae ex diam. Maecenas dictum feugiat accumsan. Phasellus sem sapien, porta eget blandit id, finibus non nisl. Proin volutpat massa vitae nibh maximus porta. Proin nec nulla ac leo sagittis sodales. Ut semper in eros sit amet auctor. Quisque rhoncus quam in libero egestas elementum. Duis non posuere erat. Nulla sed tempus tellus. Integer non ligula est. Proin vitae orci at lacus porttitor laoreet. Cras elementum rhoncus aliquam. Suspendisse quis rutrum enim.</p>
            </ModalWrapper>
        </Container>
    )
}

export default Home