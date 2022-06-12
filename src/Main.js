import React, {Component} from 'react';
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from './components/header/Header';
import Home from './components/content/Home';
import Map from './components/content/Map';
import Timer from './components/content/Timer';
import { Theme } from "./components/Theme";
import { Wrapper } from "./components/Wrappers";

const Content = styled.main`
  background: ${Theme.colors.bg3};
`

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {date: 0};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let current_date = this.state.date + 1;
        this.setState({
            date: current_date
        });
    }

    render() {
        return (
            <Wrapper>
                <BrowserRouter>
                    <HeaderContainer />
                    <Content>
                        <Routes>
                            <Route index  path="/" element={<Home />}/>
                            <Route path="/map" element={<Map />}/>
                            <Route path="/timer" element={<Timer date={this.state.date} />}/>
                        </Routes>
                    </Content>
                </BrowserRouter>
            </Wrapper>
        );
    }
}

export default Main;

