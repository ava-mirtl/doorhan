import React, { useState } from 'react';
import styles from './Scheme.module.scss';
import Title from '../Title/Title';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import icon_call from "../../assets/icons/call.png"
import file_present from "../../assets/icons/file_present.png"
import lift_to_talk from "../../assets/icons/lift_to_talk.png"
import description from "../../assets/icons/description.png"
import straighten from "../../assets/icons/straighten.png"
import local_shipping from "../../assets/icons/local_shipping.png"
import { white } from '../Title/Title';


export default function Scheme() {
  document.body.style.overflow = '';
  const [modalActive, setModalActive] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalSecond(false);
    setModalActive(true);
}
const handleClick = (event) => {
    setModalSecond(true);
}
  return (
    <div>
      <div className={styles.scheme}>
      <Title styles={white} title="СХЕМА РАБОТЫ"/>
        <div className={styles.scheme__container}>
          <div className={styles.scheme__block}>
            <OrangeBtn img={icon_call} />
            <div className={styles.text}>
              <p>Вы звоните нам по телефону или оставляете заявку через <a onClick={handleClick}>ФОРМУ НА САЙТЕ</a></p>
            </div>
          </div>
          <div className={styles.scheme__block}>
            <OrangeBtn img={file_present} />
            <div className={styles.text}>
              <p>Мы заключаем договор</p>
            </div>
          </div>
          <div className={styles.scheme__block}>
            <OrangeBtn img={lift_to_talk} />
            <div className={styles.text}>
              <p>Наш специалист выполняет расчет заказа и консультирует вас</p>
            </div>
          </div>
          <div className={styles.scheme__block}>
            <OrangeBtn img={description} />
            <div className={styles.text}>
              <p>Мы готовим необходимыйе документы и согласовываем с вами</p>
            </div>
          </div>
          <div className={styles.scheme__block}>
            <OrangeBtn img={straighten} />
            <div className={styles.text}>
              <p>К вам приедет замерщик, согласует с вами детали и выполнит необходимые замеры</p>
            </div>
          </div>
          <div className={styles.scheme__block}>
            <OrangeBtn img={local_shipping} />
            <div className={styles.text}>
              <p>Мы поставляем ворота</p>
            </div>
          </div>
        </div>
      </div>
      {
                modalSecond &&
                <ModalInputs active={modalSecond} setActive={setModalSecond} handleSubmit={handleSubmit} />
            }
                {modalActive &&
                <ModalGrats active={modalActive} setActive={setModalActive} />
            }
    </div>
  )
}
