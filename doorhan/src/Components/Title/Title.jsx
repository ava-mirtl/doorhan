import React from 'react';
import { motion} from "framer-motion";

import "./Title.scss"
export const blue = {
    borderColor: "#003676",
    color:  "#003676"

}
export const white = {
    borderColor: "#FFFFFF",
    color:  "#FFFFFF"

}
const animationText = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: 1,
    }
}

export default function Title({title, styles}) {

  return (<>
   
    <motion.h2 initial="hidden" 
    whileInView="visible"
    viewport={{amount: 0.3, once: true}}
variants={animationText}    
styles= {styles} title="mainTitle" 
    className='mainTitle' >{title}</motion.h2></>
  )
}
