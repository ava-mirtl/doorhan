import React from 'react';
import styles from './PartnerAndTeam.module.scss';
import photo1 from "../../assets/images/premium1.png"
import photo2 from "../../assets/images/premium2.png"
import photo3 from "../../assets/images/premium3.png"
import photo4 from "../../assets/images/premium4.png"
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team1.png"
import team3 from "../../assets/images/team1.png"

export default function PartnerAndTeam() {
  return (
    <div>
      <div className="title">
        <p>Doorhan преимум-партнер</p>
        {/* <img src={vector} alt="alt" /> */}
      </div>
      <div className="photos">
        <img src={photo1} alt="photo" />
        <img src={photo2} alt="photo" />
        <img src={photo3} alt="photo" />
        <img src={photo4} alt="photo" />
      </div>
      <div className="title">
        <p>Наша команда</p>
        {/* <img src={} alt="alt" /> */}
      </div>
      <div className="our-team">
        <div className="team">
          <img src={team1} alt="photo" />
          <div className="team-name">
            <div className="name">Сергей Казачинский</div>
            <div className="profession">Генеральный директор</div>
          </div>
        </div>
        <div className="team">
          <img src={team2} alt="photo" />
          <div className="team-name">
            <div className="name">Виолетта Савченко</div>
            <div className="profession">Финансовый дирекор</div>
          </div>
        </div>
        <div className="team">
          <img src={team3} alt="photo" />
          <div className="team-name">
            <div className="name">Ренат Тугушев</div>
            <div className="profession">Руководитель монтажников</div>
          </div>
        </div>



      </div>


    </div>
  )
}