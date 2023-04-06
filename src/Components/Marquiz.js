import React, { useEffect } from 'react';

function Marquiz({ utm_content }) {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = '//script.marquiz.ru/v2.js';
      script.onload = function () {
          window.Marquiz.init({
              id: '60ffeb303994f3003e888dab',
              autoOpen: false,
              autoOpenFreq: 'once',
              openOnExit: false,                 
              urlParams: {
                  big_sale: `${utm_content}`,
              },
          });
          window.Marquiz.add(['Button', {
              id: '60ffeb303994f3003e888dab', 
              buttonText: 'РАССЧИТАТЬ ВОРОТА', 
              bgColor: '#d34085', 
              textColor: '#ffffff', 
              rounded: true, 
              shadow: 'rgba(211, 64, 133, 0.5)', 
              blicked: true,
          }]);
      };
      document.head.appendChild(script);
  }, [utm_content]);


   return (
      <div data-marquiz-id="60ffeb303994f3003e888dab" ></div>
   );
}

export default Marquiz;