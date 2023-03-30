import React from 'react';
import styles from './PartnerAndTeam.module.scss';


export default function Card({img, name, profession}) {
  return (
    <div className={styles.team} id="2">
            <img src={img} alt="человек" />
            <div className={styles.team__name}>
              <div className={styles.name}>{name}</div>
              <div className={styles.profession}>{profession}</div>
            </div>
          </div>
  )
}
