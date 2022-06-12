import React, {Component} from 'react';
import Tab, { Wrapper, Container, MainWrapper, Row, Col12} from "../Wrappers";

class Timer extends Component {
    render() {
        return (
            <MainWrapper>
                <Container>
                    <Row>
                        <Col12>
                            <Tab
                                closed={true}
                                title="Timer"
                                time=""
                                text={secondsToTime(this.props.date)}
                            ></Tab>
                        </Col12>
                    </Row>
                </Container>
            </MainWrapper>
        );
    }
}

export default Timer;

function secondsToTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
}