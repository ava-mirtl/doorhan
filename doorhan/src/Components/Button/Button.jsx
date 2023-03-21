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

export const why = {
  padding: "10px",
  width: "100%",
  minHeight: "45px",
  height: "2.5vw",
  fontSize: "10pt"
}

export const medium = {
  padding: "20px",
  width: "90%",
  minWidth: "260px",
  minHeight: "fit-content",
  borderRadius: '0 40px 40px'
}

export const our_gar = {
  padding: "10px",
  width: "15vw",
  height: "3vw",
  fontSize: "0.8vw",
  margin: "0.5vw",
  backgroundColor: 'white',
  border: "2px solid #F39912",
  color: "#F39912"
}
export const our_prom = {
  padding: "10px",
  width: "15vw",
  height: "3vw",
  fontSize: "0.7vw",
  margin: "0.5vw",
}



export default function Button({ name, onClick, styles }) {
  return (
      <button style={styles} onClick={(e) => onClick(e)} className="btn">{name}</button>
  )
}
