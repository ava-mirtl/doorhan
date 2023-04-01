import React, { useEffect } from 'react';

function Marquiz() {
   const Marquiz = window.Marquiz;

   useEffect(() => {
      (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Button', {id: '60ffeb303994f3003e888dab', buttonText: 'РАСЧИТАТЬ СТОИМОСТЬ', bgColor: '#f39509', textColor: '#ffffff', rounded: true})   }, [])

   return (
<div data-marquiz-id="60ffeb303994f3003e888dab"></div>
 );
}

export default Marquiz;