import React from 'react';
import styles from './PartnerAndTeam.module.scss';
import photo1 from "../../assets/images/premium1.png"
import photo2 from "../../assets/images/premium2.png"
import photo3 from "../../assets/images/premium3.png"
import photo4 from "../../assets/images/premium4.png"
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"

export default function PartnerAndTeam() {
  return (
    <div>
      <div className={styles.title}>Doorhan преимум-партнер
      </div>
      <div className={styles.photos}>
        <img src={photo1} alt="photo" />
        <img src={photo2} alt="photo" />
        <img src={photo3} alt="photo" />
        <img src={photo4} alt="photo" />
      </div>
      <div className={styles.title}>Наша команда
      </div>
      <div className={styles.our__team}>
        <div className={styles.team}>
          <img src={team1} alt="photo" />
          <div className={styles.team__name}>
            <div className={styles.name}>Сергей Казачинский</div>
            <div className={styles.profession}>Генеральный директор</div>
          </div>
        </div>
        <div className={styles.team}>
          <img src={team2} alt="photo" />
          <div className={styles.team__name}>
            <div className={styles.name}>Виолетта Савченко</div>
            <div className={styles.profession}>Финансовый дирекор</div>
          </div>
        </div>
        <div className={styles.team}>
          <img src={team3} alt="photo" />
          <div className={styles.team__name}>
            <div className={styles.name}>Ренат Тугушев</div>
            <div className={styles.profession}>Руководитель монтажников</div>
          </div>
        </div>



      </div>


    </div>
  )
}