import React, {useState, useEffect} from 'react';
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
    name: {nameF}})
  }, [nameF, 
    phone, valid]);

    useEffect(() => {
      if (errorName || errorPhone) {
        setValid(false) 
      }
      else {
        setValid(true)
      }
    }, [errorName, errorPhone]);
    

  const handlePhone = (e)=>{
    setPhone(e.target.value);
    if (!e.target.value) setErrorPhone('Введите номер')
    const re = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
  if (!re.test(e.target.value)){
  setErrorPhone('Допустимый формат: +7(XXX)XXX-XX-XX, 8XXX XXX XX XX, 8XXXXXXXXXX +7XXXXXXXXXX')
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

            console.log(formData);
            setActive(true)
          handleSubmit(e)}

  return (
    <Modal active={active} setActive={setActive}>
      <div className="popupContainerNext">
        <div className="popupTitleNext">РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>
        <form onSubmit={(e)=>handleSubm(e)} className="formNext">
          {(errorName&&nameDirty)&&<div className='error'>{errorName}</div>}
          <input type="text" onChange={e=>handleName(e)} onBlur={e=>setNameDirty(true)} value={nameF} className="inputNext" placeholder='Ваше имя'  />
          {(errorPhone&&phoneDirty)&&<div className='error'>{errorPhone}</div>}
          <input type="text" onChange={e=>handlePhone(e)} onBlur={e=>setPhoneDirty(true)} value={phone} className="inputNext" placeholder='Телефон'  />
          <Button name="РАССЧИТАТЬ ВОРОТА" disabled={!valid} styles={popupStyle} />
        </form>
      </div>
    </Modal>
  )
}
