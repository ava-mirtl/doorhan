import React from 'react';
import Title from '../Title/Title';
import styles from './PartnerAndTeam.module.scss';
import photo1 from "../../assets/images/premium1.png"
import photo2 from "../../assets/images/premium2.png"
import photo3 from "../../assets/images/premium3.png"
import photo4 from "../../assets/images/premium4.png"
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"
import { blue } from '../Title/Title';


export default function PartnerAndTeam() {
  let mobile = window.innerWidth;
  return (
    <div>
      <div className={styles.partnerandteam}>
      <Title styles={blue} title="DOORHAN ПРЕМИУМ-ПАРТНЕР"/>

        <div className={styles.photos}>
          <img src={photo1} alt="производство" />
          <img src={photo2} alt="завод" />
          <img src={photo3} alt="профиль" />
          <img src={photo4} alt="склады" />
        </div>
        <Title styles={blue} title="НАША КОМАНДА"/>
        <div className={styles.our__team}>
          <div className={styles.team} id="1">
            <img src={team1} alt="гендиректор" />
            <div className={styles.team__name}>
              <div className={styles.name}>Сергей Казачинский</div>
              <div className={styles.profession}>Генеральный директор</div>
            </div>
          </div>
          <div className={styles.team} id = "2">
            <img src={team2} alt="финдиректор" />
            <div className={styles.team__name}>
              <div className={styles.name}>Виолетта Савченко</div>
              <div className={styles.profession}>Финансовый дирекор</div>
            </div>
          </div>
          <div className={styles.team} id="3">
            <img src={team3} alt="руководитель монтажников" />
            <div className={styles.team__name}>
              <div className={styles.name}>Ренат Тугушев</div>
              <div className={styles.profession}>Руководитель монтажников</div>
            </div>
          </div>



        </div>

      </div>
    </div>

  )
}