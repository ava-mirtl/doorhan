import React, {useState} from 'react';
import Title from '../Title/Title';
import Card from './Card';
import photo1 from "../../assets/images/premium1.png"
import photo2 from "../../assets/images/premium2.png"
import photo3 from "../../assets/images/premium3.png"
import photo4 from "../../assets/images/premium4.png"
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"
import { blue } from '../Title/Title';
import styles from './PartnerAndTeam.module.scss';



export default function PartnerAndTeam() {
const [slideIndex, setSlideIndex] = useState(0);
  const teamData = [{
      name: 'Сергей Казачинский', 
      profession: "Генеральный директор",
      src: `${team1}`
    }, 
    {
      name: 'Виолетта Савченко', 
      profession: "Финансовый директор",
      src: `${team2}`
    },
    {
      name: 'Ренат Тугушев', 
      profession: "Руководитель директор",
      src: `${team3}`
    }]
  let handleSlidePlus = () =>{
if(slideIndex===2){setSlideIndex(-1);}
setSlideIndex(prev=> prev+1)
  }
  let handleSlideMinus = () =>{
    if(slideIndex===0){setSlideIndex(3);}
    setSlideIndex(prev=> prev-1)
  }
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
        {teamData.map((item, i)=>(
          <Card key={i} img={item.src} name={item.name} profession={item.profession}/>
        ))} </div>
        {<div className={styles.sliderContainer}>
            <div className={styles.sliderButton} onClick={handleSlideMinus}>&#12296;</div>
            <Card img={teamData[slideIndex].src} name={teamData[slideIndex].name} profession={teamData[slideIndex].profession}/>
            <div onClick={()=>handleSlidePlus()} className={styles.sliderButton}>&#12297;</div>
          </div>}
       

      </div>
    </div>

  )
}