import React from 'react';
import  "./modal.scss"

export default function Modal({active, setActive, children}) {
active?document.body.style.overflow = 'hidden'
:document.body.style.overflow = '';
  return (
    <div className={ active? "modal active" : "modal" } onClick={()=>setActive(false)}>
      <div className='modal__content' onClick={(e)=>e.stopPropagation()}>
      <div className='modal__triangles'>
{children}
      </div></div>
    </div>
  )
}
