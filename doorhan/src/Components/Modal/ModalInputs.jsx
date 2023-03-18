import React from 'react';
import Modal from './Modal';
import Button from '../Button/Button'
import { popupStyle } from '../Button/Button';

import "./modal.scss";


export default function ModalInputs({active, setActive, handleSubmit}) {
  return (
    <Modal active={active} setActive={setActive}>
  <div className="popupContainerNext">
    <div className="popupTitleNext">РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>  
      <form className="formNext">
        <input type="text" className="inputNext" placeholder='Ваше имя'/>
        <input type="text" className="inputNext" placeholder='Телефон'/>
        <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleSubmit} styles={popupStyle}/>
      </form>
    </div>  
</Modal>
  )
}
