import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarData from './components/navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import SingleThreadForList from "./components/threads/SingleThreadForList";
import {valuesLinks} from "./enumerators/links";
import EditorDemo from "./components/threads/EditThread";
import SingleThreadForEdit from "./components/threads/SingleThreadForEdit";
// import Hello from './components/test_components/HelloWorld';
// import SidebarFive from './components/sidebar/SidebarFive';
// import LoginGroup from './components/login/LoginForm';
// import SignUpForm from './components/signup/SignUpForm';
// import Logout from './components/login/Logout';
// import PaginatedTasks from './components/paginate/PaginatedTasks';
// import PaginatedUsers from './components/paginate/PaginatedUsers';
// import PaginatedTasksByUser from './components/paginate/PaginatedTasksByUser';
// import CreateTask from './components/createTask/CreateTask';
// import CurrentLoggedUser from './components/functions/currentLoggedUser';
// import UserCardData from './components/user/UserCardData';
// import CurrentUserCard from './components/user/CurrentUserDataCard';
// import WebsocketData from './components/ws/websocket';
// import ScrollButton from './components/scrollButton/ScrollButton';

function App() {
  return (
      <Container fluid>
        <Router>
          <Row>
            <Col>
              <NavbarData />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              {/*<SidebarFive />*/}

            </Col>
            <Col sm={8}>
              <Routes>

                < Route path="/" element={<SingleThreadForList />} />
                < Route path={valuesLinks.EditTask+":id"} element={<SingleThreadForEdit />} />
                {/*< Route path="/users" element={<PaginatedUsers />} />*/}
                {/*< Route path="/tasks" element={<PaginatedTasks />} />*/}
                {/*< Route path="/login" element={<LoginGroup />} />*/}
                {/*< Route path="/logout" element={<Logout />} />*/}
                {/*< Route path="/signup" element={<SignUpForm />} />*/}
                {/*< Route path="/createTask" element={<CreateTask />} />*/}
                {/*< Route path="/usertasks" element={<PaginatedTasksByUser data={user} />} />*/}
                {/*< Route path="/users/:id" element={<UserCardData />} />*/}
                {/*< Route path="/currentuser/:id" element={<CurrentUserCard />} />*/}
                {/*< Route path="/websocket" element={<WebsocketData />} />*/}

              </Routes>
            </Col>

            <Col sm={2}>
              {/*<SidebarFive />*/}

              {/*<SingleThreadForList />*/}
            </Col>
          </Row>
        </Router>
        {/*<ScrollButton />*/}
      </Container>

  );
}

export default App;
