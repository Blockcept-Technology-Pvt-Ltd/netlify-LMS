import React from 'react'
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Head from "next/head";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Main from "./main"
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
                <span>Purchase history</span>
              </li>
            </ol>
          </nav>
          <h1>Purchase history</h1>
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

          
       <section className="wish-list-body">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="wish-list-search mb-5">
          
          <Main />




        </div>          </div>
      <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="purchase-body common-card">
          <div className="purchase-2">
          </div><table className="table">
            <thead className="table-head">
              <tr>
                <th scope="col"><h6>Purchased courses</h6></th>
                <th scope="col"><h6>Payment method</h6></th>
                <th scope="col"><h6>Price</h6></th>
                <th scope="col"><h6>Purchased date</h6></th>
                <th scope="col" className="w-auto"><h6 className="text-end">Invoice</h6></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>






<Footer />
        </div>
    )
}
