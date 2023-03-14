import React from 'react';
import styles from './WhyDoorhan.module.scss';

import Button from '../Button/Button';

import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';


export default function WhyDoorhan() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.container__why}>
          <div className={styles.title}>ПОЧЕМУ ВОРОТА DOORHAN?</div>
          <div className={styles.container__main}>
            <div className={styles.main__left}>
              <div className={styles.main__text}>
                <p>Единственные ворота в мире которые выглядят как новые через 25 лет</p>
                <div className={styles.main__img}>
                  <img src={pic1} alt="photo" />
                </div>
              </div>

              <div className={styles.main__text}>
                <p>Ворота и петли НЕ разболтаются через 25 лет</p>
                <div className={styles.main__img}>
                  <img src={pic2} alt="photo" />
                </div>
              </div>

              <div className={styles.main__text}>
                <p>Предназначены для Российских климатических условий - многокамерный нижний уплотнитель (экономия на отоплении 15%)</p>
                <div className={styles.main__img}>
                  <img src={pic3} alt="photo" />
                </div>
              </div>

              <div className={styles.main__text}>
                <p>Устройство безопасности (гальваническое серебрение) защищает от обрыва тросов</p>
                <div className={styles.main__img}>
                  <img src={pic4} alt="photo" />
                </div>
              </div>


            </div>
            <div className={styles.main__right}>
              <div className={styles.form__box}>
                <form className={styles.form}>
                  <input type="text" className={styles.input} placeholder='Имя' />
                  <input type="text" className={styles.input} placeholder='Телефон' />
                  <Button name="ПОЛУЧИТЬ ПОДАРОК" />
                </form>
              </div>

            </div>
          </div>
        </div>


        <div className={styles.container__aboutus}>
          <div className={styles.title}>ПОЧЕМУ ВЫБИРАЮТ НАС:</div>

        </div>
      </div>
    </div>
  )
}
