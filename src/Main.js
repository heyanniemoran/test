import React, {Component} from 'react';
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/header/Navbar';
import Home from './components/header/Home';
import Map from './components/header/Map';
import Timer from './components/header/Timer';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <header className="header">
                    <div className="header__top d-flex justify-content-between align-items-center">
                        <div className="header__top-link">
                            <a href="#"><b>User-Pages</b> - Profile</a>
                        </div>
                        <div className="header__top-icons header__icons d-flex align-items-baseline">
                            <a href="#" className="headers__icons-item">
                                <img src="#" alt="Statistics"/>
                                <p>Statistics</p>
                            </a>
                            <a href="#" className="headers__icons-item">
                                <img src="#" alt="Invoices"/>
                                <p>Invoices</p>
                            </a>
                            <a href="#" className="headers__icons-item">
                                <img src="#" alt="Schedule"/>
                                <p>Schedule</p>
                            </a>
                        </div>
                    </div>
                    <div className="header__navbar d-flex justify-content-between align-items-center">
                        <Navbar/>
                        <nav className="header__navbar-other">
                            <ul>
                                <li>
                                    <a href="#">Notes</a>
                                </li>
                                <li>
                                    <a href="#">Friends</a>
                                </li>
                                <li>
                                    <a href="#">Photos</a>
                                </li>
                                <li>
                                    <a href="#">Photos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="content">
                        <Routes>
                            <Route index  path="/" element={<Home />}/>
                            <Route path="/map" element={<Map />}/>
                            <Route path="/timer" element={<Timer />}/>
                        </Routes>
                    </div>
                </header>
            </BrowserRouter>
        );
    }
}

export default Main;