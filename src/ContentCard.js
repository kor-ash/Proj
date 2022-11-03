import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardInfo from './CardInfo';
import styles from './css/ContentCard.module.css'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const ContentCard = ({ line }) => {
  return (
    <Card style={{ width: '18rem' }} className="text-center">
      <Card.Body>
        <Card.Header className={styles.cardLineTitle}>{line}</Card.Header>
        <CardInfo></CardInfo>
        <div className={styles.cardBtn}>
          <Link to='/match/:line'>
            <Button variant="primary">Go Match</Button>
          </Link>
          <Button variant="primary">See more..</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;