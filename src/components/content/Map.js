import React, {Component} from 'react';
import { Theme } from "../Theme";
import { Wrapper, Container, MainWrapper, Row, Col12, Col9, Col3, Dropdown } from "../Wrappers";

export default class Map extends Component {
    render() {
        return (
            <MainWrapper>
                <Container>
                    <Row>
                        <Col12>
                            map page
                        </Col12>
                    </Row>
                </Container>
            </MainWrapper>
        );
    }
}