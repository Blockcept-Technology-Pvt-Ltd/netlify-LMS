import React from 'react'
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Head from "next/head";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Main from "./main"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookie';

export default function my_courses() {
    const router = useRouter();


  const [userData, setUserData] = useState(null);
  const [userPicture, setUserPicture] = useState(null);

  useEffect(() => {
    // Fetch user data from cookies
    const userId = getCookie('userId');
    const userEmail = getCookie('userEmail');
    const userFirstName = getCookie('userFirstName');
    const userLastName = getCookie('userLastName');
    const userPicture = getCookie('userPicture');

    if (userId && userEmail && userFirstName && userLastName) {
      setUserData({ id: userId, email: userEmail, firstName: userFirstName, lastName: userLastName });
      setUserPicture(userPicture);
    } else {
      // Redirect to login page if user data is not available
      router.push('/login');
    }
  }, []);


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
                <span>Credentials</span>
              </li>
            </ol>
          </nav>
          <h1>Credentials</h1>
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

<section className="wish-list-body message">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4">
        <div className="wish-list-search mb-5">
          
          <Main />




        </div>
      </div>
      <div className="col-lg-9 col-md-8">
        <div className="profile">
          <div className="profile-bg">
          </div>
          <div className="profile-ful-body common-card">
            <div className="profile-parrent mt-5">
            {userData ? (
              <div className="profile-child">
                 {userPicture && (
                <a href="#">
                  {/* <img loading="lazy" src="../uploads/user_image/placeholder.png" /> */}
                  <Image
                        src={userPicture}
                        alt={`${userData.firstName} ${userData.lastName}'s picture`}
                         width={150} // Set appropriate width
                          height={150} // Set appropriate height
                          className="profile-image" // Optional: Add a CSS class for styling
                      />
                  </a>
                 )}
              
                <div className="child-text">
                  <a href="#">
                    <h5>Profile photo</h5>
                  </a>
                  <p>Update your profile photo and personal details</p>
                </div>
              </div>
                ) : (
                  <p>Loading user data...</p>
                )}
            </div>
            <div className="profile-input-section">
              <form className action method="post">
                <div className="row">
                  <div className="col-12 border-bottom mb-3 pb-3">
                    <h4 className="text-black">Account information</h4>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="text-dark fw-600" htmlFor="email">Email</label>
                    <div className="input-group">
                    {userData ? (
                      <input type="email" className="form-control bg-white-2" name="email" id="email" placeholder="Email" defaultValue={userData.email} disabled />
                    ) : (
                      <p>Loading user data...</p>
                    )}
                      </div>
                  </div>
                  <hr className="my-4 bg-secondary" />
                  <div className="col-12 mb-3">
                    <label className="text-dark fw-600" htmlFor="current_password">Current password</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                      <input type="password" className="form-control bg-white-2 text-14px" id="current_password" name="current_password" placeholder="Enter current password" />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="text-dark fw-600" htmlFor="new_password">New password</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-lock" /></span>
                      <input type="password" className="form-control bg-white-2 text-14px" id="new_password" name="new_password" placeholder="Enter new password" />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="text-dark fw-600" htmlFor="confirm_password">Confirm password</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-lock" /></span>
                      <input type="password" className="form-control bg-white-2 text-14px" id="confirm_password" name="confirm_password" placeholder="Re-type your password" />
                    </div>
                  </div>
                  <div className="col-12 pt-4">
                    <a href="#!"> <button className="btn btn-primary px-5">Save changes</button></a>
                  </div>
                </div>
              </form>
            </div>
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
