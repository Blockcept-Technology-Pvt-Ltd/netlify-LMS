import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";

import { useState } from "react";

export default function login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = (email, password) => {
      setCredentials({ email, password });
    };
  return (
    <div>
     
  
  

     <section className="footer wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={500}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <img loading="lazy" src="uploads/system/b75d56b5a93590ce01464acd96a853f1.png" />
        <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
        <div className="lattest-news efooter">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="mb-0">Subscribe to our newsletter</h1>
              <form className="ajaxForm resetable" action method="post">
                <input type="email" className="form-control" id="subscribe_email" placeholder="Enter your email address" name="email" />
                <button className="form-arrow" type="submit"><i className="fa-solid fa-arrow-right-long" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
        <h1>Top categories</h1>
        <ul>
          <li><a href="#"> HTML &amp; CSS</a></li>
          <li><a href="#"> Color Theory</a></li>
          <li><a href="#"> Photoshop</a></li>
          <li><a href="#"> WordPress Theme</a></li>
          <li><a href="#"> Adobe Illustrator</a></li>
          <li><a href="#"> Bootstrap</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 col-4">
        <h1>Useful links</h1>
        <ul>
          <li> <a href="#">Become an instructor</a></li>
          <li> <a href="#">Blog</a></li>
          <li><a href="#">All courses</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 col-4">
        <h1>Help</h1>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Terms and condition</a></li>
          <li><a href="#">Faq</a></li>
          <li><a href="#">Refund policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

