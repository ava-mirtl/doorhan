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
  borderRadius: '0 20px 20px',
  height: "87px",
}
export const medium2 = {
  padding: "20px",
  width: "90%",
  minWidth: "260px",
  minHeight: "fit-content",
  borderRadius: '0 20px 20px',
  height: "78px",
}
export const medium3 = {
  padding: "20px",
  width: "90%",
  minWidth: "260px",
  minHeight: "fit-content",
  borderRadius: '0 20px 20px',
  height: "72px",
  fontSize: "1rem"
}

export const our_gar = {
  padding: "10px",
  width: "15vw",
  height: "3vw",
  fontSize: "1vw",
  margin: "0.5vw",
  backgroundColor: 'white',
  border: "2px solid #F39912",
  color: "#F39912"
}
export const our_prom = {
  padding: "10px",
  width: "15vw",
  height: "3vw",
  fontSize: "1vw",
  margin: "0.5vw",

}

export const how_to_buy = {
  padding: "10px",
  width: "100%",
  minHeight: "45px",
  fontSize: "10pt",
  height: "4vw",
  minheight: "7vw",
  borderRadius: '0 20px 20px'
}


export default function Button({ name, onClick, styles }) {
  return (
    <button style={styles} onClick={(e) => onClick(e)} className="btn">{name}</button>
  )
}
