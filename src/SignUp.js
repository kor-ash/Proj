import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ShowInfo from './ShowInfo';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import styles from './css/SignUp.module.css'
import Stack from 'react-bootstrap/Stack'
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
const Test = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/space.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={styles.signUpPlate}>
                            <Stack gap={2}>
                                <div className={styles.signUpLogo}>Sign-Up</div>
                                <Form>
                                    <Form.Group className={styles.signUpFirst}>
                                        <Form.Label style={{ marginRight: "75%", color: "white" }}>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" id="loginId" style={{ width: "50%", marginLeft: "10%" }}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className={styles.signUpSecond}>
                                        <Form.Label style={{ marginTop: "10%", marginRight: "65%", color: "white" }}>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" style={{ width: "50%", marginLeft: "10%" }}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className={styles.signUpThird}>
                                        <Form.Label style={{ marginTop: "10%", marginRight: "65%", color: "white" }}>Nickname</Form.Label>
                                        <Form.Control type="text" placeholder='Enter Nickname' style={{ width: "50%", marginLeft: "10%" }}></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Stack>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/space.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className={styles.signUpPlate}>
                            <Stack gap={2}>
                                <div className={styles.signUpLogo}>Sign-Up</div>
                                <Form>
                                    <Form.Group className={styles.signUpFirst}>
                                        <Form.Label style={{ marginRight: "75%", color: "white" }}>ID</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" id="loginId" style={{ width: "50%", marginLeft: "10%" }}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className={styles.signUpSecond}>
                                        <Form.Label style={{ marginRight: "65%", color: "white" }}>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter phone number" style={{ width: "50%", marginLeft: "10%" }}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className={styles.signUpThird}>
                                        <Form.Label style={{ marginRight: "70%", color: "white" }}>Age</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your age" style={{ width: "50%", marginLeft: "10%" }}></Form.Control>
                                    </Form.Group>
                                    <div>
                                        <div className={styles.signUpForth}>성별</div>
                                        <select style={{ marginRight: "65%", height: "30px" }}>
                                            <option key="Male" value="Male">
                                                Male
                                            </option>
                                            <option key="Female" value="Female">
                                                Female
                                            </option>
                                        </select>
                                    </div>
                                    <Link to="/">
                                        <Button className={styles.loginSubmit} variant='primary' size='lg'>Sign-Up</Button>
                                    </Link>
                                </Form>
                            </Stack>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Test;