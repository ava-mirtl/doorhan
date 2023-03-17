import React from 'react';
import './Button.scss'
export const small = {
    padding: "10px",
    width: "247px",
}
export const popupStyle = {
  marginTop: "10px",
  padding: "2vw",
  fontSize: "1.6rem",
  width: "100%"
  }
  
 export const howto = {
    padding: "10px",
    width: "15vw",
    height: "4vw"
}




export default function Button({ name, onClick, styles}) {
  return (
    <div>
      <button style={styles} onClick={(e) => onClick(e)} className="btn">{name}</button>
    </div>
  )
}
