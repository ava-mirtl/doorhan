import React from 'react';
import Calc from '../Components/Calc/Calc';
import FirstScreen from '../Components/FirstScreen/FirstScreen';
import HowToBuy from '../Components/HowToBuy/HowToBuy';
import PartnerAndTeam from '../Components/PartnerAndTeam/PartnerAndTeam';
import Scheme from '../Components/Scheme/Scheme';
import WhyDoorhan from '../Components/WhyDoorhan/WhyDoorhan';
import styles from './Main.module.scss';


export default function Main() {
  return (
    <div>
      <FirstScreen/>
      <WhyDoorhan/>
      <Scheme/>
      <Calc/>
      <HowToBuy/>
      <PartnerAndTeam/>
    </div>
  )
}
