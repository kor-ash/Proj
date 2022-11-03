import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import { faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './css/Login.module.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const Login = () => {
    return (
        <div className={styles.loginBack}>
            <div className={styles.loginPlate}>

                <Stack gap={3}>
                    <div className={styles.loginLogo}>Log-in</div>
                    <Form>
                        <Form.Group id={styles.loginEmail}>
                            <Form.Label style={{ marginLeft: "3%" }}>Email</Form.Label>
                            <Form.Control style={{ width: "80%", marginLeft: "3%" }} type="email" placeholder="Enter email"></Form.Control>
                        </Form.Group>
                        <Form.Group id={styles.loginPassword}>
                            <Form.Label style={{ marginLeft: "3%" }} >Password</Form.Label>
                            <Form.Control style={{ width: "80%", marginLeft: "3%" }} type="password"></Form.Control>
                        </Form.Group>
                        <Form.Group className={styles.loginCheckbox}>
                            <Form.Check type="checkbox" label="Remember Me"></Form.Check>
                            <Link className={styles.loginSignup} to="./Signup">
                                Sign-up
                            </Link>
                        </Form.Group>
                    </Form>
                    <div className={styles.loginSns}>
                        <div><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
                        <div><FontAwesomeIcon icon={faFacebookF} size="2x" /></div>
                        <div><FontAwesomeIcon icon={faTwitter} size="2x" /></div>
                    </div>
                    <Link to="/home">
                        <Button className={styles.loginSubmit} variant='primary' size='lg'>Sign-in</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    );
};

export default Login;