import React, {useState, useEffect} from 'react';
import styles from './Header.module.scss';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import logo from '../../assets/images/logo.png';
import atm from '../../assets/icons/local_atm.png';
import percent from '../../assets/icons/percent.png';
import settings from '../../assets/icons/settings.png';
import shipping from '../../assets/icons/local_shipping (1).png';
import box from '../../assets/icons/warehouse.png';
import Button from '../Button/Button'
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { medium } from '../Button/Button';


export default function Header() {

document.body.style.overflow = '';
const [phone, setPhone] = useState("");
const [errorPhone, setErrorPhone] = useState("введите номер телефона");
const [phoneDirty, setPhoneDirty] = useState(false);
const [formData, setFormData] = useState({phone: ""});
useEffect(() => {setFormData({
  phone: {phone}})
}, [ 
  phone]);

  useEffect(() => {
  }, [ errorPhone]);

  useEffect(() => {
    if(!phoneDirty&&!phone){
    setErrorPhone(false)}
  }, [ phoneDirty, phone]);


  const handlePhone = (e)=>{
    setPhone(e.target.value);
    if (!e.target.value) setErrorPhone(true)
    const re = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
  if (!re.test(e.target.value)){
  setErrorPhone(true)
  }
  else (  setErrorPhone(null)
  )
  }

  const handleSubm = (e, phone) => {
        e.preventDefault();
        setFormData(state => ({...state,
            phone:  {phone},
            }))

            console.log(formData);
            handleSubmit(e)}


const [modalSecond, setModalSecond] = useState(false);
const [modalActive, setModalActive] = useState(false);

const handleSubmit = (event)=>
    {
      setModalSecond(false);
      setModalActive(true);
    }


const handleClick = (event)=>
    {
    setModalSecond(true);
    }


  return (<>
    <div className={styles.header}> 
      <img className={styles.logo} src={logo} alt="logo"/>
      <span className={styles.phone}>+7(495)127-05-21</span>
      <form onSubmit={e=>handleSubm(e)} className={styles.form}>
        
        <input onBlur={e=>setPhoneDirty(true)} onChange={e=>handlePhone(e)} value={phone} type="text" className={styles.input} style={(phoneDirty&&errorPhone)?{border: "2px solid #F3950A"}:{border: "1px solid gray"}} placeholder='Телефон'/>
        <button type='submit' disabled={errorPhone}
        className={styles.btn}>Заказать звонок</button></form>
    </div>
    <div className={styles.mainСontainer}>
      <div className={styles.imgCont}>
        <div className={styles.buttonCont}>
          <Button name="ЗАПИСАТЬСЯ НА ЗАМЕР" onClick={handleClick} styles={medium}/>
        </div>
      </div>
    <div className={styles.content}>
      <h1>ГАРАЖНЫЕ ВОРОТА DOORHAN</h1>
    <div className={styles.subtitle}>ПРОИЗВОДСТВО. ДОСТАВКА. МОНТАЖ.</div>
    <div className={styles.item}>
      <OrangeBtn img={atm}/>
      <span className={styles.txt}>10% ПРЕДОПЛАТА.</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={percent}/>
      <span className={styles.txt}>РАССРОЧКА ОТ 3 ДО 12 МЕСЯЦЕВ</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={settings}/>
      <span className={styles.txt}>ЕЖЕГОДНОЕ БЕСПЛАТНОЕ ОБСЛУЖИВАНИЕ</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={shipping}/>
      <span className={styles.txt}>БЕСПЛАТНЫЙ ВЫЕЗД ЗАМЕРЩИКА</span>
    </div>
    <div className={styles.item}>
      <OrangeBtn img={box}/>
      <span className={styles.txt}>СВОИ СКЛАДЫ В : ОДИНЦОВО, МЫТИЩИ, ЛЮБЕРЦЫ, ПОДОЛЬСК</span>
    </div>
  </div>
</div>
      {modalActive&&
        <ModalGrats active={modalActive} setActive={setModalActive}/> 
      }
      {modalSecond&&
        <ModalInputs active={modalSecond} setActive={setModalSecond} handleSubmit={handleSubmit}/>
      }
    </>
  )
}
