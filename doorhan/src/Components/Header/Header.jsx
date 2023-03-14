import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import doorhan from '../../assets/images/Rectangle31.png';
import atm from '../../assets/icons/local_atm.png';
import percent from '../../assets/icons/percent.png';
import settings from '../../assets/icons/settings.png';
import shipping from '../../assets/icons/local_shipping (1).png';
import box from '../../assets/icons/warehouse.png';

import OrangeBtn from '../OrangeBtn/OrangeBtn';



export default function Header() {
  return (<>
    <div className={styles.header}> 
    <img className={styles.logo} src={logo} alt="logo"/>
    <span className={styles.phone}>+7(495)127-05-21</span>
    <form className={styles.form}>
    <input type="text" className={styles.input} placeholder='Телефон'/>
    <button type='submit' className={styles.btn}>Заказать звонок</button></form>
    </div>
    <div className={styles.mainСontainer}>
<div className={styles.imgCont}>
  <img className={styles.img} src={doorhan} alt="Ворота" />
</div>
<div className={styles.content}>
  <h1>ГАРАЖНЫЕ ВОРОТА DOORHAN</h1>
  <div className={styles.subtitle}>ПРОИЗВОДСТВО. ДОСТАВКА. МОНТАЖ.</div>
  <div className={styles.item}>
    <OrangeBtn img={atm}/><span className={styles.txt}>10% предоплата.</span>
  </div>
  <div className={styles.item}>
    <OrangeBtn img={percent}/><span className={styles.txt}>Рассрочка от 3 до 12 месяцев</span>
  </div><div className={styles.item}>
    <OrangeBtn img={settings}/><span className={styles.txt}>Ежегодное бесплатное обслуживание</span>
  </div><div className={styles.item}>
    <OrangeBtn img={shipping}/><span className={styles.txt}>Бесплатный выезд замерщика</span>
  </div><div className={styles.item}>
    <OrangeBtn img={box}/><span className={styles.txt}>Свои склады  в : Одинцово, Мытищи, Люберцы, Подольск</span>
  </div>
</div>
    </div>
  </>
  )
}
