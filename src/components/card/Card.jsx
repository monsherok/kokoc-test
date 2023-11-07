import React, { useState } from 'react'
import styles from './card.module.scss'
import { IconHeart, IconHeartVoted } from '../../img/icons';

function convertDate(dateString) {
    const parts = dateString.split('-');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function reformatDate(dateString) {
    const parts = dateString.split('-');
    const year = parts[2].slice(2)
    return `${parts[0]}.${parts[1]}.${year}`;
}

function Card({ card }) {
    const [voted, setVoted] = useState(card.voteStatus ? card.voteStatus : false)

    function handleVote(e) {
        e.preventDefault()
        e.stopPropagation()
        setVoted(!voted)
    }

    return (
        <a href={card.id} className={styles.card}>
            <div className={styles.image}>
                <img src={card.imgUrl} alt={card.name} />
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <h4 className={styles.title}>{card.name}</h4>
                    <time className={styles.time} dateTime={card.date && convertDate(card.date)}>{card.date && reformatDate(card.date)}</time>
                </div>
                <p className={styles.text}>{card.text}</p>
                <div className={styles.bottom}>
                    <p className={styles.author}>{card.author}</p>
                    <button onClick={(e) => { handleVote(e) }} className={styles.vote}>{voted ? <IconHeartVoted /> : <IconHeart />}</button>
                </div>
            </div>
        </a>
    )
}

export default Card