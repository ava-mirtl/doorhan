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


function App() {
  const date = new Date;
  const promoDate = `0${date.getDate()+1}.0${date.getMonth() + 1}.${date.getFullYear()}`
  console.log(promoDate);

  return (
    <Router>
      <Routes>
        <Route path={`/doorhan/liquidation/big_sale=${promoDate}`} element={<HeaderFirst />}/>
        <Route path={`/doorhan/big_sale=${promoDate}`} element={<HeaderSecond />}/>
        <Route path={"/doorhan/"}  element={<Header />}/>
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
