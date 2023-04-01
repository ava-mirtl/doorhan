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

  return (
    <Router>
      <Routes>
        <Route path="/doorhan/first" element={<HeaderFirst />}/>
        <Route path="/doorhan/second" element={<HeaderSecond />}/>
        <Route path="/doorhan/"  element={<Header />}/>
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
