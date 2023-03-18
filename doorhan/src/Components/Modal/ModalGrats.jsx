import React from 'react';
import Modal from './Modal';
import popup from '../../assets/images/popup1.jpg';
import "./modal.scss";


export default function ModalGrats({active, setActive}) {
  return (
    <Modal active={active} setActive={setActive}>
  <div className="popupContainer">
    <div className="imgContainer">
      <img src={popup} alt="девушка"/>
    </div>
    <div className="popupTxt">
      <div className="popupTitle">СПАСИБО ЗА ВАШЕ ОБРАЩЕНИЕ, НАШ МЕНЕДЖЕР СКОРО С ВАМИ СВЯЖЕТСЯ!</div>
    </div>
  </div>    
</Modal>
  )
}
