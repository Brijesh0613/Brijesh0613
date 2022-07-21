import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF,FaTwitter,FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <>
      {/* <header className="bg-primary text-light">
        <div className="container py-2">
          <div className="row justify-content-between">
            <div className="col-auto">
              <ul className="list-unstyled d-flex m-0">
                <li className="d-none d-sm-block">1234 Street Name, City Name</li>
                <li className="ms-3"><a href="#" className="text-light">123-456-7890</a></li>
                <li className="ms-3 d-none d-md-block"><a href="#" className="text-light">mail@domain.com</a></li>
              </ul>
            </div>
            <div className="col-auto d-none d-lg-block social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </header> */}
      <header className="bg-primary text-light">
        <div className="container py-2">
          <div className="row justify-content-between">
            <div className="col-lg-auto mb-2 mb-lg-0">
              <ul className="row gy-2 gy-lg-0 text-center list-unstyled d-flex justify-content-center m-0">
                <li className="col-auto">1234 Street Name, City Name</li>
                <li className="col-sm-auto  ms-3"><a href="#" className="text-light">123-456-7890</a></li>
                <li className="col-md-auto  ms-3"><a href="#" className="text-light">mail@domain.com</a></li>
              </ul>
            </div>
            <div className="col-lg-auto text-center social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              logo
            </div>
            <div className="col-auto d-none d-lg-block">
              menu
            </div>
            <div className="col-auto d-lg-none">
              toggle icon
            </div>
          </div>
        </div>
      </header>
      <OwlCarousel className='owl-theme' dots={false} nav={true} loop>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>

      <div className="container">
        <div className="row gy-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
