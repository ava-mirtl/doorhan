import React from 'react';
import './Button.scss';

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
    height: "4vw",
    fontSize: "0.8vw"
}

export const medium = {
  padding: "10px",
  width: "15vw",
  height: "3vw",
  fontSize: "0.7vw"
}



export default function Button({ name, onClick, styles}) {
  return (
    <div>
      <button style={styles} onClick={(e) => onClick(e)} className="btn">{name}</button>
    </div>
  )
}
