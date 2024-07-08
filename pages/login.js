import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";

import { useState } from "react";
import Headerlogin from "../components/Login/header-login"
import Login from "../components/Login/login"
import Footerlogin from "../components/Login/footer-login"

export default function login() {
    
  return (
    <div>
      <Headerlogin></Headerlogin>
      <h1>Gautam</h1>
      <Login></Login>
      <Footerlogin></Footerlogin>

    </div>
  )
}

