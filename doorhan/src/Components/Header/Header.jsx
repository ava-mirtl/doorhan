import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';



export default function Header() {
  return (<>
    <div className={styles.header}> 
    <img className={styles.logo} src={logo} alt="logo"/>
    <span className={styles.phone}>+7(495)127-05-21</span>
    <div className={styles.form}>
    <input type="text" className={styles.input} placeholder='Телефон'/>
    <button className={styles.btn}>Заказать звонок</button></div>
    </div></>
  )
}
