import React from 'react'
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Head from "next/head";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';
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


    







      {/* <section className="wish-list-body ">
        <div className="container">
          <div className="row"> */}
            {/* <div className="col-md-4 col-lg-3">
              <div className="wish-list-search mb-5"> */}
                <div className="row">
                  <div className="col-md-12">
                  {userData ? (
                    <div className="student-profile-info">
                      {userPicture && (
                      // <img loading="lazy" className="profile-image" src="../uploads/user_image/placeholder.png" />
                      <Image
                        src={userPicture}
                        alt={`${userData.firstName} ${userData.lastName}'s picture`}
                         width={150} // Set appropriate width
                          height={150} // Set appropriate height
                          className="profile-image" // Optional: Add a CSS class for styling
                      />
                      )}
                      <h4>{userData.firstName} {userData.lastName}</h4>
                      <span>{userData.email}</span>
                    </div>
                     ) : (
                        <p>Loading user data...</p>
                      )}
                  </div>
                </div>


                <div className="wish-list-course">
                                    <a className="btn-profile-menu active" onClick={my_courses}
                                        style={{  cursor: 'pointer' }}>
                                        <i className="fa-solid fa-book-open-reader me-2" />
                                        My courses </a>
                                    <a className="btn-profile-menu " onClick={my_bundles}
                                        style={{  cursor: 'pointer' }}>
                                        <i className="fas fa-cubes me-2" />
                                        Course bundles </a>
                                    <a className="btn-profile-menu " onClick={my_bootcamp}
                                         style={{  cursor: 'pointer' }}>
                                        <span className="me-1">
                                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_38_2)">
                                                    <path d="M5.25 10.5C6.9045 10.5 8.25 9.1545 8.25 7.5C8.25 5.8455 6.9045 4.5 5.25 4.5C3.5955 4.5 2.25 5.8455 2.25 7.5C2.25 9.1545 3.5955 10.5 5.25 10.5ZM5.25 6C6.07725 6 6.75 6.67275 6.75 7.5C6.75 8.32725 6.07725 9 5.25 9C4.42275 9 3.75 8.32725 3.75 7.5C3.75 6.67275 4.42275 6 5.25 6ZM10.5 17.25C10.5 17.6647 10.164 18 9.75 18C9.336 18 9 17.6647 9 17.25C9 15.1823 7.31775 13.5 5.25 13.5C3.18225 13.5 1.5 15.1823 1.5 17.25C1.5 17.6647 1.164 18 0.75 18C0.336 18 0 17.6647 0 17.25C0 14.3558 2.355 12 5.25 12C8.145 12 10.5 14.3558 10.5 17.25ZM18 3.75V9.75C18 11.8177 16.3178 13.5 14.25 13.5H11.25C10.836 13.5 10.5 13.1647 10.5 12.75V11.25C10.5 10.8353 10.836 10.5 11.25 10.5H13.5C13.914 10.5 14.25 10.8353 14.25 11.25V12C15.4905 12 16.5 10.9905 16.5 9.75V3.75C16.5 2.5095 15.4905 1.5 14.25 1.5H7.09875C6.29775 1.5 5.55075 1.93125 5.1495 2.62575C4.94175 2.98425 4.4835 3.108 4.125 2.89875C3.76575 2.69175 3.6435 2.23275 3.85125 1.87425C4.52025 0.7185 5.7645 0 7.0995 0H14.2508C16.3185 0 18 1.68225 18 3.75Z" fill="#1E293B" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_38_2">
                                                        <rect width={18} height={18} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Bootcamp </a>
                                   

                                    <a onClick={my_bookings}
                                        style={{  cursor: 'pointer' }} className="btn-profile-menu" passHref>
                                        <i className="far fa-calendar-check me-2" />
                                        Booked Tuition
                                    </a>
                                    <a className="btn-profile-menu " onClick={my_ebooks}
                                          style={{  cursor: 'pointer' }}>
                                        <i className="fas fa-book me-2" />
                                        My ebooks </a>
                                    <a className="btn-profile-menu " onClick={purchase_history}
                                           style={{ cursor: 'pointer' }}>
                                        <i className="fas fa-history me-2" />
                                        Purchase history </a>
                                    <a className="btn-profile-menu " onClick={user_profile}
                                             style={{ cursor: 'pointer' }}>
                                        <i className="fa-regular fa-user me-2" />
                                        Profile </a>
                                    <a className="btn-profile-menu " onClick={user_credentials}
                                               style={{  cursor: 'pointer' }}>
                                        <i className="fas fa-key me-2" />
                                        Account </a>

                                      
                                </div>




              {/* </div>          </div> */}
           






          {/* </div>
        </div>
      </section> */}



    </div>
  )
}
