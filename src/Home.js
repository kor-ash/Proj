import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './css/Home.module.css'
import { faSignOut, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentCard from './ContentCard';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
    const [target, setTarget] = useState("")

    const navi = useNavigate()
    const enterNick = (e) => {
        if (e.key == 'Enter') {
            navi(`/search/${target}`)
        }
    }
    const searchNick = (e) => {
        console.log(e.target.value)
        setTarget(e.target.value)
    }
    return (
        <div className={styles.homePlate}>
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
            <div className={styles.homeCard}>
                <ContentCard line={"봇"}></ContentCard>

                <ContentCard line={"정글"}></ContentCard>

                <ContentCard line={"탑"}></ContentCard>
                <ContentCard line={"미드"}></ContentCard>

            </div>
            <div className={styles.homeSearch}>
                <input className={styles.homeSearchInput} placeholder="소환사명을 검색해보세요" onChange={searchNick} onKeyPress={enterNick}></input>
                <FontAwesomeIcon icon={faSearch} className={styles.homeUserSearch} />
            </div>
        </div >
    );
};

export default Home;