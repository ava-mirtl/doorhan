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
    const date = new Date();
    const promoDate = `0${date.getDate() + 1}.0${date.getMonth() + 1}.${date.getFullYear()}`;
  
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
