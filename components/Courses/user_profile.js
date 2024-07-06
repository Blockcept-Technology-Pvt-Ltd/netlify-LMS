import React from 'react'
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookie';
import Image from 'next/image';

import Link from 'next/link';
import Main from "./main"
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
                <span>User profile</span>
              </li>
            </ol>
          </nav>
          <h1>User profile</h1>
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




        </div>          </div>
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
                  <a href="#"><h5>Profile photo</h5></a>
                  <p>Update your profile photo and personal details</p>  
                </div>
              
              </div>
              ) : (
                <p>Loading user data...</p>
              )}
              <div className="profile-child-btn">
                <form action="../home/update_profile/update_photo/true" method="post" encType="multipart/form-data" className="d-flex align-items-center">
                  <input type="file" id="profile-photo-input" name="user_image" onchange="
                                  $('.photo-upload-btn').toggleClass('d-hidden');
                                  $('[for=profile-photo-input]').toggleClass('d-hidden');
                              " className="d-none" />
                  <label htmlFor="profile-photo-input" className="btn btn-light float-end" type="button" style={{backgroundColor: 'var(--bs-gray-200)'}}><i className="fas fa-upload" /> Upload photo</label>
                  <div className="photo-upload-btn d-hidden">
                    <button type="submit" className="purchase-btn ms-1 float-end">Save</button>
                    <button type="reset" onclick="
                                      $('.photo-upload-btn').toggleClass('d-hidden');
                                      $('[for=profile-photo-input]').toggleClass('d-hidden');
                                  " className="purchase-btn float-end">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="profile-input-section">
              <form className action="n " method="post">
                <div className="row">
                  <div className="col-12 border-bottom mb-3 pb-3">
                    <h4 className="text-black">Profile info</h4>
                  </div>
                  <div className="col-md-6">
                    <label className="text-dark fw-600" htmlFor="FristName">First name</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                      {userData ? (
                      <input type="text" className="form-control bg-white-2 text-14px" name="first_name" id="FristName" placeholder="First name" defaultValue={userData.firstName} />
                    ) : (
                      <p>Loading user data...</p>
                    )}
                      </div>
                  </div>
                  <div className="col-md-6">
                    <label className="text-dark fw-600" htmlFor="FristName">Last name</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                      {userData ? (
                      <input type="text" className="form-control bg-white-2 text-14px" name="last_name" placeholder="Last name" defaultValue={userData.lastName} />
                    ) : (
                      <p>Loading user data...</p>
                    )}
                      </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label className="text-dark fw-600" htmlFor="Biography">Biography</label>
                      <textarea className="form-control bg-white-2 text-14px text_editor" name="biography" id="Biography" defaultValue={""} />
                    </div>
                    <hr className="my-5 bg-secondary" />
                    <label className="text-dark fw-600">Add your twitter link</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fab fa-twitter" /></span>
                      <input type="text" className="form-control bg-white-2 text-14px" maxLength={60} name="twitter_link" placeholder="Twitter link" defaultValue />
                    </div>
                    <label className="text-dark fw-600">Add your facebook link</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fab fa-facebook" /></span>
                      <input type="text" className="form-control bg-white-2 text-14px" maxLength={60} name="facebook_link" placeholder="Facebook link" defaultValue />
                    </div>
                    <label className="text-dark fw-600">Add your linkedin link</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fab fa-linkedin" /></span>
                      <input type="text" className="form-control bg-white-2 text-14px" maxLength={60} name="linkedin_link" placeholder="Linkedin link" defaultValue />
                    </div>
                  </div>
                  <div className="col-12 pt-4">
                    <button className="btn btn-primary px-5">Save</button>
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
