import React, { useState } from 'react';

import styles from '../Tablist/Tablist.module.scss';
import vor1 from '../../assets/images/vorota1.png';
import vor2 from '../../assets/images/vorota2.png';
import vor3 from '../../assets/images/vorota3.png';




export default function Tabs() {
    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <input type="radio" id="radio-1" name="tabs" />
                <label className={styles.tab} htmlFor="radio-1">ОТКАТНЫЕ</label>
                <input type="radio" id="radio-2" name="tabs" />
                <label className={styles.tab} htmlFor="radio-2">РАСПАШНЫЕ</label>
                <input type="radio" id="radio-3" name="tabs" />
                <label className={styles.tab} htmlFor="radio-3">ГАРАЖНЫЕ</label>
                <span className={styles.glider}></span>

            </div>
            <div className={styles.content1}>
                <img src={vor1} alt="ОТКАТНЫЕ" />
            </div>
            <div className={styles.content2}>
                <img src={vor2} alt="РАСПАШНЫЕ" />
            </div>
            <div className={styles.content3}>
                <img src={vor3} alt="ГАРАЖНЫЕ" />
            </div>
        </div>

    )
}

