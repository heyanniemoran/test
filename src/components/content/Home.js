import React from 'react';
import {Form, Navigation, Comments, Skills, Profile} from "../Generic";
import Tab, { Container, MainWrapper, Row, Col9, Col3 } from "../Wrappers";

export default function Home() {
    return (
        <MainWrapper>
            <Container>
                <Row>
                    <Col9>
                        <Tab
                            closed={true}
                            title="Навыки"
                            time=""
                            text={<Skills />}
                        ></Tab>
                        <Tab
                            closed={true}
                            title=""
                            time="49 minutes ago"
                            text={<Comments />}
                        ></Tab>
                        <Tab
                            closed={false}
                            title="Sunset Sunset Sunset"
                            time="53 minutes ago"
                            text="lorem ipsum"
                        ></Tab>
                        <Tab
                            closed={false}
                            title="Morning of Siberia"
                            time="56 minutes ago"
                            text="lorem ipsum"
                        ></Tab>
                    </Col9>
                    <Col3>
                        <Profile />
                        <Tab
                            closed={true}
                            title="Navigation"
                            time=""
                            type="bordered"
                            text={<Navigation />}
                        ></Tab>
                        <Tab
                            closed={true}
                            title="Share your thoughts"
                            time=""
                            type="bordered"
                            text={<Form />}
                        ></Tab>
                    </Col3>
                </Row>
            </Container>
        </MainWrapper>
    );
}