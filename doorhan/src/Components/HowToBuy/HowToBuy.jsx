import React from 'react';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import calendar from '../../assets/icons/calendar.png';
import house from '../../assets/icons/house.png';
import price from '../../assets/icons/price.png';
import sm from '../../assets/icons/sm.png';
import bibip from '../../assets/icons/bibip.png';
import dogovor from '../../assets/icons/dogovor.png';


import styles from './HowToBuy.module.scss';


export default function HowToBuy() {
  return (
    <div className={styles.container}>
      <div  className={styles.dropContainer}>
        <OrangeBtn img={calendar}/>
        <div  className={styles.borderContainer}/>
        <OrangeBtn img={house}/>
        <div  className={styles.borderContainer}/>
        <OrangeBtn img={price}/>
      </div>
      <div className={styles.txtContainer}>
        <div className={styles.txt}>МЫ МОЖЕМ ВАМ ПОМОЧЬ ПРИОБРЕСТИ ВОРОТА ЗА 1 ДЕНЬ!</div>
        <div className={styles.txt}>БОЛЬШОЙ АССОРТИМЕНТ ГОТОВЫХ ВОРОТ МЫ ХРАНИМ НА НАШЕМ СКЛАДЕ.</div>
        <div className={styles.txt}>НА ВОРОТА СО СКЛАДА ДЕЙСТВУЕТ СПЕЦИАЛЬНАЯ ЦЕНА.</div>
      </div>
      <div  className={styles.dropContainer2}>
      <OrangeBtn img={sm}/>
        <div  className={styles.borderContainer}>
          <img src={bibip} alt="машинка" />
        </div>
        <OrangeBtn img={dogovor}/>
      </div>
      <div className={styles.txtContainer2}>
        <div className={styles.txt}>ЕСЛИ ВЫ ЗНАЕТЕ РАЗМЕРЫ СВОЕГО ПРОЕМА, МЫ ПОДБЕРЕМ ВОРОТА ИЗ ТЕХ, ЧТО В НАЛИЧИИ НА СКЛАДЕ.</div>
        <div className={styles.txt}>ЗАКЛЮЧИВ ДОГОВОР ПО ЭЛЕКТРОННОЙ ПОЧТЕ, ВЫ СМОЖЕТЕ РАССЧИТАТЬСЯ ПО ФАКТУ ДОСТАВКИ ВОРОТ НА ОБЪЕКТ.</div>
      </div>
    </div>
  )
}
