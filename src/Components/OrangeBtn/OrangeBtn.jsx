import React from 'react';
import styles from "./OrangeBtn.module.scss"



export default function OrangeBtn(props) {
    return (
        <div>
            <div className={styles.icon__container}>
                <div className={styles.icon}>
                    <img src={props.img} alt="icon" />
                </div>
            </div>
        </div>
    )

}