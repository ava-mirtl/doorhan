import React, { useEffect } from 'react';

function Marquiz() {
   const Marquiz = window.Marquiz;

   useEffect(() => {
      (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Button', {id: '60ffeb303994f3003e888dab', buttonText: 'Пройти тест', bgColor: '#d34085', textColor: '#ffffff', rounded: true, shadow: 'rgba(211, 64, 133, 0.5)', blicked: true})}, [])

   return (
<div data-marquiz-id="60ffeb303994f3003e888dab"></div>
 );
}

export default Marquiz;