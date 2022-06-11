import React, {Component} from 'react';
import { Theme } from "../Theme";
import {BasicMap} from "../Generic";
import Tab, { Wrapper, Container, MainWrapper, Row, Col12, Col9, Col3 } from "../Wrappers";

export default class Map extends Component {
    render() {
        return (
            <MainWrapper>
                <Container>
                    <Row>
                        <Col12>
                            <Tab
                                closed={true}
                                title="Basic map"
                                time=""
                                text={<BasicMap />}
                            ></Tab>
                        </Col12>
                    </Row>
                </Container>
            </MainWrapper>
        );
    }
}