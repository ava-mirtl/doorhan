import React, {useState, useEffect} from 'react';
import './Button.scss'

export default function Button({name, onClick}) {
  console.log(name);
  return (
    <div>
      <button onClick={(e)=>onClick(e)} className={(name="РАССЧИТАТЬ ВОРОТА")?"btnPopup btn":"btn"}>{name}</button>
    </div>
  )
}
