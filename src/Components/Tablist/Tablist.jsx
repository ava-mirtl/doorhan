import React, { useState } from 'react';

import styles from '../Tablist/Tablist.module.scss';
import vor1 from '../../assets/images/vorota1.png';
import vor2 from '../../assets/images/vorota2.png';
import vor3 from '../../assets/images/vorota3.png';




export default function Tabs({vorota, state}) {

    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);

    const handleChekOne = () => {
        setThree(false);
        setTwo(false);
        setOne(true)
    }

    const handleChekTwo = () => {
        setThree(false);
        setOne(false);
        setTwo(true)
    }

    const handleChekThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <input type="radio" id="radio-1" name="tabs" 
                value="откатные" checked={vorota=="откатные"?true:false}
                onChange={(e)=>state(e.target.value)} onClick={handleChekOne} />
                <label className={styles.tab} htmlFor="radio-1">ОТКАТНЫЕ</label>
                <input type="radio" id="radio-2" name="tabs" 
                value="распашные" checked={vorota=="распашные"?true:false}
                onChange={(e)=>state(e.target.value)} onClick={handleChekTwo} />
                <label className={styles.tab} htmlFor="radio-2">РАСПАШНЫЕ</label>
                <input type="radio" id="radio-3" name="tabs" 
                value="гаражные" checked={vorota=="гаражные"?true:false}
                onChange={(e)=>state(e.target.value)} 
                onClick={handleChekThree} />
                <label className={styles.tab} htmlFor="radio-3">ГАРАЖНЫЕ</label>
                <span className={styles.glider}></span>
            </div>
            {one && <div className={styles.content}>
            <img src={vor3} alt="ГАРАЖНЫЕ" />
            </div>}
            {two && <div className={styles.content}>
                <img src={vor2} alt="РАСПАШНЫЕ" />
            </div>}
            {three && <div className={styles.content}>
            <img src={vor1} alt="ОТКАТНЫЕ" />
            </div>}
        </div>

    )
}

