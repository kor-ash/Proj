import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import { faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Login.module.css' 
const Login = () => {
    return (
        <div>
            <div className={styles.loginPlate}>
                <Stack gap={3}>
                    <div className={styles.loginLogo}>Log-in</div>
                    <Form>
                        <Form.Group id={styles.loginEmail}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="loginId"></Form.Control>
                        </Form.Group>
                        <Form.Group id={styles.loginPassword}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id="loginPw"></Form.Control>
                        </Form.Group>
                        <Form.Group className={styles.loginCheckbox}>
                            <Form.Check type="checkbox" label="Remember Me"></Form.Check>
                            <div className={styles.loginSignup}>Sign-up</div>
                        </Form.Group>
                    </Form>
                    <div className={styles.loginSns}>
                        <div><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
                        <div><FontAwesomeIcon icon={faFacebookF} size="2x" /></div>
                        <div><FontAwesomeIcon icon={faTwitter} size="2x" /></div>
                    </div>
                    <Button className={styles.loginSubmit}variant='primary' size='lg'>Sign-in</Button>
                </Stack>
            </div>
        </div>
    );
};

export default Login;