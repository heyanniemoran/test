import React, {Component} from 'react';
import { Theme } from "../Theme";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Wrapper, Container, MainWrapper, Row, Col12, Col9, Col3, Dropdown } from "../Wrappers";

export default class Home extends Component {
    render() {
        return (
            <MainWrapper>
                <Container>
                    <Row>
                        <Col9>
                            Какие-то записи
                        </Col9>
                        <Col3>
                            фио
                            навигация
                        </Col3>
                    </Row>
                </Container>
            </MainWrapper>
        );
    }
}