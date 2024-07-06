import React from 'react'

import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from '../utils/cookie';
import Image from 'next/image';
export default function home() {


  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [userPicture, setUserPicture] = useState(null);
  useEffect(() => {
    // Fetch user data from cookies
    const userId = getCookie('userId');
    const userEmail = getCookie('userEmail');
    const userFirstName = getCookie('userFirstName');
    const userLastName = getCookie('userLastName');
    setUserPicture(userPicture);
    if (userId && userEmail && userFirstName && userLastName) {
      setUserData({ id: userId, email: userEmail, firstName: userFirstName, lastName: userLastName });
    } else {
      // Redirect to login page if user data is not available
      router.push('/login');
    }
  }, []);



  // router
  // const routers = useRouter();

    const handleNavigation = () => {
      router.push('/courses/home'); // Programmatic navigation
    };

  return (
    <div>

{/* <div>
      <h1>Welcome to the Home Page</h1>
      {userData ? (
        <div>
          <h3>User Details:</h3>
          <p>User ID: {userData.id}</p>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.firstName} {userData.lastName}</p>
          
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div> */}
      
  <Header />
  
  <section className="h-1-banner bannar-area pb-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 order-2 order-lg-1">
          <div className="h-1-banner-text EbannerLeft position-relative">
            <h1 className="wow animate__animated  animate__fadeIn" data-wow-duration={1000} data-wow-delay={200}>
              Start learning from best <span className="d-inline-block">platform</span> </h1>
            <div className="EbannerTop wow animate__animated  animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={200}>
              <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
              <div className="search-option mb-0">
                <form action method="get">
                  <input className="form-control" type="text" placeholder="What do you want to learn" name="query" />
                  <button className="submit-cls" type="submit">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.58439 17.5017C13.9566 17.5017 17.5011 13.9573 17.5011 9.585C17.5011 5.21275 13.9566 1.66833 9.58439 1.66833C5.21214 1.66833 1.66772 5.21275 1.66772 9.585C1.66772 13.9573 5.21214 17.5017 9.58439 17.5017Z" stroke="#1E293B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.892 18.7769C18.1361 19.021 18.5318 19.021 18.7759 18.7769C19.02 18.5328 19.02 18.1371 18.7759 17.893L17.892 18.7769ZM16.2759 15.393L15.834 14.9511L14.9501 15.835L15.392 16.2769L16.2759 15.393ZM18.7759 17.893L16.2759 15.393L15.392 16.2769L17.892 18.7769L18.7759 17.893Z" fill="#1E293B" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="eCircle_parent">
              <div className="eCircle wow animate__animated  animate__fadeInRightBig" data-wow-duration={1000} data-wow-delay={300}>
                <span className="circleOne"><img src="assets/frontend/default-new/image/circle1.png" alt /></span>
                <span className="cirlceTwo"><img src="assets/frontend/default-new/image/circle2.png" alt /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 order-md-2 order-1  order-lg-1 pt-0 pt-md-5 ">
          <div className="EbannerRight">
            <div className="Ebanner wow animate__animated  animate__fadeIn" data-wow-duration={1000} data-wow-delay={400}>
              <img loading="lazy" width="100%" src="uploads/system/home-1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="bannar-card  Ebaner-card wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={500} data-wow-delay={400}>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 arrow-side">
            <div className="banner-card-1">
              <div className="row">
                <div className="col-lg-2">
                  <img src="assets/frontend/default-new/image/h1.svg" />
                </div>
                <div className="col-lg-10">
                  <h6>Expert instruction</h6>
                  <p>Find the right course for you</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 arrow-side">
            <div className="banner-card-1">
              <div className="row">
                <div className="col-lg-2">
                  <img loading="lazy" src="assets/frontend/default-new/image/h2.svg" />
                </div>
                <div className="col-lg-10">
                  <h6>16 Online courses</h6>
                  <p>Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 arrow-side">
            <div className="banner-card-1">
              <div className="row">
                <div className="col-lg-2">
                  <img loading="lazy" src="assets/frontend/default-new/image/h3.svg" />
                </div>
                <div className="col-lg-10">
                  <h6>Lifetime access</h6>
                  <p>Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Banner Section End --------------*/}
  {/* Start Upcoming Courses */}
  <section className="py-5 eUpcomingCourse ">
    <div className="container">
      <div className="row mb-24 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={500} data-wow-delay={300}>
        <div className="col-lg-6">
          <div className="title-one">
            <h4 className="title">Explore our upcoming courses</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="Etop_right">
            <p className="fz_15_m_24">Discover a world of learning opportunities through our upcoming courses,
              where industry experts and thought leaders will guide you in acquiring new expertise,
              expanding your horizons, and reaching your full potential.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Items */}
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 col-sm-6    " data-wow-duration={500} data-wow-delay={300}>
              <a href="#" id="top_course_42" className="course-item-one">
                <div className="ePosition">
                  <div className="eImage d-flex">
                    <span className="px-3">Responsive</span>
                    <div className="img">
                      <img loading="lazy" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="img-rating">
                  <div className="img">
                    <img loading="lazy" src="uploads/thumbnails/upcoming_thumbnails/169f4fe1355584114adecf2a1111a821.jpg" alt />
                  </div>
                  <div className="content">
                    <h4 className="title pb-0">Color Theory for Designers</h4>
                    <p className="info ellipsis-line-2 fw-400"> Release on : 3 July 2024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6    " data-wow-duration={500} data-wow-delay={300}>
              <a href="#" id="top_course_41" className="course-item-one">
                <div className="ePosition">
                  <div className="eImage d-flex">
                    <span className="px-3">Digital Art</span>
                    <div className="img">
                      <img loading="lazy" src="uploads/user_image/optimized/41146b28f9a50262e27b04d954dfe96e.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="img-rating">
                  <div className="img">
                    <img loading="lazy" src="uploads/thumbnails/upcoming_thumbnails/e2cc422780cf111f7aabbf56777155d3.jpg" alt />
                  </div>
                  <div className="content">
                    <h4 className="title pb-0">Creating 3D environments in Blender</h4>
                    <p className="info ellipsis-line-2 fw-400"> Release on : 20 July 2024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6    " data-wow-duration={500} data-wow-delay={300}>
              <a href="#" id="top_course_40" className="course-item-one">
                <div className="ePosition">
                  <div className="eImage d-flex">
                    <span className="px-3">Responsive</span>
                    <div className="img">
                      <img loading="lazy" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="img-rating">
                  <div className="img">
                    <img loading="lazy" src="uploads/thumbnails/upcoming_thumbnails/f055dbed10dad420702422b6bd1e8400.jpg" alt />
                  </div>
                  <div className="content">
                    <h4 className="title pb-0">Music Theory - Fundamentals for Composition in Any Genre
                    </h4>
                    <p className="info ellipsis-line-2 fw-400"> Release on : 9 September 2024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6    " data-wow-duration={500} data-wow-delay={300}>
              <a href="#" id="top_course_39" className="course-item-one">
                <div className="ePosition">
                  <div className="eImage d-flex">
                    <span className="px-3">Responsive</span>
                    <div className="img">
                      <img loading="lazy" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="img-rating">
                  <div className="img">
                    <img loading="lazy" src="uploads/thumbnails/upcoming_thumbnails/a2172339634e35aa81fc9d8b82d138ea.jpg" alt />
                  </div>
                  <div className="content">
                    <h4 className="title pb-0">Anime Character Creator: Make 3D Anime Characters in
                      Blender</h4>
                    <p className="info ellipsis-line-2 fw-400"> Release on : 23 August 2024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6    " data-wow-duration={500} data-wow-delay={300}>
              <a href="#" id="top_course_38" className="course-item-one">
                <div className="ePosition">
                  <div className="eImage d-flex">
                    <span className="px-3">Responsive</span>
                    <div className="img">
                      <img loading="lazy" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="img-rating">
                  <div className="img">
                    <img loading="lazy" src="uploads/thumbnails/upcoming_thumbnails/0a9d019ce318535e4c1ce8f5207a33d3.jpg" alt />
                  </div>
                  <div className="content">
                    <h4 className="title pb-0">Mastering Yoga Sun Salutations with mindfulness</h4>
                    <p className="info ellipsis-line-2 fw-400"> Release on : 13 July 2024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6    " data-wow-duration={500} data-wow-delay={300}>
              <a href="#" id="top_course_37" className="course-item-one">
                <div className="ePosition">
                  <div className="eImage d-flex">
                    <span className="px-3">Responsive</span>
                    <div className="img">
                      <img loading="lazy" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="img-rating">
                  <div className="img">
                    <img loading="lazy" src="uploads/thumbnails/upcoming_thumbnails/728418ca86e6c490721b66e55392d29b.jpg" alt />
                  </div>
                  <div className="content">
                    <h4 className="title pb-0">Mastering Cinematic Compositions In Video &amp; Film</h4>
                    <p className="info ellipsis-line-2 fw-400"> Release on : 5 July 2024</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Upcoming Courses */}
  {/*-------- Top courses Section start -------------*/}
  <section className="courses Ecourse grid-view-body py-5 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={500} data-wow-delay={300}>
    <div className="container">
      <h1 className="pt-0 f-36"><span>Top courses</span></h1>
      <p className="ms-0">These are the most popular courses among listen courses learners worldwide</p>
      <div className="courses-card">
        <div className="course-group-slider" data-wow-duration={1000} data-wow-delay={500}>
          <div className="single-popup-course ">
            <a href="#" id="top_course_12" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_121701001881.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse12">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/12/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Intermediate</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">WordPress Theme Development with Bootstrap</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>4</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(2 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare5b09.html?course-1=wordpress-theme-development-with-bootstrap&course-id-1=12');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Learn how to confidently develop custom &amp; profitable
                  Responsive WordPress Themes and Websites with no prior experience.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$10</h5>
                      <p className="mt-1"><del>$11.99</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 24:11:44
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_12" className="course-popover-content">
              <p className="last-update">Last updated Sun, 26-Nov-2023</p>
              <div className="course-title">
                <a href="#">WordPress Theme
                  Development with Bootstrap</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  25 Lessons </span>
                <span className><i className="far fa-clock" />
                  24:11:44 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Learn how to confidently develop custom &amp; profitable Responsive WordPress Themes and
                Websites with no prior experience. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Have the skills to start making money on the side, as a casual freelancer, or full
                  time as a work-from-home freelancer</li>
                <li>Easily create a beautiful HTML &amp; CSS website with Bootstrap (that doesn't look like
                  generic Bootstrap websites!)</li>
                <li>Convert any static HTML &amp; CSS website into a Custom WordPress Theme</li>
                <li>Have a thorough understanding of utilizing PHP to create WordPress websites &amp; themes
                </li>
                <li>Feel comfortable with the process of turning static websites into dynamic WordPress
                  websites</li>
                <li>Fully understand how to use Custom Post Types and Advanced Custom Fields in
                  WordPress</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course12" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/12/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course12" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/12/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_13" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_131701063901.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse13">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/13/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Advanced</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Adobe Illustrator CC - Essentials Training Course</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>5</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(1 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare7edb.html?course-1=adobe-illustrator-cc-essentials-training-course&course-id-1=13');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Learn Adobe Illustrator CC graphic design, logo design, and
                  more with this in-depth, practical, easy-to-follow course!</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$12</h5>
                      <p className="mt-1"><del>$18.99</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:31:12
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_13" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">Adobe
                  Illustrator CC - Essentials Training Course</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  12 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:31:12 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth,
                practical, easy-to-follow course! </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>You will be able to add Illustrator to your CV</li>
                <li>You will have over 30 of your own projects to add to your portfolio.</li>
                <li>You will be able to start earning money from your Illustrator Skills.</li>
                <li>Feel comfortable using Adobe Illustrator to design your own graphics from scratch.
                </li>
                <li>Master advanced Illustrator tools and techniques.</li>
                <li>Draw beginner to advanced shapes and icons.</li>
                <li>Learn all of the key skills of Illustrator: shapes, text, masking, effects, and
                  exporting.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course13" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/13/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course13" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/13/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_16" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_161701063677.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse16">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/16/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Complete Guitar Lessons System </h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compared62f.html?course-1=complete-guitar-lessons-system&course-id-1=16');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Interior Design Color Schemes Made Easy</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$12</h5>
                      <p className="mt-1"><del>$149.99</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:15:34
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_16" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">Complete Guitar Lessons
                  System </a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  7 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:15:34 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Interior Design Color Schemes Made Easy </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Create the ideal color scheme for any room in your home using a tool that has been
                  designed to guide you through this process easily!</li>
                <li>Use the psychology of color to create the perfect mood in your home.</li>
                <li>Mix patterns successfully in a room.</li>
                <li>Use the color wheel like a pro.</li>
                <li>Use texture to change the way a color appears.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course16" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/16/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course16" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/16/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_17" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_171701068402.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse17">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/17/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Intermediate</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Complete Blender Creator: Learn 3D Modelling </h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>4</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(1 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare8420.html?course-1=complete-blender-creator-learn-3d-modelling&course-id-1=17');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Use Blender to create beautiful 3D models for video games, 3D
                  printing, house design etc. No prior knowledge required.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:29:57
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_17" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">Complete
                  Blender Creator: Learn 3D Modelling </a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  6 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:29:57 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Use Blender to create beautiful 3D models for video games, 3D printing, house design
                etc. No prior knowledge required. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Use Blender and understand it's interface</li>
                <li>Understand the principles of modelling</li>
                <li>Create 3D models with simple colors</li>
                <li>Learn the basics of animation</li>
                <li>Explore and have fun with particle effects</li>
                <li>Create your own materials</li>
                <li>UV map and unwrap your models</li>
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="#">Enroll now</a>
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_18" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_181701068461.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse18">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/18/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Basic to advanced sewing course for beginners</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/comparece39.html?course-1=basic-to-advanced-sewing-course-for-beginners&course-id-1=18');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Building A Strong Sewing Foundation. It is a long-established
                  fact that a reader will be distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here',
                  making it look like readable English.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$13</h5>
                      <p className="mt-1"><del>$29.99</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:22:29
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_18" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">Basic to
                  advanced sewing course for beginners</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  9 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:22:29 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Building A Strong Sewing Foundation. It is a long-established fact that a reader will be
                distracted by the readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look like readable
                English. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Learn sewing machine basics</li>
                <li>Learn a multitude of stitches and seam finishes</li>
                <li>How to make a pattern for any size envelope pillow</li>
                <li>Correctly sew the 4 basic seams</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course18" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/18/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course18" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/18/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_20" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/course_thumbnail_default-new_201701069099.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse20">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/20/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Advanced</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">After Effects CC 2024: Complete Course</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare5cdb.html?course-1=after-effects-cc-2024-complete-course&course-id-1=20');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Create stunning Motion Graphics, VFX Visual Effects &amp; VFX
                  Compositing with hands-on tutorials &amp; 50+ practice projects.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$58</h5>
                      <p className="mt-1"><del>$158</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 00:14:25
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_20" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">After Effects CC
                  2024: Complete Course</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  8 Lessons </span>
                <span className><i className="far fa-clock" />
                  00:14:25 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Create stunning Motion Graphics, VFX Visual Effects &amp; VFX Compositing with hands-on
                tutorials &amp; 50+ practice projects. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>How to use all of After Effects CC - in a dynamic, hands on approach.</li>
                <li>Work with the latest 2019 Responsive Techniques</li>
                <li>Create Motion Graphics to enhance your videos using a step by step, easy-to-use
                  method.</li>
                <li>Boost your creativity by completing 50+ Practice Activities and projects from simple
                  to complex.</li>
                <li>Practice compositing techniques to achieve stunning video effects.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course20" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/20/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course20" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/20/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_21" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_211689234810.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse21">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/21/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">How to Use Lighting Design to Transform your Home</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare0c6d.html?course-1=how-to-use-lighting-design-to-transform-your-home&course-id-1=21');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Learn How to Use Lighting in your Interior Design Like a Pro
                </p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$56</h5>
                      <p className="mt-1"><del>$89.99</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:03:48
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_21" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">How to
                  Use Lighting Design to Transform your Home</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  10 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:03:48 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Learn How to Use Lighting in your Interior Design Like a Pro </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Use 3 layers of light to create a cohesive and dramatic lighting scheme in any room
                  of their home.</li>
                <li>Calculate exactly how much artificial light each of their rooms need.</li>
                <li>Effectively utilize and control both natural and artificial light in their home.
                </li>
                <li>Select light fixtures appropriate to the type of room.</li>
                <li>Place lighting fixtures appropriately throughout their room.</li>
                <li>Hide unsightly electrical cords from table and floor lamps.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course21" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/21/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course21" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/21/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_26" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_261689234890.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse26">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/26/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Advanced</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">The Complete Graphic Design Theory</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>5</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(1 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare1dd1.html?course-1=the-complete-graphic-design-theory&course-id-1=26');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Today I am starting part 1 of an ongoing series I am going to
                  call 'Step Up Your Filmammaking'. Today's topic is the importance of
                  B-Roll. </p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$1800</h5>
                      <p className="mt-1"><del>$1896</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:09:38
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_26" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">The Complete Graphic
                  Design Theory</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  7 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:09:38 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Today I am starting part 1 of an ongoing series I am going to call 'Step Up Your
                Filmammaking'. Today's topic is the importance of B-Roll. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Master in B-Roll</li>
                <li>Become pro like Peter Mckinnon</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course26" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/26/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course26" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/26/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_29" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_291689237147.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse29">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/29/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Javascript Understanding the Weird Parts - The First 3.5 Hours</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare3348.html?course-1=javascript-understanding-the-weird-parts-the-first-3-5-hours&course-id-1=29');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">This is an advanced Javascript course for everyone, giving a
                  deep understanding of the language by understanding how it works under the hood.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 00:04:33
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_29" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">Javascript
                  Understanding the Weird Parts - The First 3.5 Hours</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  1 Lessons </span>
                <span className><i className="far fa-clock" />
                  00:04:33 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                This is an advanced Javascript course for everyone, giving a deep understanding of the
                language by understanding how it works under the hood. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="#">Enroll now</a>
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_30" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_301701069478.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse30">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/30/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">How to shoot cinematic tech videos like Apple</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compared38f.html?course-1=how-to-shoot-cinematic-tech-videos-like-apple&course-id-1=30');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">In this video tutorial learn how to shoot cinematic product
                  videos shots like you see in all the big budget commercials.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$524</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 00:28:13
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_30" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">How to shoot
                  cinematic tech videos like Apple</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  3 Lessons </span>
                <span className><i className="far fa-clock" />
                  00:28:13 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                In this video tutorial learn how to shoot cinematic product videos shots like you see in
                all the big budget commercials. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>You will become a professional TechTuber</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_top_course30" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/30/top_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_top_course30" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/30/top_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course ">
            <a href="#" id="top_course_31" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_311689235212.jpg" />
                <div className="courses-icon " id="coursesWishlistIconTopCourse31">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/31/TopCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">The Complete Python Bootcamp From Zero to Hero</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>4</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(1 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare4b5f.html?course-1=the-complete-python-bootcamp-from-zero-to-hero&course-id-1=31');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Supreme Photoshop Training - Become an expert in Photoshop
                  with no experience or prior knowledge - Anyone can do it</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"> <i className="fa-regular fa-clock p-0 text-15px" /> 01:50:56
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="top_course_feature_31" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">The
                  Complete Python Bootcamp From Zero to Hero</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  12 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:50:56 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Supreme Photoshop Training - Become an expert in Photoshop with no experience or prior
                knowledge - Anyone can do it </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>You will be a Photoshop Expert </li>
                <li>You will understand all photoshop basics </li>
                <li>You will know how to photoshop your own projects </li>
                <li>You will know learn over 60+ Photoshop effects &amp; techniques.</li>
                <li>You will be beyond intermediate photoshop level. </li>
                <li>You will know how to work with layers, masks, smart objects &amp; more.</li>
                <li>ou will know how to work with color corrections, grades, filters &amp; effects.</li>
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="#">Enroll now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Top courses Section End -------------*/}
  {/*-------- Top Categories Start -----------*/}
  <section className="top-categories py-5 ">
    <div className="container">
      <div className="row wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={500} data-wow-delay={400}>
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <h1 className="text-center f-36">Top categories</h1>
          <p className="text-center mt-4">These are the most popular courses among listen courses learners
            worldwide</p>
        </div>
        <div className="col-lg-3" />
      </div>
      <div className="category-product mt-2 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={500}>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/b8dfc0da45d2cde88437d6c395cb42c1.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> HTML &amp; CSS</h5>
                <p className="hide-cat-text">3 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/ead3b60446ff2dd6ad1fbff44e3077831.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Color Theory</h5>
                <p className="hide-cat-text">2 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/49432e37c3aea70e51a022b0fbdaeecd1.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Photoshop</h5>
                <p className="hide-cat-text">2 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/0827d9f7a1778f41ce272a8d245d761e.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> WordPress Theme</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/24e653ec78d1f3e819e2dc789d9566b41.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Adobe Illustrator</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/ccb11e0f69c310c52ce56172ffbf11f6.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Drawing</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/0b21bfa09bcd96d07a69e944fc92468b1.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Blender</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/d71a58e37da55060093633b89c5fd5c0.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Sewing</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/06cc729cf9c74b493b6d66d0691faa4f.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Motion Graphics</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/0e18742ddd6e806ab26495a505a2ff56.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Lighting Design</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/143b958087b8d3258929469453d1cab8.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Mobile App Design</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={600}>
            <a href="#" className="category-product-body position-relative eCategory d-flex">
              <div className="cate-image">
                <img src="uploads/thumbnails/category_thumbnails/f832be64bdb4f5eabbab2bfdc104622d.jpg" alt />
              </div>
              {/* <span class="category-hide-icon"><i class="fa-solid fa-angle-right"></i></span> */}
              <div className="eText">
                <h5 className="pt-0"> Bootstrap</h5>
                <p className="hide-cat-text">1 Courses</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Top Categories end -----------*/}
  {/*-------- Latest courses Section start -------------*/}
  <section className="Ecourse courses grid-view-body py-5 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={500} data-wow-delay={300}>
    <div className="container">
      <h1 className="text-center f-36 pt-0"><span>Top 10 Latest courses</span></h1>
      <p className="text-center">These are the most latest courses among listen courses learners worldwide</p>
      <div className="courses-card">
        <div className="course-group-slider ">
          <div className="single-popup-course">
            <a href="#" id="latest_course_36" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_361689237588.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse36">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/36/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Advanced</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">The Data Science Course: Complete Data Science</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare9bdc.html?course-1=the-data-science-course-complete-data-science&course-id-1=36');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">The horse is a large, strong, and elegant mammal with a long,
                  flowing mane and tail. It is known for its speed, agility, and intelligence, making
                  it a popular animal for riding, racing, and farm work. Horses have long, slender
                  legs with hooves, which enable them to run at high speeds and jump over obstacles.
                  They come in a wide variety of colors and breeds, and have a strong social hierarchy
                  within their herds. Horses are herbivores and primarily graze on grass and hay, and
                  require regular grooming and exercise to maintain their health and well-being.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_36" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">The Data
                  Science Course: Complete Data Science</a>
              </div>
              <div className="course-meta">
                <span className="badge bg-light">H5p course</span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                The horse is a large, strong, and elegant mammal with a long, flowing mane and tail. It
                is known for its speed, agility, and intelligence, making it a popular animal for
                riding, racing, and farm work. Horses have long, slender legs with hooves, which enable
                them to run at high speeds and jump over obstacles. They come in a wide variety of
                colors and breeds, and have a strong social hierarchy within their herds. Horses are
                herbivores and primarily graze on grass and hay, and require regular grooming and
                exercise to maintain their health and well-being. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="#">Enroll now</a>
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="#" id="latest_course_32" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_321689235421.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse32">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/32/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">DESIGN RULES: Principles + Practices for Great UI Design</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare4184.html?course-1=design-rules-principles-practices-for-great-ui-design&course-id-1=32');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Getting Started is the perfect course for you. In this
                  course, you’ll learn how to build apps with Flutter, the new mobile platform backed
                  by Google.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$99</h5>
                      <p className="mt-1"><del>$150</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_32" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">DESIGN
                  RULES: Principles + Practices for Great UI Design</a>
              </div>
              <div className="course-meta">
                <span className="badge bg-light">Scorm course</span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Getting Started is the perfect course for you. In this course, you’ll learn how to build
                apps with Flutter, the new mobile platform backed by Google. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Flutter android and IOS mobile app development.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_latest_course32" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/32/latest_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_latest_course32" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/32/latest_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="#" id="latest_course_31" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_311689235212.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse31">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/31/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">The Complete Python Bootcamp From Zero to Hero</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>4</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(1 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare4b5f.html?course-1=the-complete-python-bootcamp-from-zero-to-hero&course-id-1=31');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Supreme Photoshop Training - Become an expert in Photoshop
                  with no experience or prior knowledge - Anyone can do it</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 01:50:56
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_31" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">The
                  Complete Python Bootcamp From Zero to Hero</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  12 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:50:56 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Supreme Photoshop Training - Become an expert in Photoshop with no experience or prior
                knowledge - Anyone can do it </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>You will be a Photoshop Expert </li>
                <li>You will understand all photoshop basics </li>
                <li>You will know how to photoshop your own projects </li>
                <li>You will know learn over 60+ Photoshop effects &amp; techniques.</li>
                <li>You will be beyond intermediate photoshop level. </li>
                <li>You will know how to work with layers, masks, smart objects &amp; more.</li>
                <li>ou will know how to work with color corrections, grades, filters &amp; effects.</li>
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="home/course/the-complete-python-bootcamp-from-zero-to-hero/31.html">Enroll now</a>
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="#" id="latest_course_30" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_301701069478.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse30">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/30/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">How to shoot cinematic tech videos like Apple</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compared38f.html?course-1=how-to-shoot-cinematic-tech-videos-like-apple&course-id-1=30');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">In this video tutorial learn how to shoot cinematic product
                  videos shots like you see in all the big budget commercials.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$524</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 00:28:13
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_30" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="#">How to shoot
                  cinematic tech videos like Apple</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  3 Lessons </span>
                <span className><i className="far fa-clock" />
                  00:28:13 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                In this video tutorial learn how to shoot cinematic product videos shots like you see in
                all the big budget commercials. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>You will become a professional TechTuber</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_latest_course30" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/30/latest_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_latest_course30" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/30/latest_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="#" id="latest_course_29" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_291689237147.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse29">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/29/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Javascript Understanding the Weird Parts - The First 3.5 Hours</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare3348.html?course-1=javascript-understanding-the-weird-parts-the-first-3-5-hours&course-id-1=29');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">This is an advanced Javascript course for everyone, giving a
                  deep understanding of the language by understanding how it works under the hood.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 00:04:33
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_29" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="#">Javascript
                  Understanding the Weird Parts - The First 3.5 Hours</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  1 Lessons </span>
                <span className><i className="far fa-clock" />
                  00:04:33 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                This is an advanced Javascript course for everyone, giving a deep understanding of the
                language by understanding how it works under the hood. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="#">Enroll now</a>
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="home/course/introduction-and-learn-bootstrap/28.html" id="latest_course_28" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_281689234993.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse28">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/28/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Introduction and Learn bootstrap</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>4</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(2 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare2457.html?course-1=introduction-and-learn-bootstrap&course-id-1=28');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Vue (pronounced /vjuː/, like view) is a progressive framework
                  for building user interfaces.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$359</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 01:05:12
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_28" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="home/course/introduction-and-learn-bootstrap/28.html">Introduction and Learn
                  bootstrap</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  1 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:05:12 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Vue (pronounced /vjuː/, like view) is a progressive framework for building user
                interfaces. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Basic in Vue.js</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_latest_course28" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/28/latest_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_latest_course28" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/28/latest_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="home/course/the-complete-graphic-design-theory/26.html" id="latest_course_26" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_261689234890.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse26">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/26/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Advanced</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">The Complete Graphic Design Theory</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>5</p>
                    <p><i className="fa-solid fa-star filled" /></p>
                    <p>(1 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare1dd1.html?course-1=the-complete-graphic-design-theory&course-id-1=26');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Today I am starting part 1 of an ongoing series I am going to
                  call 'Step Up Your Filmammaking'. Today's topic is the importance of
                  B-Roll. </p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$1800</h5>
                      <p className="mt-1"><del>$1896</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 01:09:38
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_26" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="home/course/the-complete-graphic-design-theory/26.html">The Complete Graphic
                  Design Theory</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  7 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:09:38 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Today I am starting part 1 of an ongoing series I am going to call 'Step Up Your
                Filmammaking'. Today's topic is the importance of B-Roll. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Master in B-Roll</li>
                <li>Become pro like Peter Mckinnon</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_latest_course26" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/26/latest_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_latest_course26" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/26/latest_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="home/course/how-to-use-lighting-design-to-transform-your-home/21.html" id="latest_course_21" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_211689234810.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse21">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/21/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">How to Use Lighting Design to Transform your Home</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare0c6d.html?course-1=how-to-use-lighting-design-to-transform-your-home&course-id-1=21');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Learn How to Use Lighting in your Interior Design Like a Pro
                </p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$56</h5>
                      <p className="mt-1"><del>$89.99</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 01:03:48
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_21" className="course-popover-content">
              <p className="last-update">Last updated Thu, 13-Jul-2023</p>
              <div className="course-title">
                <a href="home/course/how-to-use-lighting-design-to-transform-your-home/21.html">How to
                  Use Lighting Design to Transform your Home</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  10 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:03:48 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Learn How to Use Lighting in your Interior Design Like a Pro </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>Use 3 layers of light to create a cohesive and dramatic lighting scheme in any room
                  of their home.</li>
                <li>Calculate exactly how much artificial light each of their rooms need.</li>
                <li>Effectively utilize and control both natural and artificial light in their home.
                </li>
                <li>Select light fixtures appropriate to the type of room.</li>
                <li>Place lighting fixtures appropriately throughout their room.</li>
                <li>Hide unsightly electrical cords from table and floor lamps.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_latest_course21" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/21/latest_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_latest_course21" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/21/latest_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="home/course/after-effects-cc-2024-complete-course/20.html" id="latest_course_20" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/course_thumbnail_default-new_201701069099.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse20">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/20/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Advanced</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">After Effects CC 2024: Complete Course</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare5cdb.html?course-1=after-effects-cc-2024-complete-course&course-id-1=20');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Create stunning Motion Graphics, VFX Visual Effects &amp; VFX
                  Compositing with hands-on tutorials &amp; 50+ practice projects.</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>$58</h5>
                      <p className="mt-1"><del>$158</del></p>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 00:14:25
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_20" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="home/course/after-effects-cc-2024-complete-course/20.html">After Effects CC
                  2024: Complete Course</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  8 Lessons </span>
                <span className><i className="far fa-clock" />
                  00:14:25 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Create stunning Motion Graphics, VFX Visual Effects &amp; VFX Compositing with hands-on
                tutorials &amp; 50+ practice projects. </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>How to use all of After Effects CC - in a dynamic, hands on approach.</li>
                <li>Work with the latest 2019 Responsive Techniques</li>
                <li>Create Motion Graphics to enhance your videos using a step by step, easy-to-use
                  method.</li>
                <li>Boost your creativity by completing 50+ Practice Activities and projects from simple
                  to complex.</li>
                <li>Practice compositing techniques to achieve stunning video effects.</li>
              </ul>
              <div className="popover-btns">
                {/* Cart button */}
                <a id="added_to_cart_btn_latest_course20" className="purchase-btn align-items-center me-auto d-hidden" href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/20/latest_course.html');">
                  <i className="fas fa-minus me-2" /> Remove from cart </a>
                <a id="add_to_cart_btn_latest_course20" className="purchase-btn align-items-center me-auto " href="javascript:void(0)" onclick="actionTo('home/handle_cart_items/20/latest_course.html'); ">
                  <i className="fas fa-plus me-2" /> Add to cart </a>
                {/* Cart button ended*/}
              </div>
            </div>
          </div>
          <div className="single-popup-course">
            <a href="home/course/build-websites-from-scratch-with-html-css/19.html" id="latest_course_19" className="checkPropagation courses-card-body">
              <div className="courses-card-image">
                <img loading="lazy" src="uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_191701070166.jpg" />
                <div className="courses-icon " id="coursesWishlistIconLatestCourse19">
                  <i className="fa-solid fa-heart checkPropagation" onclick="actionTo('home/toggleWishlistItems/19/LatestCourse.html')" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Beginner</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5 className="mb-2">Build Websites from Scratch with HTML &amp; CSS</h5>
                <div className="review-icon">
                  <div className="review-icon-star align-items-center">
                    <p>0</p>
                    <p><i className="fa-solid fa-star " /></p>
                    <p>(0 Reviews)</p>
                  </div>
                  <div className="review-btn d-flex align-items-center">
                    <span className="compare-img checkPropagation" onclick="redirectTo('home/compare7aaa.html?course-1=build-websites-from-scratch-with-html-css&course-id-1=19');">
                      <img loading="lazy" src="assets/frontend/default-new/image/compare.png" />
                      Compare </span>
                  </div>
                </div>
                <p className="ellipsis-line-2">Learn Web Development Essentials and Become a Web Developer
                  From Scratch in this Complete HTML &amp; CSS Beginner's Course</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <h5>Free</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p className="m-0"><i className="fa-regular fa-clock p-0 text-15px" /> 01:24:28
                        Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div id="latest_course_feature_19" className="course-popover-content">
              <p className="last-update">Last updated Mon, 27-Nov-2023</p>
              <div className="course-title">
                <a href="home/course/build-websites-from-scratch-with-html-css/19.html">Build Websites
                  from Scratch with HTML &amp; CSS</a>
              </div>
              <div className="course-meta">
                <span className><i className="fas fa-play-circle" />
                  8 Lessons </span>
                <span className><i className="far fa-clock" />
                  01:24:28 Hours </span>
                <span className><i className="fas fa-closed-captioning" />English</span>
              </div>
              <div className="course-subtitle">
                Learn Web Development Essentials and Become a Web Developer From Scratch in this
                Complete HTML &amp; CSS Beginner's Course </div>
              <h6 className="text-black text-14px mb-1">Outcomes:</h6>
              <ul className="will-learn">
                <li>By the end of this course, you will have a basic &amp; thorough understanding of HTML &amp;
                  CSS</li>
                <li>Upon completion, you will have coded a handful of useful HTML &amp; CSS examples</li>
                <li>In the last section of this course, you focus on building a beautiful, semantic,
                  HTML &amp; CSS web page</li>
                <li>By the end of this course, you will have impressed yourself, and will be able to hit
                  the ground running with your newly acquired skillset</li>
                <li>Start building beautiful websites</li>
                <li>Build a portfolio website, so you can highlight your best web work</li>
              </ul>
              <div className="popover-btns">
                <a className="purchase-btn green_purchase ms-auto" href="home/course/build-websites-from-scratch-with-html-css/19.html">Enroll now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Latest courses Section End -------------*/}
  {/*-------  Expert Instructor Start --------------*/}
  <section className="expert-instructor eExpert-instruction top-categories py-5 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={400}>
    <div className="container">
      <div className="row">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <h1 className="text-center f-36 mt-0 pt-0">Our expert instructor </h1>
          <p className="text-center mt-4 mb-24">They efficiently serve large number of students on our platform
          </p>
        </div>
        <div className="col-lg-3 " />
      </div>
      <div className="instructor-card eInstuctor">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6" data-wow-duration={1000} data-wow-delay={600}>
            <a className="text-muted w-100" href="home/instructor_page/12.html">
            </a><div className="instructor-card-body"><a className="text-muted w-100" href="home/instructor_page/12.html">
                <div className="instructor-card-img">
                  <img loading="lazy" src="uploads/user_image/optimized/c65a8b0a510168ef0a311b1f46c7f918.jpg" />
                </div>
              </a><div className="instructor-card-text"><a className="text-muted w-100" href="home/instructor_page/12.html">
                  <h3 className="text-center">Rosalie Ruth</h3>
                  <p className="ellipsis-line-2">Professional Film Colorist | DaVinci Resolve Trainer</p>
                </a>
                <div className="icon">
                  <div className="icon-div-2">
                    <a className href="../../www.facebook.com/jane-doe.cf.delayed" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a className href="https://www.twitter.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a className href="https://www.linkedin.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" data-wow-duration={1000} data-wow-delay={600}>
            <a className="text-muted w-100" href="home/instructor_page/6.html">
            </a><div className="instructor-card-body"><a className="text-muted w-100" href="home/instructor_page/6.html">
                <div className="instructor-card-img">
                  <img loading="lazy" src="uploads/user_image/optimized/4cba25d6c2f7be7968ec1ae9e5c49920.jpg" />
                </div>
              </a><div className="instructor-card-text"><a className="text-muted w-100" href="home/instructor_page/6.html">
                  <h3 className="text-center">Mathew Anderson</h3>
                  <p className="ellipsis-line-2">Meet Mathew, an innovative and passionate developer.</p>
                </a>
                <div className="icon">
                  <div className="icon-div-2">
                    <a className href="../../www.facebook.com/jane-doe.cf.delayed" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a className href="https://www.twitter.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a className href="https://www.linkedin.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" data-wow-duration={1000} data-wow-delay={600}>
            <a className="text-muted w-100" href="home/instructor_page/4.html">
            </a><div className="instructor-card-body"><a className="text-muted w-100" href="home/instructor_page/4.html">
                <div className="instructor-card-img">
                  <img loading="lazy" src="uploads/user_image/optimized/41146b28f9a50262e27b04d954dfe96e.jpg" />
                </div>
              </a><div className="instructor-card-text"><a className="text-muted w-100" href="home/instructor_page/4.html">
                  <h3 className="text-center">Kasia Jarco</h3>
                  <p className="ellipsis-line-2">Teaches courses at the post-secondary level.</p>
                </a>
                <div className="icon">
                  <div className="icon-div-2">
                    <a className href="https://www.facebook.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a className href="https://www.twitter.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a className href="https://www.linkedin.com/jane-doe" target="_blank">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6" data-wow-duration={1000} data-wow-delay={600}>
            <a className="text-muted w-100" href="home/instructor_page/1.html">
            </a><div className="instructor-card-body"><a className="text-muted w-100" href="home/instructor_page/1.html">
                <div className="instructor-card-img">
                  <img loading="lazy" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" />
                </div>
              </a><div className="instructor-card-text"><a className="text-muted w-100" href="home/instructor_page/1.html">
                  <h3 className="text-center">John Doe</h3>
                  <p className="ellipsis-line-2">Adobe Certified Instructor &amp; Adobe Certified Expert
                  </p>
                </a>
                <div className="icon">
                  <div className="icon-div-2">
                    <a className href="../../www.facebook.com/admin.html" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a className href="http://www.twitter.com/mobins" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a className href="http://www.linkedin.com/admin" target="_blank">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Questions Section Start  ------------*/}
  <section className="faq eFaq top-categories py-5 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={500}>
    <div className="container">
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <h1 className="text-center f-36 mt-0 pt-0">Frequently asked questions</h1>
          <p className="text-center mt-4 mb-24">Have something to know? Check here if you have any questions about
            us.</p>
        </div>
        <div className="col-lg-2" />
      </div>
      <div className="row">
        <div className="col-md-12" data-wow-duration={1000} data-wow-delay={700}>
          <div className="faq-accrodion mb-0">
            <div className="accordion" id="accordionFaq">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqItemHeading0">
                  <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#faqItempanel0" aria-expanded="truetrue" aria-controls="faqItempanel0">
                    What is a Learning Management System (LMS)? </button>
                </h2>
                <div id="faqItempanel0" className="accordion-collapse collapse  show" aria-labelledby="faqItemHeading0" data-bs-parent="#accordionFaq">
                  <div className="accordion-body">
                    <p>A Learning Management System is a software application or platform designed
                      to manage and deliver online educational courses, training programs, and
                      learning content. It provides a centralized system for instructors to
                      create, organize, track, and assess learning materials and activities.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqItemHeading2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqItempanel2" aria-expanded="falsetrue" aria-controls="faqItempanel2">
                    What are the key features of an LMS? </button>
                </h2>
                <div id="faqItempanel2" className="accordion-collapse collapse " aria-labelledby="faqItemHeading2" data-bs-parent="#accordionFaq">
                  <div className="accordion-body">
                    <p>Common features of an LMS include course management, content creation and
                      delivery, student enrollment and tracking, assessment and grading tools,
                      communication and collaboration tools, reporting and analytics, and
                      integration with other systems or tools.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqItemHeading3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqItempanel3" aria-expanded="falsetrue" aria-controls="faqItempanel3">
                    How can an LMS benefit educational institutions and organizations? </button>
                </h2>
                <div id="faqItempanel3" className="accordion-collapse collapse " aria-labelledby="faqItemHeading3" data-bs-parent="#accordionFaq">
                  <div className="accordion-body">
                    <p>An LMS offers several benefits, such as:<br />
                      <br />
                      Centralized access to learning materials and resources.<br />
                      Efficient administration and management of courses and learners.<br />
                      Flexibility and scalability in delivering online education or
                      training.<br />
                      Tracking and reporting on learner progress and performance.<br />
                      Improved communication and collaboration among instructors and
                      learners.<br />
                      Cost savings by reducing the need for physical infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqItemHeading4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqItempanel4" aria-expanded="falsetrue" aria-controls="faqItempanel4">
                    Is an LMS suitable for both academic and corporate settings? </button>
                </h2>
                <div id="faqItempanel4" className="accordion-collapse collapse " aria-labelledby="faqItemHeading4" data-bs-parent="#accordionFaq">
                  <div className="accordion-body">
                    <p>Yes, an LMS can be used in both academic and corporate environments. In
                      academic settings, it facilitates online learning, course management, and
                      assessment for schools, colleges, and universities. In corporate settings,
                      it supports employee training, onboarding programs, skills development, and
                      compliance training.</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="home/faq.html" className="btn btn-primary mt-5">See more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Questions Section End  ------------*/}
  {/*-------  Motivetional Speech Start --------------*/}
  <section className="expert-instructor top-categories py-5 ">
    <div className="container">
      <div className="row">
        <div className="col-lg-3" />
        <div className="col-lg-6 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={500}>
          <h1 className="text-center f-36 mt-0 pt-0">Think more clearly</h1>
          <p className="text-center mt-4 mb-24">Gather your thoughts, and make your decisions clearly</p>
        </div>
        <div className="col-lg-3" />
      </div>
      <ul className="speech-items">
        <li className="e_border">
          <div className="Espeech-item">
            <div className="row  wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={700}>
              <div className="col-md-1 col-2">
                <div className="speech-item-content Nspeech">
                  <p className="no">1</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12  order-2 order-md-1">
                <div className="speech-item-content Nspeech2">
                  <div className="inner">
                    <h4 className="title">
                      Unleashing Your Inner Champion </h4>
                    <p className="info">
                      Embrace your untapped potential, push your limits, and unlock the champion
                      within you. This motivational title encourages you to tap into your inner
                      strength, overcome obstacles, and strive for excellence in all areas of your
                      life. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-10 order-1 order-md-1">
                <div className="speech-item-img">
                  <img loading="lazy" src="uploads/system/motivations/97pz6yQ1iqmjrtGPf83X.png" alt />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="e_border">
          <div className="Espeech-item">
            <div className="row  wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={700}>
              <div className="col-md-1 col-2">
                <div className="speech-item-content Nspeech">
                  <p className="no">2</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12  order-2 order-md-1">
                <div className="speech-item-content Nspeech2">
                  <div className="inner">
                    <h4 className="title">
                      Embracing the Journey of Growth </h4>
                    <p className="info">
                      Life is a constant journey of growth and self-improvement. This motivational
                      title reminds you to embrace challenges, learn from failures, and celebrate
                      successes along the way. Embrace the journey of personal and professional
                      development. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-10 order-1 order-md-1">
                <div className="speech-item-img">
                  <img loading="lazy" src="uploads/system/motivations/0IOAkZot1D28MpcGdYBQ.png" alt />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="e_border">
          <div className="Espeech-item">
            <div className="row  wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={700}>
              <div className="col-md-1 col-2">
                <div className="speech-item-content Nspeech">
                  <p className="no">3</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12  order-2 order-md-1">
                <div className="speech-item-content Nspeech2">
                  <div className="inner">
                    <h4 className="title">
                      Igniting the Spark of Possibility </h4>
                    <p className="info">
                      Within each of us lies a spark of possibility waiting to be ignited. This
                      motivational title inspires you to dream big, believe in yourself, and
                      pursue your passions with unwavering determination. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-10 order-1 order-md-1">
                <div className="speech-item-img">
                  <img loading="lazy" src="uploads/system/motivations/vdnBeoplXfA75RS3Ks2H.png" alt />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/*-------  Motivetional Speech end --------------*/}
  {/*----------- Blog Section Start ----------*/}
  <section className="courses blog py-5 wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={500}>
    <div className="container">
      <h1 className="text-center f-36 pt-0"><span>Visit our latest blogs</span></h1>
      <p className="text-center">Visit our valuable articles to get more information.
      </p><div className="courses-card">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={700}>
            <a href="blog/details/ai-based-learning-is-the-future-of-corporate-training/4.html" className="courses-card-body">
              <div className="courses-card-image">
                <div className="courses-card-image">
                  <img loading="lazy" src="uploads/blog/thumbnail/cd729a9e1214bcc51e7eb6b3f2c07492.png" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Education</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5>AI-Based learning is the future of Corporate Training</h5>
                <p className="ellipsis-line-2">The corporate world is slowly stepping into the dimension of
                  Artificial Intelligence. This technolog...</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <img loading="lazy" className="rounded-circle" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" />
                      <h5>John Doe</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p>Wed, 22 Dec 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={700}>
            <a href="blog/details/balance-your-priorities-in-life-and-enjoy-a-beautiful-life/3.html" className="courses-card-body">
              <div className="courses-card-image">
                <div className="courses-card-image">
                  <img loading="lazy" src="uploads/blog/thumbnail/f987ff9e08dc0a20fa73e9f4fd6b04e7.png" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Lifestyle</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5>Balance your priorities in life and enjoy a beautiful life</h5>
                <p className="ellipsis-line-2">Living a productive and meaningful life is a balancing act.
                  With the pressures of today’s demanding ...</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <img loading="lazy" className="rounded-circle" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" />
                      <h5>John Doe</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p>Wed, 22 Dec 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 wow  animate__animated animate__fadeIn" data-wow-duration={1000} data-wow-delay={700}>
            <a href="blog/details/parent-power-will-we-choose-pitchforks-or-partnerships/2.html" className="courses-card-body">
              <div className="courses-card-image">
                <div className="courses-card-image">
                  <img loading="lazy" src="uploads/blog/thumbnail/2e29eece1cf79087ddc529c3fd2e229e.png" />
                </div>
                <div className="courses-card-image-text">
                  <h3>Education</h3>
                </div>
              </div>
              <div className="courses-text">
                <h5>Parent Power: Will We Choose Pitchforks or Partnerships?</h5>
                <p className="ellipsis-line-2">After two tumultuous years of intermittent school closures,
                  parents and caregivers are claiming thei...</p>
                <div className="courses-price-border">
                  <div className="courses-price">
                    <div className="courses-price-left">
                      <img loading="lazy" className="rounded-circle" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" />
                      <h5>John Doe</h5>
                    </div>
                    <div className="courses-price-right ">
                      <p>Wed, 22 Dec 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*----------- Become Students Section start -------*/}
  <section className="student py-5 ">
    <div className="container">
      <div className="row eStudent">
        <div className="col-lg-6   wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={650}>
          <div className="student-body-1">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="student-body-text">
                  <h1>Join now to start learning</h1>
                  <p>Learn from our quality instructors! </p>
                  <a href="sign_up.html">Get started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  wow  animate__animated animate__fadeInUp opacityOnUp" data-wow-duration={1000} data-wow-delay={700}>
          <div className="student-body-2">
            <div className="row">
              <div className="col-lg-8  col-md-8 col-sm-12">
                <div className="student-body-text">
                  <h1>Become a new instructor</h1>
                  <p>Teach thousands of students and earn money! </p>
                  <a href="sign_up.html?instructor=yes">Join now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*----------- Become Students Section End -------*/}
  <div className="py-4 w-100" />
  {/*------- footer Section Start-------------*/}
  
  {/*------- footer Section End-------------*/}
  {/* PAYMENT MODAL */}
  {/* Modal */}
  {/* SHOW TOASTR NOTIFIVATION */}
  {/* (Ajax Modal)*/}
  <div className="modal fade" id="modal_ajax">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="title text-white" />
          <button type="button" className="btn btn-secondary ms-auto py-0 px-2" data-bs-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body" style={{overflow: 'auto'}}>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default text-white" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal" id="lesson_preview" tabIndex={-1} aria-labelledby="previewModalLabel" aria-hidden="true" data-bs-backdrop="static" data-keyboard="false">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="title" />
          <button type="button" className="btn btn-secondary ms-auto py-0 px-2" data-bs-dismiss="modal" aria-hidden="true" onclick="player.pause();">×</button>
        </div>
        <div className="modal-body" style={{overflow: 'auto'}}>
        </div>
      </div>
    </div>
  </div>
  {/* (Normal Modal)*/}
  <div className="modal fade" id="modal-4">
    <div className="modal-dialog">
      <div className="modal-content" style={{marginTop: 100}}>
        <div className="modal-header">
          <h5 className="modal-title text-center">Are you sure ?</h5>
          <button type="button" className="btn btn-outline-secondary px-1 py-0" data-bs-dismiss="modal" aria-hidden="true"><i className="fas fa-times-circle" /></button>
        </div>
        <div className="modal-footer" style={{margin: 0, borderTop: 0, textAlign: 'center'}}>
          <a href="#" className="btn btn-danger btn-yes" id="delete_link">Yes</a>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>




  <Footer />
 
</div>

    
  )
}
