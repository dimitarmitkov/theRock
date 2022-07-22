import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarData from './components/navbar/Navbar';
import {Container, Row, Col} from 'react-bootstrap';
import SingleThreadForList from "./components/threads/SingleThreadForList";
import {valuesLinks} from "./enumerators/links";
import SingleThreadForEdit from "./components/threads/SingleThreadForEdit";
import StartThread from "./components/threads/StartThread";

function App() {
    return (
        <Container fluid>
            <Router>
                <Row>
                    <Col>
                        <NavbarData/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={8}>
                        <Routes>

                            < Route path="/" element={<SingleThreadForList/>}/>
                            < Route path={valuesLinks.EditTask + ":id"} element={<SingleThreadForEdit/>}/>
                            < Route path={valuesLinks.StartTask} element={<StartThread/>}/>

                        </Routes>
                    </Col>

                    <Col sm={2}>
                    </Col>
                </Row>
            </Router>
        </Container>
    );
}

export default App;
