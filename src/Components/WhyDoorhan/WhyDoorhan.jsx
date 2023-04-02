import React, {useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import styles from './WhyDoorhan.module.scss';
import Title from '../Title/Title';
import ModalGrats from '../Modal/ModalGrats';
import Button, { why } from '../Button/Button';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import bigpic from '../../assets/images/image 16.png';
import circle from '../../assets/icons/elips.png'
import { blue } from '../Title/Title';


export default function WhyDoorhan() {

  const [modalActive, setModalActive] = useState(false);

  const [nameF, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);
  const [errorName, setErrorName] = useState("введите имя");
  const [errorPhone, setErrorPhone] = useState("введите номер телефона");

  const [phoneDirty, setPhoneDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [formData, setFormData] = useState({phone: "", name: ""});


  
  useEffect(() => {setFormData({
    phone: {phone},
    name: {nameF}})}, [nameF, phone, valid]);

  useEffect(() => {
    if (errorName || errorPhone) {
      setValid(false) 
    }
    else {
      setValid(true)
    }}, [errorName, errorPhone]);

  const handlePhone = (e)=>{
      setPhone(e.target.value);
    if (!e.target.value) setErrorPhone('Введите номер')
      const re = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
    if (!re.test(e.target.value)){
      setErrorPhone('Некорректный ввод')
    }
    else ( setErrorPhone(null))
  }

  const handleName = (e)=>{
      setName(e.target.value);
    if (!e.target.value) setErrorName('Введите имя')
      const re = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (!re.test(e.target.value)){
    setErrorName('Некорректный ввод.')
    }
    else (  setErrorName(null))
  }

  const handleSubm = (e, nameF, phone) => {
        e.preventDefault();
        
        setFormData(state => ({...state,
            name:  {nameF},
            phone: {phone},
            }))

            emailjs.send("service_onlg9xh","template_32oil1t", {
              phone: formData.phone.phone,
              name:  formData.name.nameF,
            }, 'ZjXCD_toGWo9fEoVg') 
          .then((result) => {
            console.log(result);}, 
          (error) => {
            console.log(error);});
            setPhone("");
            setName("");
            handleSubmit(e);}


  document.body.style.overflow = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalActive(true);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.container__why}>
          <Title style={blue} title="ПОЧЕМУ ВОРОТА DOORHAN?" />
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
                  <img src={pic2} alt="крепление" />
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
                <form onSubmit={(e)=>handleSubm(e)}  className={styles.form}>
                {(errorName&&nameDirty)&&<div className='error'>{errorName}</div>}
                  <input type="text" onChange={e=>handleName(e)} onBlur={e=>setNameDirty(true)} value={nameF}  className={styles.input} placeholder='Имя' />
                  {(errorPhone&&phoneDirty)&&<div className='error'>{errorPhone}</div>}
                  <input onChange={e=>handlePhone(e)} onBlur={e=>setPhoneDirty(true)} value={phone} type="text" className={styles.input} placeholder='Телефон' />
                  <Button name="ПОЛУЧИТЬ ПОДАРОК" styles={why} disabled={!valid}/>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.container__aboutus}>
          <Title style={blue} title="ПОЧЕМУ ВЫБИРАЮТ НАС:" />
          <div className={styles.container__main2}>
              <div className={styles.container__circlepic1}>
                <p className={styles.one}>10% предоплата. Оплачиваете полную стоимость изделия и доставку по факту доставки ворот на ваш объект.</p>
                <img className={styles.circle1} src={circle} alt="точка" />
              </div>
              <div className={styles.container__circlepic2}>
                <p className={styles.two}>У нас свой склад в: Одинцово, Мытищи, Люберцы, Подольск.</p>
                <img className={styles.circle2} src={circle} alt="точка" />
              </div>
              <div className={styles.container__circlepic3}>
                <p className={styles.three}>Ежегодное бесплатное обслуживание (регулировка роликов/пружины,
                настройка автоматики)</p>
                <img className={styles.circle3} src={circle} alt="точка" />
              </div>
              <div className={styles.container__circlepic4}>
                <p className={styles.four}>При покупке ворот под ключ mini box в подарок </p>
                <img className={styles.circle4} src={circle} alt="точка" />
              </div>
              <div className={styles.container__circlepic5}>
                <p className={styles.five}>Покупка ворот в рассрочку от 3 до 12 месяцев</p>
                <img className={styles.circle5} src={circle} alt="точка" />
              </div>
              <div className={styles.container__circlepic6}>
                <p className={styles.six}>Квалифицированные и опытные специалисты по монтажу, которые ежегодно проходят обучение по установке ворот.</p>
                <img className={styles.circle6} src={circle} alt="точка" />
              </div>
              <div className={styles.container__circlepic7}>
                <p className={styles.seven}>Бесплатный выезд замерщика с образцами и раскладкой цветов по RAL</p>
                <img className={styles.circle7} src={circle} alt="точка" />
              </div>


            <div className={styles.container__pict}>
              <div className={styles.round}>
                <div className={styles.round2}>
                  <div className={styles.round3}>
                    <img className={styles.bigpic} src={bigpic} alt="picture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalActive &&
        <ModalGrats active={modalActive} setActive={setModalActive}/> 
      }
    </div>
  )
}