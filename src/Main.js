import React, {Component} from 'react';
import styled, { css } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from './components/header/Header';
import Home from './components/header/Home';
import Map from './components/header/Map';
import Timer from './components/header/Timer';
import { Theme } from "./components/Theme";
import { Wrapper, Container, MainWrapper, Row, Col9, Col3, Dropdown } from "./components/Wrappers";

const Content = styled.main`
  background: ${Theme.colors.bg3};
`

class Main extends Component {
    render() {
        return (
            <Wrapper>
                <BrowserRouter>
                    <HeaderContainer />
                    <Content>
                        <Routes>
                            <Route index  path="/" element={<Home />}/>
                            <Route path="/map" element={<Map />}/>
                            <Route path="/timer" element={<Timer />}/>
                        </Routes>
                    </Content>
                </BrowserRouter>
            </Wrapper>
        );
    }
}

export default Main;