import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ShowInfo from './ShowInfo';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './CardInfo.module.css'
const CardInfo = () => {
    useEffect(() => {
        /*
        nickname에 해당하는 최근전적 10승 받아와서 리스트로 셋팅
        Data 받아와서 setData (카드뉴스) 
        */
    })
    const showModal = (e) => {
        let idx = e.target.closest("tr").rowIndex - 1
        setTier(dummy[idx].tier)
        setNick(e.target.innerText)
        handleShow()
    }
    const dummyHistory = [{ "champ": "르블랑", "kda": "5/3/1", "score": "2.0", "res": "승" },
    { "champ": "아지르", "kda": "13/3/2", "score": "5.0", "res": "패" },
    { "champ": "사일러스", "kda": "8/3/1", "score": "3.0", "res": "승" },
    { "champ": "제드", "kda": "8/3/1", "score": "3.0", "res": "승" },
    { "champ": "리산드라", "kda": "8/3/1", "score": "3.0", "res": "승" }
    ]
    const dummy = [{ "nick": "Hide on Bush", "tier": "Challenger" }
        , { "nick": "추기급인", "tier": "Gold" }
        , { "nick": "춤추는제비나비", "tier": "Silver" }]
    const [nick, setNick] = useState("")
    const [show, setShow] = useState(false)
    const [tier, setTier] = useState("")
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Tier</th>
                    </tr>
                </thead>
                <tbody>
                    {dummy.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td onClick={(e) => {
                                    showModal(e)
                                }}>{item.nick}</td>
                                <td>{item.tier}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <Modal dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title" show={show} onHide={handleClose} className={styles.Modal} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h3 style={{ textAlign: "center", border: "solid 1px black", width: "100%", marginLeft: "28%" }}>소환사 명:{nick}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 style={{ textAlign: "center", marginTop: "25px" }}>Tier:{tier}</h3>
                </Modal.Body>
                <Modal.Footer className={styles.modalFooter} style={{ display: "flex", justifyContent: "center", marginTop: "-15%", paddingTop: "-1%" }} centered mb-5>
                    <Table bordered hover size="sm" style={{ marginTop: "50px" }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>챔피언</th>
                                <th>KDA</th>
                                <th>Score</th>
                                <th>결과</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyHistory.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{item.champ}</td>
                                        <td>{item.kda}</td>
                                        <td>{item.score}</td>
                                        <td>{item.res}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={handleClose}>
                        Matching
                    </Button>
                    <Button variant="secondary" onClick={handleClose} centered>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default CardInfo;