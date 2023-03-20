import React from 'react';
import logo from '../../assets/images/footer_logo.png'
import styles from './Footer.module.scss'


export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img src={logo} alt="Doorhan."/>
        <h2 className={styles.footerTitle}>КОНТАКТЫ</h2>
        <div className={styles.footerAdress}>
          <address className={styles.footerTxt}>Дальняя улица, 15, Одинцово, Московская область</address>
          <div className={styles.footerTxt}>+7 495 127 05 21</div>
          <a className={styles.footerLink} href="#">Политика конфиденциальности</a>
        </div>
      </div>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A97aa64e858252fff555113a374563c5873945fa5ae718fb93e4be04f8345f93c&amp;source=constructor" width="1000" height="400" frameborder="0" title='карта'></iframe>
    </div>
  )
}
