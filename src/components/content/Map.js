import React, {Component, UseState} from 'react';
import { Theme } from "../Theme";
import {Loader} from "../Generic";
import Tab, { Wrapper, Container, MainWrapper, Row, Col12, Col9, Col3 } from "../Wrappers";
import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import styled from "styled-components";

const MapWrapper = styled.div`
  position: relative;
`;

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
};

class BasicMap extends Component {
    constructor(props) {
        super(props);
        this.state = {loadMap: 0};
    }

    setLoadMap = () => {
        this.setState({
            loadMap: 1
        });
    }

    render() {
        return (
            <YMaps>
                <MapWrapper>
                    { this.state.loadMap ? "" : <Loader /> }
                    <YMap onLoad={this.setLoadMap} width="100%" height="480px" defaultState={{
                        center: [56.737224, 37.170292],
                        zoom: 15
                    }}>
                        <Placemark geometry={[56.737224, 37.170292]} />
                    </YMap>
                </MapWrapper>
            </YMaps>
        )
    }
}