import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import './Header/Header.modual.css';
import Container from './Container/Container';
import  './Container/Container.modual.css';
import Footer from './Footer/Footer';
import './Footer/Footer.modual.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
          <Header/>
          <Container/>
          <Footer/>
        </> }
        />
      </Routes>
    </div>
  );
}
export default App;