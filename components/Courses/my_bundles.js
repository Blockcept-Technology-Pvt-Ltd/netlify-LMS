import React from 'react'
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Head from "next/head";
import Main from "./main"
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function my_courses() {
    const router = useRouter();

    const handleNavigation = () => {
      router.push('/home'); // Programmatic navigation
    };

    const my_courses = () => {
      router.push('my_courses'); // Programmatic navigation
    };
    const my_bookings = () => {
      router.push('my_bookings'); // Programmatic navigation
    };
    const my_bootcamp = () => {
      router.push('my_bootcamp'); // Programmatic navigation
    };
    const my_bundles = () => {
      router.push('my_bundles'); // Programmatic navigation
    };
    const my_ebooks = () => {
      router.push('my_ebooks'); // Programmatic navigation
    };
    const my_wishlist = () => {
      router.push('my_wishlist'); // Programmatic navigation
    };
    const purchase_history = () => {
      router.push('purchase_history'); // Programmatic navigation
    };
    const user_credentials = () => {
      router.push('user_credentials'); // Programmatic navigation
    };
    const user_profile = () => {
      router.push('user_profile'); // Programmatic navigation
    };

   
    return (
        <div>
          
          <Header />  
          <section>
  <div className="bread-crumb">
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/home">
                  <img loading="lazy" className="brd-home mb-1" src="../assets/frontend/default-new/image/c-bread-crumb-home.png" />
                  <span>Home</span>
                </a>
              </li>
              <li><i className="fa-solid fa-chevron-right" /></li>
              <li className="breadcrumb-item active" aria-current="page">
                <span>My bundles</span>
              </li>
            </ol>
          </nav>
          <h1>My bundles</h1>
        </div>
        <div className="col-3 ms-auto d-none d-sm-inline-block">
          <div className="book-img">
            <img loading="lazy" src="../assets/frontend/default-new/image/brd-book.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="wish-list-body user-dashboard-area pt-3">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="wish-list-search mb-5">
          


          <Main />







        </div>          </div>
      <div className="col-md-8 col-lg-9 mt-4 mt-md-0">
        <div className="my-course-1-full-body">
          <h1>Bundles</h1>
          <div className="row">
            <style dangerouslySetInnerHTML={{__html: "\n\t.sbundle-items::before{\n\t\tdisplay: none !important;\n\t\tvisibility: hidden !important;\n\t}\n" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<Footer />
        </div>
    )
}
