import React, {useState} from 'react';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import popup from '../../assets/images/popup1.jpg';
import calendar from '../../assets/icons/calendar.png';
import house from '../../assets/icons/house.png';
import price from '../../assets/icons/price.png';
import sm from '../../assets/icons/sm.png';
import bibip from '../../assets/icons/bibip.png';
import dogovor from '../../assets/icons/dogovor.png';
import styles from './HowToBuy.module.scss';


export default function HowToBuy() {
  document.body.style.overflow = '';
  const [modalActive, setModalActive] = useState(false);
  const date = new Date
  const handleClick = (event)=>{
    event.preventDefault();
  setModalActive(true);
  }
    return (
    <div className={styles.box}>
    <h2 className={styles.title}>КАК КУПИТЬ ВОРОТА ЗА 1 ДЕНЬ</h2>

    <div className={styles.container}>
      <div  className={styles.dropContainer}>
        <OrangeBtn img={calendar}/>
        <div  className={styles.borderContainer}/>
        <OrangeBtn img={house}/>
        <div  className={styles.borderContainer}/>
        <OrangeBtn img={price}/>
      </div>
      <div className={styles.txtContainer}>
      <div className={styles.txtC1}><div className={styles.txt}>МЫ МОЖЕМ ВАМ ПОМОЧЬ ПРИОБРЕСТИ ВОРОТА ЗА 1 ДЕНЬ!</div></div>
      <div className={styles.txtC2}><div className={styles.txt}>БОЛЬШОЙ АССОРТИМЕНТ ГОТОВЫХ ВОРОТ МЫ ХРАНИМ НА НАШЕМ СКЛАДЕ.</div></div>
      <div className={styles.txtC3}><div className={styles.txt}>НА ВОРОТА СО СКЛАДА ДЕЙСТВУЕТ СПЕЦИАЛЬНАЯ ЦЕНА.</div></div>
      </div>
      <div  className={styles.dropContainer2}>
      <OrangeBtn img={sm}/>
        <div  className={styles.borderContainer}>
          <img src={bibip} alt="машинка" />
        </div>
        <OrangeBtn img={dogovor}/>
      </div>
      <div className={styles.txtContainer2}>
      <div className={styles.txtC4}><div className={styles.txt}>ЕСЛИ ВЫ ЗНАЕТЕ РАЗМЕРЫ СВОЕГО ПРОЕМА, МЫ ПОДБЕРЕМ ВОРОТА ИЗ ТЕХ, ЧТО В НАЛИЧИИ НА СКЛАДЕ.</div></div>
      <div className={styles.txtC5}><div className={styles.txt}>ЗАКЛЮЧИВ ДОГОВОР ПО ЭЛЕКТРОННОЙ ПОЧТЕ, ВЫ СМОЖЕТЕ РАССЧИТАТЬСЯ ПО ФАКТУ ДОСТАВКИ ВОРОТ НА ОБЪЕКТ.</div></div>
      </div>
<div className={styles.dateContainer}>
<div className={styles.txtDate}>УСПЕЙ ЗАКАЗАТЬ СЕГОДНЯ!</div>
<div className={styles.date}>{date.getDate()}.{date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1}</div>
</div>
<form className={styles.formNext}>
    <input type="text" className={styles.inputNext} placeholder='Имя'/>
    <input type="text" className={styles.inputNext} placeholder='Телефон'/>
    <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleClick} />
    </form>
    </div>{modalActive&& <Modal active={modalActive} setActive={setModalActive}>
    <div className={styles.popupContainer}>
    <div className={styles.imgContainer}>
  <img src={popup} alt="девушка"/>
  </div>
  <div className={styles.popupTxt}><div className={styles.popupTitle}>СПАСИБО ЗА ВАШЕ ОБРАЩЕНИЕ, НАШ МЕНЕДЖЕР СКОРО С ВАМИ СВЯЖЕТСЯ!
    </div></div>
        </div></Modal>}
    </div>
    
  )
}
