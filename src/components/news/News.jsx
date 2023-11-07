import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import styles from './news.module.scss';

function News() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Новости</h3>
            <div className={styles.cards}>
                {data && data.map(card => <Card key={card.id} card={card} />)}
            </div>
        </div>
    );
};

export default News