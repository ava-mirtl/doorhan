import React, { useEffect, useCallback } from 'react';
import Main from './Pages/Main';
import Header from './Components/Header/Header';
import HeaderFirst from './Components/Header/HeaderFirst';
import HeaderSecond from './Components/Header/HeaderSecond';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  const initializePromoDate = useCallback(() => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate()+1);
        let dd = '';
    if(currentDate.getDate() < 10){
        dd += '0';
    }
    dd += `${currentDate.getDate()}.`;
    let mm = '';
    if(currentDate.getMonth() < 9){
        mm += '0';
    }
    mm += `${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
    let promoDate = dd+mm
    if (!window.location.search) {
       window.location.href = `?big_sale=${promoDate}`;
       console.log(window.location.href);
    } else {
return    }
  }, []);
  
  useEffect(() => {
    initializePromoDate();
  }, [initializePromoDate]);

  return (
    <Router>
      <Routes>
        <Route path="/liquidation" element={<HeaderFirst />} />
        <Route path="/sale" element={<HeaderSecond />} />
        <Route path="/" element={<Header />} />
        <Route path="/doorhan/liquidation" element={<HeaderFirst />} />
        <Route path="/doorhan/sale" element={<HeaderSecond />} />
        <Route path="/doorhan/" element={<Header />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
