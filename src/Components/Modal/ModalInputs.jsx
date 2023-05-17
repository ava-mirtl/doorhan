import React, {useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import ModalGrats from './ModalGrats';
import Button from '../Button/Button'
import { popupStyle } from '../Button/Button';
import "./modal.scss";


export default function ModalInputs({ active, setActive, handleSubmit}) {
  const [modalActiveGrats, setModalActiveGrats] = useState(false);


  
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
    

const handlePhone = (phone) => {
      setErrorPhone(null)
      setPhone(phone);
      if (phone=="") {
        setErrorPhone("Введите номер телефона");}
      else {if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)) {
        setErrorPhone("Допустимый формат: +7 (999) 999-99-99; 8 999-999-99-99; 8 999 999 99; 79999999999")
      }
      else (setErrorPhone(null))
    }}

    const validatePhone = (phone) => {
      if (phone==="") {
        setErrorPhone("Введите номер телефона");
        return false;
      } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)) {
        setErrorPhone("Допустимый формат: +7 (999) 999-99-99; 8 999-999-99-99; 8 999 999 99; 79999999999");
        return false;
      } else {
        setErrorPhone(null);
        return true;
      }
    }

    const handleName = (name) => {
      setName(name);
      if (!name) {
        setErrorName('Введите имя');
      } else {
        const re = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
        if (!re.test(name)) {
          setErrorName('Формат имени: только буквы кириллицы или латиницы');
        } else {
          setErrorName(null);
        }
      }
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

  return (<>
    <Modal active={active} setActive={setActive}>
      <div className="popupContainerNext">
        {(errorPhone&&phoneDirty)?<div className="error">{errorPhone}</div>:<div className="popupTitleNext">РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>}
        <form className="formNext">
          <input type="text" onChange={e=>handleName(e.target.value)} onBlur={e=>setNameDirty(true)} style={(errorName && nameDirty)? { border: "2px solid red" }:{ border: "2px solid grey" }} value={nameF} className="inputNext" placeholder='Ваше имя'  />
          <input type="text" onChange={e=>handlePhone(e.target.value)} onBlur={e=>setPhoneDirty(true)} style={(errorPhone&& phoneDirty)? { border: "2px solid red" }:{ border: "2px solid grey" }} value={phone} className="inputNext" placeholder='Телефон'  />
          <Button name="РАССЧИТАТЬ ВОРОТА" styles={popupStyle} onClick={(e) => {
  e.preventDefault();
  if (validatePhone(phone)) {
    setValid(true);
  } else {
    setErrorPhone("Проверьте правильность ввода")
    setValid(false);
  }
  handleSubm(e)
}} disabled={!valid}/>
        </form>
      </div>
    </Modal>
    </>
  )
}
