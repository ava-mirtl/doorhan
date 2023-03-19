import React, {useState} from 'react';
import styles from './Header.module.scss';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import logo from '../../assets/images/logo.png';
import atm from '../../assets/icons/local_atm.png';
import percent from '../../assets/icons/percent.png';
import settings from '../../assets/icons/settings.png';
import shipping from '../../assets/icons/local_shipping (1).png';
import box from '../../assets/icons/warehouse.png';
import Button from '../Button/Button'
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { medium } from '../Button/Button';


export default function Header() {

document.body.style.overflow = '';

const [modalSecond, setModalSecond] = useState(false);
const [modalActive, setModalActive] = useState(false);

const handleSubmit = (event)=>
    {
      setModalSecond(false);
      event.preventDefault();
      setModalActive(true);
    }


const handleClick = (event)=>
    {
    event.preventDefault();
    setModalSecond(true);
    }


  return (<>
    <div className={styles.header}> 
      <img className={styles.logo} src={logo} alt="logo"/>
      <span className={styles.phone}>+7(495)127-05-21</span>
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder='Телефон'/>
        <button type='submit' onClick={(e)=>handleSubmit(e)} 
        className={styles.btn}>Заказать звонок</button></form>
    </div>
    <div className={styles.mainСontainer}>
      <div className={styles.imgCont}>
        <div className={styles.buttonCont}>
          <Button name="ЗАПИСАТЬСЯ НА ЗАМЕР" onClick={handleClick} styles={medium}/>
        </div>
      </div>
    <div className={styles.content}>
      <h1>ГАРАЖНЫЕ ВОРОТА DOORHAN</h1>
    <div className={styles.subtitle}>ПРОИЗВОДСТВО. ДОСТАВКА. МОНТАЖ.</div>
    <div className={styles.item}>
      <OrangeBtn img={atm}/>
      <span className={styles.txt}>10% ПРЕДОПЛАТА.</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={percent}/>
      <span className={styles.txt}>РАССРОЧКА ОТ 3 ДО 12 МЕСЯЦЕВ</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={settings}/>
      <span className={styles.txt}>ЕЖЕГОДНОЕ БЕСПЛАТНОЕ ОБСЛУЖИВАНИЕ</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={shipping}/>
      <span className={styles.txt}>БЕСПЛАТНЫЙ ВЫЕЗД ЗАМЕРЩИКА</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={box}/>
      <span className={styles.txt}>СВОИ СКЛАДЫ В : ОДИНЦОВО, МЫТИЩИ, ЛЮБЕРЦЫ, ПОДОЛЬСК</span>
    </div>
  </div>
</div>
      {modalActive&&
        <ModalGrats active={modalActive} setActive={setModalActive}/> 
      }
      {modalSecond&&
        <ModalInputs active={modalSecond} setActive={setModalSecond} handleSubmit={handleSubmit}/>
      }
    </>
  )
}
