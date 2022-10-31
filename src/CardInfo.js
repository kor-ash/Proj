import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ShowInfo from './ShowInfo';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './CardInfo.module.css'
const CardInfo = () => {
    const [nick, setNick] = useState("")
    const [show, setShow] = useState(false)
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
                    <tr>
                        <td>1</td>
                        <td onClick={(e) => {
                            setNick(e.target.innerText)
                            handleShow()
                        }}>Mark</td>
                        <td>Gold</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Silver</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Bronze</td>
                    </tr>
                </tbody>
            </Table>
            <Modal dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title" show={show} onHide={handleClose} className={styles.Modal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>소환사 명:{nick}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tier:
                </Modal.Body>
                <Modal.Footer className={styles.modalFooter}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CardInfo;