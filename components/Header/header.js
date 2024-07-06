import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";
import $ from 'jquery';
// import styles from "@/styles/Home.module.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from '../../utils/cookie';




export default function Home() {

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



  // const router = useRouter();

  const handleNavigation = () => {
    router.push('/my_courses'); // Programmatic navigation
  };
  const tutors = () => {
    router.push('/tutors'); // Programmatic navigation
  };
  const bundlecourses = () => {
    router.push('/bundlecourses'); // Programmatic navigation
  };
  return (
    <>
  <header>
    {/* Sub Header Start */}
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="icon icon-left">
              <ul className="nav">
                <li className="nav-item px-2">
                  <a href="tel:+143-52-9933631"><i className="fa-solid fa-phone" /> +143-52-9933631</a>
                </li>
                <div className="vartical" />
                <li className="nav-item px-2">
                  <a href="mailto:academy@example.com"><i className="fas fa-envelope" />
                    academy@example.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="icon right-icon">
              <ul className="nav justify-content-end">
                <li className="nav-item align-items-center d-flex ms-3">
                  <form action="#" method="POST" className="language-control select-box">
                    <select onchange="actionTo()" className="select-control form-select nice-select">
                      <option value="arabic">Arabic</option>
                      <option value="bangla">Bangla</option>
                      <option value="bg">Bg</option>
                      <option value="chinese">Chinese</option>
                      <option value="english" selected>English</option>
                      <option value="french">French</option>
                      <option value="georgian">Georgian</option>
                      <option value="german">German</option>
                      <option value="hindi">Hindi</option>
                      <option value="indonesia">Indonesia</option>
                      <option value="italian">Italian</option>
                      <option value="kannada">Kannada</option>
                      <option value="khmer">Khmer</option>
                      <option value="korean">Korean</option>
                      <option value="kurdish">Kurdish</option>
                      <option value="portuguese">Portuguese</option>
                      <option value="romanian">Romanian</option>
                      <option value="russian">Russian</option>
                      <option value="shqip">Shqip</option>
                      <option value="somali">Somali</option>
                      <option value="spanish">Spanish</option>
                      <option value="swedish">Swedish</option>
                      <option value="turkish">Turkish</option>
                      <option value="urdu">Urdu</option>
                      <option value="uzbek">Uzbek</option>
                      <option value="vietnamese">Vietnamese</option>
                    </select>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*-- Sub Header End ----*/}
    <section className="menubar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand logo pt-0" href="/login">
            <img loading="lazy" src="uploads/system/e0d3336caa3bf40ceae5b4efeeedf541.png" alt="Logo" />
          </a>
          {/* Mobile Offcanves  Icon Show */}
          <ul className="menu-offcanves">
            <li>
              <div className="search-item">
                <span className="m-cross-icon"><i className="fa-solid fa-xmark" /></span>
                <span className="m-search-icon"> <i className="fa-solid fa-magnifying-glass" /></span>
              </div>
            </li>
            <li>
              <a href="#" className="btn-bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-sharp fa-solid fa-bars" /></a>
            </li>
          </ul>
          <div className="navbar-collapse" id="navbarSupportedContent">
            {/* Small Device Hide */}
            <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a className="nav-link header-dropdown px-3 text-nowrap" href="#" id="navbarDropdown1">
                  <img loading="lazy" src="assets/frontend/default-new/image/menu.png" alt="Menu" />
                  <span className="ms-2">Courses</span>
                </a>
                <ul className="navbarHover">
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-desktop" /></span>
                      <span className="text-cat">Web Design</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Responsive
                          Design</a></li>
                      <li><a href="#">WordPress
                          Theme</a></li>
                      <li><a href="#">Bootstrap</a></li>
                      <li><a href="#">HTML &amp; CSS</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-pencil-alt" /></span>
                      <span className="text-cat">Graphic Design</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Photoshop</a></li>
                      <li><a href="#">Adobe
                          Illustrator</a></li>
                      <li><a href="#">Drawing</a></li>
                      <li><a href="#">Logo Design</a>
                      </li>
                      <li><a href="#">Digital Art</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-male" /></span>
                      <span className="text-cat">User Experience</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">User
                          Experience Design</a></li>
                      <li><a href="#">Mobile App
                          Design</a></li>
                      <li><a href="#">User
                          Interface</a></li>
                      <li><a href="#">Design
                          Thinking</a></li>
                      <li><a href="#">Figma</a></li>
                      <li><a href="#">Prototyping</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-magic" /></span>
                      <span className="text-cat">Interior Design</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Color Theory</a>
                      </li>
                      <li><a href="#">Lighting
                          Design</a></li>
                      <li><a href="#">SketchUp</a></li>
                      <li><a href="#">Home
                          Improvement</a></li>
                      <li><a href="#">3D Lighting</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-cube" /></span>
                      <span className="text-cat">3D and Animation</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Blender</a></li>
                      <li><a href="#">Motion
                          Graphics</a></li>
                      <li><a href="#">After Effects</a>
                      </li>
                      <li><a href="#">Maya</a></li>
                      <li><a href="#">zBrush</a></li>
                      <li><a href="#">Character
                          Modeling</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-user-secret" /></span>
                      <span className="text-cat">Fashion</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Fashion
                          Design</a></li>
                      <li><a href="#">Sewing</a></li>
                      <li><a href="#">T-shirt
                          Design</a></li>
                      <li><a href="#">Jewelry
                          Design</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fab fa-500px" /></span>
                      <span className="text-cat">Frontend Development</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-list-ul px-2" />
                      All courses
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 ms-2">
              <li className="nav-item">
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" onClick={bundlecourses} style={{  textDecoration: 'none', cursor: 'pointer' }} id="navbarDropdown3">
                  <span className="ms-2">Course bundle</span>
                </a>
              </li>
            </ul>
            {/* <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 ms-2">
              <li className="nav-item">
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" href="addons/bootcamp/bootcamp_list.html" id="navbarDropdown4">
                  <span className="ms-2">Bootcamps</span>
                </a>
              </li>
            </ul> */}
            {/* <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 ms-2">
              <li className="nav-item">
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" href="addons/team_training/packages.html" id="navbarDropdown4">
                  <span className="ms-2">Team training</span>
                </a>
              </li>
            </ul> */}
            {/* <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 ms-2">
              <li className="nav-item">
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" href="#" id="navbarDropdown1">
                  <span className="ms-2">Ebook</span>
                  <i className="fas fa-angle-down ms-1" />
                </a>
                <ul className="navbarHover">
                  <li className="dropdown-submenu">
                    <a href="ebook209b.html?category=kids&price=all&rating=all">
                      <span className="text-cat">Kids</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebook2dbf.html?category=science-fiction-amp-fantasy&price=all&rating=all">
                      <span className="text-cat">Science Fiction &amp; Fantasy</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebooke323.html?category=politics&price=all&rating=all">
                      <span className="text-cat">Politics</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebook9776.html?category=cooking-amp-foods&price=all&rating=all">
                      <span className="text-cat">Cooking &amp; Foods</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebook2b87.html?category=motivation&price=all&rating=all">
                      <span className="text-cat">Motivation</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebookdf72.html?category=freelancing-amp-outsourcing&price=all&rating=all">
                      <span className="text-cat">Freelancing &amp; Outsourcing</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebookb3b4.html?category=programming-language&price=all&rating=all">
                      <span className="text-cat">Programming Language</span>
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="ebook78f6.html?category=education&price=all&rating=all">
                      <span className="text-cat">Education</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}



            <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 ms-2">
              <li className="nav-item">
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" onClick={tutors} id="navbarDropdown2" style={{  textDecoration: 'none', cursor: 'pointer' }}>
                  Find a tutor
                </a>
              </li>
            </ul>
            <ul className="navbar-nav main-nav-wrap mb-2 mb-lg-0 ms-2">
            <li className="nav-item"><a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" onClick={handleNavigation} style={{  textDecoration: 'none', cursor: 'pointer' }}>My
                  course</a></li>
            
            </ul>


            <div className="right-menubar ms-auto">
              



                  <form className="search-input-form" action="home/courses.html" method="get">
              <div className="dropdown">
                <button className="btn search-input-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-search search-menu-icon" />
                  <i className="fas fa-times text-18px close-menu-icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-0 border-0">
                  <li>
                    <div className="header-search mt-2 w-100 flex-column" style={{boxShadow: '0px 2px 8px -1px #bbb'}}>
                      <p className="text-muted text-14px text-start w-100 mb-2">Discover which courses
                        are the best for you</p>
                      <div className="search-container w-100">
                        <input id="headerSearchBarLg" name="query" type="text" className="search-input-floating " placeholder="Search" defaultValue />
                        <button type="submit" className="header-search-icon border-0 text-dark text-16px d-hidden"><i className="fas fa-search" /></button>
                        <label htmlFor="headerSearchBarLg" className="header-search-icon text-dark text-16px "><i className="fas fa-search" /></label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </form>



              {/* Cart List Area */}
              <div className="wisth_tgl_div">
                <div className="wisth_tgl_2div">
                  <a className="menu_pro_cart_tgl mt-1"><i className="fa-solid fa-cart-shopping" />
                    <p className="menu_number" id="cartItemsCounter">0</p>
                  </a>
                  <div className="menu_pro_wish">
                    <div className="overflow-control" id="cartItems">
                      <div className="path_pos_wish-2">
                        <div className="path_pos_wish">
                          <div className="menu_pro_wish-f-b text-center text-muted pb-4 pt-5 px-4">
                            You have no items in your cart! </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu_pro_btn">
                      <a href="#" type="submit" className="btn btn-primary text-white">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wish List Area */}
              <div className="wisth_tgl_div">
                <div className="wisth_tgl_2div">
                  <a className="menu_wisth_tgl mt-1">
                    <i className="fa-regular fa-heart" />
                  </a>
                  <div className="menu_pro_wish">
                    <div className="overflow-control" id="wishlistItems">
                      <div className="path_pos_wish-2">
                        <div className="path_pos_wish">
                          <div className="menu_pro_wish-f-b text-center text-muted pb-4 pt-5 px-3">
                            You have no items in your wishlist! </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu_pro_btn">
                      <a href="#" className="btn btn-primary text-white">Go to
                        wishlist</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notification Area */}
              <div className="wisth_tgl_div">
                <div className="wisth_tgl_2div" id="headerNotification">
                  <a className="menu_wisth_tgl mt-1">
                    <i className="far fa-bell" />
                    <p className="menu_number">
                      1 </p>
                  </a>
                  <div className="menu_pro_wish" style={{width: 275}}>
                    <div className="w-100 d-flex">
                      <a href="#" onclick="actionTo();" className="text-secondary ms-auto mt-3 me-3">
                        <small>Remove all</small>
                      </a>
                    </div>
                    <div className="overflow-control" id="notifications">
                      <div className="notify-item cursor-pointer d-flex py-2 px-3 unread" style={{width: 275}}>
                        <div className="notify-icon">
                          <i className="fas fa-user-plus" />
                        </div>
                        <div className="ps-2">
                          <p className="notify-details text-13px">
                            Registered successfully <small className="text-muted float-end">39
                              Minutes Ago</small>
                          </p>
                          <div className="text-muted mb-0 user-msg text-13px">
                            <div>You have successfully registered with us at Academy.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu_pro_btn">
                      <a href="#" onclick="actionTo('');" className="btn btn-primary text-white">Mark
                        all as read</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Area */}

              
              <div className="menu_pro_tgl_div">
              {userData ? (
                <div className="menu_pro_tgl-2div">
                   {userPicture && (
                 <a className="menu_pro_tgl profile-dropdown">
                  <Image
                     src={userPicture}
                     alt={`${userData.firstName} ${userData.lastName}'s picture`}
                     width={150} // Set appropriate width
                     height={150} // Set appropriate height
                     className="user-picture" // Optional: Add a CSS class for styling
                   />
                  </a>
                )}
               </div>
              ) : (
        <p>Loading user data...</p>
      )}
                <div className="menu_pro_tgl_bg">

                {userData ? (
                  <div className="path-pos">
                     {userPicture && (
                    <a href="#">
                      <Image
                     src={userPicture}
                     alt={`${userData.firstName} ${userData.lastName}'s picture`}
                     width={150} // Set appropriate width
                     height={150} // Set appropriate height
                     className="user-picture" // Optional: Add a CSS class for styling
                   />
                      {/* <img loading="lazy" src="uploads/user_image/placeholder.png" alt="User Image" /> */}
                      </a>
                     )}
                    <a href="#">
                      <h4>{userData.firstName} {userData.lastName}</h4>
                    </a>
                    <p>{userData.email}</p>
                    <ul>
                      <li className="user-dropdown-menu-item"><a href="#"><i className="fas fa-columns" />Become an instructor</a></li>
                      <li className="user-dropdown-menu-item"><a href="#"><i className="far fa-gem" />My courses</a></li>
                      <li className="user-dropdown-menu-item"><a href="#"><i className="far fa-heart" />My wishlist</a></li>
                      <li className="user-dropdown-menu-item"><a href="#"><i className="fas fa-shopping-cart" />Purchase history</a></li>
                      <li className="user-dropdown-menu-item"><a href="#"><i className="fas fa-user" />User profile</a></li>
                      <li>
                        <a href="/login">
                          <i className="fa-solid fa-arrow-right-from-bracket" />
                          Log out </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p>Loading user data...</p>
                )}
                </div>
              </div>


              

             
            </div>

          </div>
          {/* Mobile Device Form */}
          <form action="home/courses.html" method="get" className="inline-form">
            <div className="mobile-search test">
              <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass" /></button>
              <input defaultValue name="query" className="form-control" type="text" placeholder="Search" />
            </div>
          </form>
        </div>
      </nav> {/* Offcanves Menu  */}
      <div className="mobile-view-offcanves">
        <div className="offcanvas offcanvas-start bg-light" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanves-top">
            <div className="offcanves-profile">
              <a href="#">
                <div className="user-img">
                  <img loading="lazy" src="uploads/user_image/placeholder.png" alt="img" />
                </div>
                {userData ? (
                <div className="user-details">
                  <h4>{userData.firstName} {userData.lastName}</h4>
                  <p>{userData.email}</p>
                </div>
                ) : (
                  <p>Loading user data...</p>
                )}
              </a>
            </div>
          </div>
          <div className="offcanvas-body p-0">
            <div className="flex-shrink-0 mt-3">
              <ul className="list-unstyled ps-0">
                <li><a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500"><i className="fas fa-columns me-2" />Become an instructor</a></li>
                <li><a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500 w-100"><i className="fa-solid fa-cart-shopping me-2" /> Cart <span className="badge bg-danger ms-auto">0</span></a></li>
                <li className="bg-light">
                  <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500 collapsed" data-bs-toggle="collapse" data-bs-target="#category-collapse" aria-expanded="false">
                    <i className="fas fa-book me-2" />
                    Categories </button>
                  <div className="collapse" id="category-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-white pt-2">
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse10" aria-expanded="false">
                          <span className="icons"><i className="fas fa-desktop" /></span>
                          <span className="text-cat">Web Design</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse10">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Responsive</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>WordPress Theme</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Bootstrap</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>HTML &amp; CSS</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse13" aria-expanded="false">
                          <span className="icons"><i className="fas fa-pencil-alt" /></span>
                          <span className="text-cat">Graphic Design</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse13">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Photoshop</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Adobe Illustrator</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Drawing</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Logo Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Digital Art</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse14" aria-expanded="false">
                          <span className="icons"><i className="fas fa-male" /></span>
                          <span className="text-cat">User Experience</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse14">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>User Experience Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Mobile App Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>User Interface</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Design Thinking</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Figma</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Prototyping</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse15" aria-expanded="false">
                          <span className="icons"><i className="fas fa-magic" /></span>
                          <span className="text-cat">Interior Design</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse15">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Color Theory</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Lighting Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>SketchUp</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Home Improvement</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>3D Lighting</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse16" aria-expanded="false">
                          <span className="icons"><i className="fas fa-cube" /></span>
                          <span className="text-cat">3D and Animation</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse16">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Blender</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Motion Graphics</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>After Effects</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Maya</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>zBrush</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Character Modeling</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse27" aria-expanded="false">
                          <span className="icons"><i className="fas fa-user-secret" /></span>
                          <span className="text-cat">Fashion</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse27">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Fashion Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Sewing</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>T-shirt Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="#" style={{paddingLeft: 35}}>Jewelry Design</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 collapsed" data-bs-toggle="collapse" data-bs-target="#subCategory-collapse51" aria-expanded="false">
                          <span className="icons"><i className="fab fa-500px" /></span>
                          <span className="text-cat">Frontend Development</span>
                        </button>
                        <div className="collapse" id="subCategory-collapse51">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          <i className="fas fa-list me-2" /> All courses</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="bg-light">
                  <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fas fa-cube me-2" /> Course bundles</a>
                </li>
                <li className="bg-light">
                  <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fab fa-centercode me-2" /> Bootcamp</a>
                </li>
                <li className="bg-light">
                  <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fas fa-users me-2" /> Team training</a>
                </li>
                <li className="bg-light">
                  <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500 collapsed" data-bs-toggle="collapse" data-bs-target="#ebook-category-collapse" aria-expanded="false">
                    <i className="fas fa-file me-2" />
                    Ebook </button>
                  <div className="collapse" id="ebook-category-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-white pt-2">
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Kids</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Science Fiction &amp; Fantasy</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Politics</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Cooking &amp; Foods</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Motivation</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Freelancing &amp; Outsourcing</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Programming Language</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Education</a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          <i className="fas fa-list me-2" /> All ebooks</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="tutors.html"><i className="fas fa-chalkboard-teacher me-2" />Find a
                    tutor</a></li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="home/my_courses.html"><i className="far fa-gem me-2" />My courses</a></li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="home/my_wishlist"><i className="far fa-heart me-2" />My wishlist</a></li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="home/purchase.html"><i className="fas fa-shopping-cart me-2" />Purchase
                    history</a></li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="home\user_profile.html"><i className="fas fa-user me-2" />User profile</a>
                </li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="addons/become_an_affiliator.html"><i className="fas fa-user-plus me-2" />Become an affiliator</a></li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="addons/customer-support.html"><i className="fas fa-life-ring me-2" />Support</a></li>
                <li className="bg-light">
                  <a href="/login" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fas fa-sign-out-alt me-2" /> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
  


  

   
      
  <Script src="assets/frontend/default-new/js/bootstrap.bundle.min.js" />
    <Script src="assets/frontend/default-new/js/berli.js" />
   
    <Script src="assets/frontend/default-new/js/jquery.meanmenu.min.js" />
    <Script src="assets/frontend/default-new/js/jquery.nice-select.min.js" />
    <Script src="assets/frontend/default-new/js/jquery.webui-popover.min.js" />
    <Script src="assets/frontend/default-new/js/owl.carousel.min.js" />
    {/* <Script src="assets/frontend/default-new/js/Script-2.js" /> */}
    <Script src="assets/frontend/default-new/js/slick.min.js" />
    <Script src="assets/frontend/default-new/js/venobox.min.js" />
    <Script src="assets/frontend/default-new/js/wow.min.js" />
    <Script src="assets/frontend/default-new/js/Script.js" />
    <Script src="assets/frontend/default-new/summernote-0.8.20-dist/summernote-lite.min.js" />
    <Script src="assets/global/toastr/toastr.min.js" />
    <Script src="assets/global/jquery-form/jquery.form.min.js" />
    <Script src="assets/global/tagify/jquery.tagify.js" />
   
    
   

    </>
  );
}
