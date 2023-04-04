import Main from './Pages/Main';
import Header from './Components/Header/Header';
import HeaderFirst from './Components/Header/HeaderFirst';
import HeaderSecond from './Components/Header/HeaderSecond';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './styles/App.css';
//?big_sale=${promoDate}

function App() {
  const date = new Date;
  const promoDate = `0${date.getDate()+1}.0${date.getMonth() + 1}.${date.getFullYear()}`
  console.log(promoDate);

  return (
    <Router>
      <Routes>
        <Route path={`/liquidation/`} element={<HeaderFirst />}/>
        <Route path={`/sale/`} element={<HeaderSecond />}/>
        <Route path="/"  element={<Header />}/>
      </Routes>
        <Link to="/liquidation?big_sale=${promoDate}" />
        <Link to="/sale?big_sale=${promoDate}" />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
