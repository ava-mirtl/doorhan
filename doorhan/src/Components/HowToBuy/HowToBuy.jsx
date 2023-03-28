import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import Button, { how_to_buy } from '../Button/Button';
import ModalGrats from '../Modal/ModalGrats';
import Title, { white } from '../Title/Title';
import calendar from '../../assets/icons/calendar.png';
import house from '../../assets/icons/house.png';
import price from '../../assets/icons/price.png';
import sm from '../../assets/icons/sm.png';
import bibip from '../../assets/icons/bibip.png';
import dogovor from '../../assets/icons/dogovor.png';
import styles from './HowToBuy.module.scss';

export default function HowToBuy() {

  document.body.style.overflow = '';
  const date = new Date

  const [modalActive, setModalActive] = useState(false);
  const [nameF, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);
  const [errorName, setErrorName] = useState("введите имя");
  const [errorPhone, setErrorPhone] = useState("введите номер телефона");

  const [phoneDirty, setPhoneDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [formData, setFormData] = useState({ phone: "", name: "" });

  useEffect(() => {
    setFormData({
      phone: { phone },
      name: { nameF }
    })
  }, [nameF, phone, valid]);

  useEffect(() => {
    if (errorName && !nameDirty || errorPhone && !phoneDirty) {
      setValid(false)
    }
    else {
      setValid(true)
    }
  }, [errorName, errorPhone]);

  const handlePhone = (e) => {
    setPhone(e.target.value);
    if (!e.target.value) setErrorPhone('Введите номер')
    const re = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
    if (!re.test(e.target.value)) {
      setErrorPhone('Некорректный ввод')
    }
    else (setErrorPhone(null))
  }

  const handleName = (e) => {
    setName(e.target.value);
    if (!e.target.value) setErrorName('Введите имя')
    const re = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (!re.test(e.target.value)) {
      setErrorName('Некорректный ввод.')
    }
    else (setErrorName(null))
  }

  const handleSubm = (e, nameF, phone) => {
    e.preventDefault();
    setFormData(state => ({
      ...state,
      name: { nameF },
      phone: { phone },
    }))

    emailjs.send("service_onlg9xh","template_32oil1t", {
      phone: formData.phone.phone,
      name: formData.name.nameF,
    }, 'ZjXCD_toGWo9fEoVg')
      .then((result) => {
        console.log(result);
      },
        (error) => {
          console.log(error);
        });
    setPhone("");
    setName("");
    setModalActive(true)
  }

  return (
    <div className={styles.box}>
      <Title style={white} title="КАК КУПИТЬ ВОРОТА ЗА 1 ДЕНЬ" />
      <div className={styles.container}>
        <div className={styles.dropContainer}>
          <div className={styles.btn}>
            <OrangeBtn img={calendar} />
          </div>
          <div className={styles.borderContainer} />

          <div className={styles.btn}>
            <OrangeBtn img={house} />
          </div>
          <div className={styles.borderContainer} />

          <div className={styles.btn}>
            <OrangeBtn img={price} />
          </div>
        </div>


        <div className={styles.txtContainer}>
          <div className={styles.txtC1}>
            <div className={styles.txt}>МЫ МОЖЕМ ВАМ ПОМОЧЬ ПРИОБРЕСТИ ВОРОТА ЗА 1 ДЕНЬ!
            </div>
          </div>
          <div className={styles.txtC2}>
            <div className={styles.txt}>БОЛЬШОЙ АССОРТИМЕНТ ГОТОВЫХ ВОРОТ МЫ ХРАНИМ НА НАШЕМ СКЛАДЕ.
            </div>
          </div>
          <div className={styles.txtC3}>
            <div className={styles.txt}>НА ВОРОТА СО СКЛАДА ДЕЙСТВУЕТ СПЕЦИАЛЬНАЯ ЦЕНА.
            </div>
          </div>
        </div>

        <div className={styles.dropContainer2}>
          <div className={styles.btn2}>
            <OrangeBtn img={sm} />
          </div>
          <div className={styles.borderContainer}>
            <img src={bibip} alt="машинка" />
          </div>
          <div className={styles.btn2}>
            <OrangeBtn img={dogovor} />
          </div>
        </div>
        <div className={styles.txtContainer2}>
          <div className={styles.txtC4}>
            <div className={styles.txt}>ЕСЛИ ВЫ ЗНАЕТЕ РАЗМЕРЫ СВОЕГО ПРОЕМА, МЫ ПОДБЕРЕМ ВОРОТА ИЗ ТЕХ, ЧТО В НАЛИЧИИ НА СКЛАДЕ.
            </div>
          </div>
          <div className={styles.txtC5}>
            <div className={styles.txt}>ЗАКЛЮЧИВ ДОГОВОР ПО ЭЛЕКТРОННОЙ ПОЧТЕ, ВЫ СМОЖЕТЕ РАССЧИТАТЬСЯ ПО ФАКТУ ДОСТАВКИ ВОРОТ НА ОБЪЕКТ.
            </div>
          </div>
        </div>


        <div className={styles.dropmini}>
          <div className={styles.btnmini}>
            <OrangeBtn img={calendar} />
            <div className={styles.txtmini}>МЫ МОЖЕМ ВАМ ПОМОЧЬ ПРИОБРЕСТИ ВОРОТА ЗА 1 ДЕНЬ!
            </div>
          </div>

          <div className={styles.btnmini}>
            <OrangeBtn img={house} />
            <div className={styles.txtmini}>БОЛЬШОЙ АССОРТИМЕНТ ГОТОВЫХ ВОРОТ МЫ ХРАНИМ НА НАШЕМ СКЛАДЕ.
            </div>
          </div>

          <div className={styles.btnmini}>
            <OrangeBtn img={price} />
            <div className={styles.txtmini}>НА ВОРОТА СО СКЛАДА ДЕЙСТВУЕТ СПЕЦИАЛЬНАЯ ЦЕНА.
            </div>
          </div>


          <div className={styles.btnmini}>
            <OrangeBtn img={sm} />
            <div className={styles.txtmini}>ЕСЛИ ВЫ ЗНАЕТЕ РАЗМЕРЫ СВОЕГО ПРОЕМА, МЫ ПОДБЕРЕМ ВОРОТА ИЗ ТЕХ, ЧТО В НАЛИЧИИ НА СКЛАДЕ.
            </div>
          </div>

          <div className={styles.btnmini}>
            <OrangeBtn img={dogovor} />
            <div className={styles.txtmini}>ЗАКЛЮЧИВ ДОГОВОР ПО ЭЛЕКТРОННОЙ ПОЧТЕ, ВЫ СМОЖЕТЕ РАССЧИТАТЬСЯ ПО ФАКТУ ДОСТАВКИ ВОРОТ НА ОБЪЕКТ.
            </div>
          </div>
        </div>

        <div className={styles.dateContainer}>
          <div className={styles.txtDate}>УСПЕЙ ЗАКАЗАТЬ СЕГОДНЯ!
          </div>
          <div className={styles.date}>
            {date.getDate()}.{date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}
          </div>
        </div>
        <form onSubmit={(e) => handleSubm(e)} className={styles.formNext} >
          {(errorName && nameDirty) && <div className='error'>{errorName}</div>}
          <input type="text" onChange={e => handleName(e)} onBlur={e => setNameDirty(true)} value={nameF} className={styles.inputNext} placeholder='Имя' />
          {(errorPhone && phoneDirty) && <div className='error'>{errorPhone}</div>}
          <input onChange={e => handlePhone(e)} onBlur={e => setPhoneDirty(true)} value={phone} type="text" className={styles.inputNext} placeholder='Телефон' />
          <Button name="РАССЧИТАТЬ ВОРОТА" styles={how_to_buy} disabled={!valid} />
        </form>
      </div>
      {modalActive &&
        <ModalGrats active={modalActive} setActive={setModalActive} />
      }
    </div>
  )
}
