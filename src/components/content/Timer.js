import React, {Component} from 'react';
import { Theme } from "../Theme";
import { Wrapper, Container, MainWrapper, Row, Col12, Col9, Col3 } from "../Wrappers";

class Timer extends Component {
    render() {
        return (
            <MainWrapper>
                <Container>
                    <Row>
                        <Col12>
                            timer page
                        </Col12>
                    </Row>
                </Container>
            </MainWrapper>
        );
    }
}

export default Timer;