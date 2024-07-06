import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";

import Header from "../components/Login/header-login"
import Signup from "../components/SignUp/sign_up"
import Footer from "../components/Login/footer-login"


export default function sign_up() {
  return (
    <>
    <Header></Header>
    <Signup></Signup>
    <Footer></Footer>
    </>
  )
}
