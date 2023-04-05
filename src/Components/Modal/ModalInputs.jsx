import React, {useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import Button from '../Button/Button'
import { popupStyle } from '../Button/Button';
import "./modal.scss";


export default function ModalInputs({ active, setActive, handleSubmit}) {


  
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
      if (errorName&&!nameDirty  || errorPhone&&!phoneDirty) {
        setValid(false) 
      }
      else {
        setValid(true)
      }
    }, [errorName, errorPhone]);
    

  const handlePhone = (e)=>{
    setPhone(e.target.value);
    if (!e.target.value) setErrorPhone('Введите номер')
    const re = /^\+7\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  if (!re.test(e.target.value)){
  setErrorPhone('Допустимый формат: +7 (999) 999-99-99; +7 999-999-99-99; +7 999 999 99; 79999999999')
  }
  else (  setErrorPhone(null)
  )
  }

  const handleName = (e)=>{
    setName(e.target.value);
    if (!e.target.value) setErrorName('Введите имя')
    const re = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
  if (!re.test(e.target.value)){
  setErrorName('Некорректный ввод.')
  }
  else (  setErrorName(null)
  )
  }

  const handleSubm = (e, nameF, 
    phone) => {
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
            console.log(error);}
          );
            setPhone("");
            setName("");
            setActive(true)
            handleSubmit(e)
      }

  return (
    <Modal active={active} setActive={setActive}>
      <div className="popupContainerNext">
        {(errorPhone&&phoneDirty)?<div className="error">{errorPhone}</div>:<div className="popupTitleNext">РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>}
        <form onSubmit={(e)=>handleSubm(e)} className="formNext">
          <input type="text" onChange={e=>handleName(e)} onBlur={e=>setNameDirty(true)} style={(errorName && nameDirty)? { border: "2px solid red" }:{ border: "2px solid grey" }} value={nameF} className="inputNext" placeholder='Ваше имя'  />
          <input type="text" onChange={e=>handlePhone(e)} onBlur={e=>setPhoneDirty(true)} style={(errorPhone&& phoneDirty)? { border: "2px solid red" }:{ border: "2px solid grey" }} value={phone} className="inputNext" placeholder='Телефон'  />
          <Button name="РАССЧИТАТЬ ВОРОТА" disabled={!valid} styles={popupStyle} />
        </form>
      </div>
    </Modal>
  )
}
