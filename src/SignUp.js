import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import { faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div>
            <div className={styles.loginPlate}>
                <Stack gap={2}>
                    <div className={styles.signUpLogo}>Sign-Up</div>
                    <Form>
                        <Form.Group id={styles.loginEmail}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="loginId" style={{ width: "50%", marginLeft: "5%" }}></Form.Control>
                        </Form.Group>
                        <Form.Group id={styles.loginPassword} style={{ backgroundColor: "red", marginTop: "-5%" }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id="loginPw" placeholder='Enter Password' style={{ width: "50%", marginLeft: "5%" }}></Form.Control>
                        </Form.Group>
                        <Form.Group id={styles.loginNickName}>
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="email" placeholder="Enter Nickname" style={{ width: "50%", marginLeft: "5%" }}></Form.Control>
                        </Form.Group>
                    </Form>
                    <Link to="/">
                        <Button className={styles.loginSubmit} variant='primary' size='lg'>Sign-Up</Button>
                    </Link>
                </Stack>
            </div>
        </div >
    );
};

export default SignUp;