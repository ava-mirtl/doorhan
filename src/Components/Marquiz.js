import React, { useEffect } from 'react';

function Marquiz() {
   const Marquiz = window.Marquiz;

   useEffect(() => {
    (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Button', {id: '60ffeb303994f3003e888dab', buttonText: 'РАССЧИТАТЬ СТОИМОСТЬ', bgColor: '#f39509', textColor: '#ffffff', rounded: true, shadow: 'rgba(243, 149, 9, 0.5)'})
   }, [])

   return (
    <div data-marquiz-id="60ffeb303994f3003e888dab"></div>
   );
}

export default Marquiz;