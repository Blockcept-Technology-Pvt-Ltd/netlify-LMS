import React from 'react'
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Head from "next/head";
import { useRouter } from 'next/router';
import Main from "./main"
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
                      <span>Booked schedules</span>
                    </li>
                  </ol>
                </nav>
                <h1>Booked schedules</h1>
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







      <section className="wish-list-body ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="wish-list-search mb-5">
                


                <Main />




              </div>          </div>
            <div className="col-lg-9">
              <div className="conversation-fulllll-body common-card">
                <ul className="nav nav-tabs sNav-tabs mt-3" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="upcoming-tab" data-bs-toggle="tab" data-bs-target="#upcoming-tab-pane" type="button" role="tab" aria-controls="upcoming-tab-pane" aria-selected="true">
                      Upcoming                                <p className="badge bg-success ">
                        0                              </p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="archive-tab" data-bs-toggle="tab" data-bs-target="#archive-tab-pane" type="button" role="tab" aria-controls="archive-tab-pane" aria-selected="true">
                      Archive                                <p className="badge bg-danger ">
                        0                              </p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment-tab-pane" type="button" role="tab" aria-controls="payment-tab-pane" aria-selected="true">
                      Payment                                <p className="badge bg-info ">
                        0                              </p>
                    </button>
                  </li>
                </ul>
                <div className="tab-content tutor-tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="upcoming-tab-pane" role="tabpanel" aria-labelledby="upcoming-tab">
                    No data found                                                  </div>
                  <div className="tab-pane fade show " id="archive-tab-pane" role="tabpanel" aria-labelledby="archive-tab">
                    No data found                      </div>
                  <div className="tab-pane fade show " id="payment-tab-pane" role="tabpanel" aria-labelledby="payment-tab">
                    No data found                                                  </div>
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
