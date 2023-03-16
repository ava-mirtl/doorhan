import React, { useState, useEffect } from 'react';
import './Button.scss'

export default function Button({ name, onClick, active }) {
  console.log(name);
  return (
    <div>
      <button onClick={(e) => onClick(e)} className={active ? "btnPopup btn" : "btn"}>{name}</button>
    </div>
  )
}
