import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Home.module.css'
import { faSignOut,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentCard from './ContentCard';
const Home = () => {
    /*
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
        </Navbar.Collapse>
    */
    return (
        <div className={styles.homePlate}>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">듀오 구해요</Navbar.Brand>


                    <Navbar.Brand href="#home">커뮤니티</Navbar.Brand>
                    <Navbar.Brand href="#home">랭 킹</Navbar.Brand>

                    <Navbar.Brand href="#home">
                        <div className={styles.homeNavUtil}>
                            <FontAwesomeIcon icon={faSignOut} className={styles.homeSignOut}/>
                            <FontAwesomeIcon icon={faUser} className={styles.homeUserInfo} />
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>    
            <div className={styles.homeCard}>
                <ContentCard></ContentCard>

                <ContentCard></ContentCard>

                <ContentCard></ContentCard>
                
            </div>

        </div>
    );
};

export default Home;