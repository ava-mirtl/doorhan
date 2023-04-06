import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import Marquiz from '../Marquiz';
import styles from './Header.module.scss';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import logo from '../../assets/images/logo.png';
import atm from '../../assets/icons/local_atm.png';
import percent from '../../assets/icons/percent.png';
import settings from '../../assets/icons/settings.png';
import shipping from '../../assets/icons/local_shipping (1).png';
import box from '../../assets/icons/warehouse.png';
import OrangeBtn from '../OrangeBtn/OrangeBtn';


export default function Header() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const utmContent = queryParams.get('big_sale') || 'default_big_sale';
  document.body.style.overflow = '';
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(true);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [formData, setFormData] = useState({ phone: "" });


  useEffect(() => { setFormData({ phone: { phone } }) }, [phone]);

  useEffect(() => { }, [errorPhone]);


  const handlePhone = (e) => {
    setErrorPhone(null);
    setPhone(e.target.value);
    if (e.target.value.trim() === "") {
      return;
    }
    const re = /^\+7\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    if (!re.test(e.target.value)) {
      setErrorPhone("Допустимый формат: +7 (999) 999-99-99; +7 999-999-99-99; +7 999 999 99");
    }
  }

  const handleSubm = (e, phone) => {
    e.preventDefault();
    setFormData(state => ({
      ...state,
      phone: { phone },
    }))
    emailjs.send("service_onlg9xh", "template_32oil1t", formData.phone, 'ZjXCD_toGWo9fEoVg')
      .then((result) => {
        console.log(result);
      },
        (error) => {
          console.log(error);
        });
    setPhone("");
    handleSubmit(e);
  };


  const [modalSecond, setModalSecond] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const handleSubmit = (event) => {
    setModalSecond(false);
    setModalActive(true);
  }


  return (<>
    <div className={styles.header__container}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.phone}>+7(495)127-05-21</span>

        <form onSubmit={e => handleSubm(e)}
          className={styles.form} >
                  {errorPhone&&<div className={styles.error}>{errorPhone}</div>}
          <input onBlur={e => setPhoneDirty(true)} onChange={e => handlePhone(e)} value={phone} type="text" className={styles.input} style={(phoneDirty && errorPhone) ? { border: "2px solid red" } : { border: "1px solid gray" }} placeholder='Телефон' />
          <button type='submit' disabled={errorPhone}
            className={styles.btn}>Заказать звонок</button></form>
            
      </div>
      
    </div>
    <div className={styles.mainСontainer}>
      <div className={styles.imgCont}>
        <div className={styles.buttonCont}>
        <div className={styles.header__activity}>
      <div className={styles.header__activity_button}>
        <Marquiz utm_content={utmContent}/>
      </div>
    </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1>ГАРАЖНЫЕ ВОРОТА DOORHAN</h1>
        <div className={styles.subtitle}>ПРОИЗВОДСТВО. ДОСТАВКА. МОНТАЖ.</div>
        <div className={styles.item}>
          <OrangeBtn img={atm} />
          <span className={styles.txt}>10% ПРЕДОПЛАТА.</span>
        </div>
        <div className={styles.item}>
          <OrangeBtn img={percent} />
          <span className={styles.txt}>РАССРОЧКА ОТ 3 ДО 12 МЕСЯЦЕВ</span>
        </div>
        <div className={styles.item}>
          <OrangeBtn img={settings} />
          <span className={styles.txt}>ЕЖЕГОДНОЕ БЕСПЛАТНОЕ ОБСЛУЖИВАНИЕ</span>
        </div>
        <div className={styles.item}>
          <OrangeBtn img={shipping} />
          <span className={styles.txt}>БЕСПЛАТНЫЙ ВЫЕЗД ЗАМЕРЩИКА</span>
        </div>
        <div className={styles.item}>
          <OrangeBtn img={box} />
          <span className={styles.txt}>СВОИ СКЛАДЫ В : ОДИНЦОВО, МЫТИЩИ, ЛЮБЕРЦЫ, ПОДОЛЬСК</span>
        </div>
      </div>
    </div>
    {modalActive &&
      <ModalGrats active={modalActive} setActive={setModalActive} />
    }
    {modalSecond &&
      <ModalInputs active={modalSecond} setActive={setModalSecond} handleSubmit={handleSubmit} />
    }
  </>
  )
}
