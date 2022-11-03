import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './css/Community.module.css'
import { faSignOut, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentCard from './ContentCard';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Community = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Link to='/home'>
                        <Navbar.Brand>듀오 구해요</Navbar.Brand>
                    </Link>
                    <Link to='/community'>
                        <Navbar.Brand>커뮤니티</Navbar.Brand>
                    </Link>
                    <Link to='/ranking'>
                        <Navbar.Brand>랭 킹</Navbar.Brand>
                    </Link>
                    <Navbar.Brand>
                        <div className={styles.homeNavUtil}>
                            <Link to="/">
                                <FontAwesomeIcon icon={faSignOut} className={styles.homeSignOut} />
                            </Link>
                            <FontAwesomeIcon icon={faUser} className={styles.homeUserInfo} />
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className={styles.comWrap}>
                <div className={styles.comRowContainer}>
                    <Card style={{ width: '40rem', height: '25rem' }}>
                        <Card.Header>
                            <h3>자유게시판</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40rem', height: '25rem' }}>
                        <Card.Header>
                            <h3>정보게시판</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={styles.comRowContainer} style={{ display: "flex" }}>
                    <Card style={{ width: '40rem', height: '25rem' }}>
                        <Card.Header>
                            <h3>자유게시판</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40em', height: '25rem' }}>
                        <Card.Header>
                            <h3>정보게시판</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div >
    );
};

export default Community;