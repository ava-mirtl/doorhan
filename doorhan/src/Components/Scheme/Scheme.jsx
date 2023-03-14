import React from 'react';
import styles from './Scheme.module.scss';

import icon_call from "../../assets/icons/call.png"
import file_present from "../../assets/icons/file_present.png"
import lift_to_talk from "../../assets/icons/lift_to_talk.png"
import description from "../../assets/icons/description.png"
import straighten from "../../assets/icons/straighten.png"
import local_shipping from "../../assets/icons/local_shipping.png"

export default function Scheme() {
  return (
    <div>
      <div className={styles.scheme}>
        <div className={styles.title}>Cхема работы</div>

        <div className={styles.scheme__container}>

          <div className={styles.scheme__block}>
            <div className={styles.icon__container}>
              <div className={styles.icon}>
                <img src={icon_call} alt="icon" />
              </div>
            </div>
            <div className={styles.text}>
              <p>Вы звоните нам по телефону или оставляете заявку через <a href="#">ФОРМУ НА САЙТЕ</a></p>
            </div>
          </div>


          <div className={styles.scheme__block}>
            <div className={styles.icon__container}>
              <div className={styles.icon}>
                <img src={file_present} alt="icon" />
              </div>
            </div>
            <div className={styles.text}>
              <p>Мы заключаем договор</p>
            </div>
          </div>


          <div className={styles.scheme__block}>
            <div className={styles.icon__container}>
              <div className={styles.icon}>
                <img src={lift_to_talk} alt="icon" />
              </div>
            </div>
            <div className={styles.text}>
              <p>Наш специалист выполняет расчет заказа и консультирует вас</p>
            </div>
          </div>


          <div className={styles.scheme__block}>
            <div className={styles.icon__container}>
              <div className={styles.icon}>
                <img src={description} alt="icon" />
              </div>
            </div>
            <div className={styles.text}>
              <p>Мы готовим необходимыйе документы и согласовываем с вами</p>
            </div>
          </div>


          <div className={styles.scheme__block}>
            <div className={styles.icon__container}>
              <div className={styles.icon}>
                <img src={straighten} alt="icon" />
              </div>
            </div>
            <div className={styles.text}>
              <p>К вам приедет замерщик, согласует с вами детали и выполнит необходимые замеры</p>
            </div>
          </div>


          <div className={styles.scheme__block}>
            <div className={styles.icon__container}>
              <div className={styles.icon}>
                <img src={local_shipping} alt="icon" />
              </div>
            </div>
            <div className={styles.text}>
              <p>Мы поставляем ворота</p>
            </div>
          </div>








        </div>
      </div>
    </div>
  )
}
