import React from 'react';
import styles from './WhyDoorhan.module.scss';

import Button from '../Button/Button';

import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import bigpic from '../../assets/images/image 16.png';


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
                  <img src={pic1} alt="ворота" />
                </div>
              </div>

              <div className={styles.main__text}>
                <p>Ворота и петли НЕ разболтаются через 25 лет</p>
                <div className={styles.main__img}>
                  <img src={pic2} alt="креплание" />
                </div>
              </div>

              <div className={styles.main__text}>
                <p>Предназначены для Российских климатических условий - многокамерный нижний уплотнитель (экономия на отоплении 15%)</p>
                <div className={styles.main__img}>
                  <img src={pic3} alt="карта" />
                </div>
              </div>

              <div className={styles.main__text}>
                <p>Устройство безопасности (гальваническое серебрение) защищает от обрыва тросов</p>
                <div className={styles.main__img}>
                  <img src={pic4} alt="деталь" />
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
          <div className={styles.container__main2}>
            <div className={styles.container__left}>
              <p className={styles.one}>10% предоплата. Оплачиваете полную стоимость изделия и доставку по факту доставки ворот на ваш объект.</p>
              <p className={styles.two}>У нас свой склад в: Одинцово, Мытищи, Люберцы, Подольск.</p>
              <p className={styles.three}>Ежегодное бесплатное обслуживание (регулировка роликов/пружины,
                настройка автоматики)</p>
            </div>
            <div className={styles.container__pict}>
              <div className={styles.round}>
                <div className={styles.round2}>
                  <div className={styles.round3}>
                    <div className={styles.container__bigpic}>
                      <img className={styles.bigpic} src={bigpic} alt="picture" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.container__right}>
              <p className={styles.four}>При покупке ворот под ключ mini box в подарок </p>
              <p className={styles.five}>Покупка ворот в рассрочку от 3 до 12 месяцев</p>
              <p className={styles.six}>Квалифицированные и опытные специалисты по монтажу, которые ежегодно проходят обучение по установке ворот.</p>
            </div>
          </div>
          <p className={styles.seven}>Бесплатный выезд замерщика с образцами и раскладкой цветов по RAL</p>
        </div>
      </div>
    </div>
  )
}
