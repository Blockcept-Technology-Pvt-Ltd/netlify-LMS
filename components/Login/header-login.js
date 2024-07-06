
import Script from 'next/script';


export default function login() {
    
  return (
  
      
  <div>
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
                  <a href="mailto:academy@example.com"><i className="fas fa-envelope" /> academy@example.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="icon right-icon">
              <ul className="nav justify-content-end">
                <a href="#" className="invisible d-none" onclick="actionTo('home/dark_and_light_mode.html')"><i className="fas fa-moon" /></a>
                <li className="nav-item align-items-center d-flex ms-3">
                  <form action="#" method="POST" className="language-control select-box">
                    <select onchange="actionTo(`https://demo.creativeitem.com/academy/home/switch_language/${$(this).val()}`)" className="select-control form-select nice-select">
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
                      <option value="kurdish">Kurdish</option>
                      <option value="portuguese">Portuguese</option>
                      <option value="romanian">Romanian</option>
                      <option value="russian">Russian</option>
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
          <a className="navbar-brand logo pt-0" href="index.html">
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
                      <li><a href="#">Responsive Design</a></li>
                      <li><a href="#">WordPress Theme</a></li>
                      <li><a href="#">Bootstrap</a></li>
                      <li><a href="#">HTML &amp; CSS</a></li>
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
                      <li><a href="#">Adobe Illustrator</a></li>
                      <li><a href="#">Drawing</a></li>
                      <li><a href="#">Logo Design</a></li>
                      <li><a href="#">Digital Art</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="home/courses660b.html?category=user-experience">
                      <span className="icons"><i className="fas fa-male" /></span>
                      <span className="text-cat">User Experience</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">User Experience Design</a>
                      </li>
                      <li><a href="#">Mobile App Design</a></li>
                      <li><a href="#">User Interface</a></li>
                      <li><a href="#">Design Thinking</a></li>
                      <li><a href="#">Figma</a></li>
                      <li><a href="#">Prototyping</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-magic" /></span>
                      <span className="text-cat">Interior Design</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Color Theory</a></li>
                      <li><a href="#">Lighting Design</a></li>
                      <li><a href="#">SketchUp</a></li>
                      <li><a href="#">Home Improvement</a></li>
                      <li><a href="#">3D Lighting</a></li>
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
                      <li><a href="#">Motion Graphics</a></li>
                      <li><a href="#">After Effects</a></li>
                      <li><a href="#">Maya</a></li>
                      <li><a href="#">zBrush</a></li>
                      <li><a href="#">Character Modeling</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">
                      <span className="icons"><i className="fas fa-user-secret" /></span>
                      <span className="text-cat">Fashion</span>
                      <span className="has-sub-category ms-auto"><i className="fa-solid fa-angle-right" /></span>
                    </a>
                    <ul className="sub-category-menu">
                      <li><a href="#">Fashion Design</a></li>
                      <li><a href="#">Sewing</a></li>
                      <li><a href="#">T-shirt Design</a></li>
                      <li><a href="#">Jewelry Design</a></li>
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
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" href="#" id="navbarDropdown3">
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
                <a className="nav-link header-dropdown bg-white text-dark fw-600 text-nowrap" href="#" id="navbarDropdown2">
                  Find a tutor
                </a>
              </li>
            </ul>
            <form className="search-input-form" action="#" method="get">
              <div className="dropdown">
                <button className="btn search-input-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-search search-menu-icon" />
                  <i className="fas fa-times text-18px close-menu-icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-0 border-0">
                  <li>
                    <div className="header-search mt-2 w-100 flex-column" style={{boxShadow: '0px 2px 8px -1px #bbb'}}>
                      {/* <p class="text-muted text-14px text-start w-100 mb-2">Discover which courses are the best for you</p> */}
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
            <div className="right-menubar ms-auto">
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
                      <a href="home/shopping_cart.html" type="submit" className="btn btn-primary text-white">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/login" className="mx-3"> Login</a>
              <a href="/sign_up" className="mx-3 text-capitalize" style={{minWidth: 70}}> Join now</a>
            </div>
          </div>
          {/* Mobile Device Form */}
          <form action="#" method="get" className="inline-form">
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
            <div className="offcanvas-header bg-light">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              <div className="offcanves-btn">
                <a href="/sign_up" className="signUp-btn">Sign up</a>
                <a href="/login" className="logIn-btn">Login</a>
              </div>
            </div>
          </div>
          <div className="offcanvas-body p-0">
            <div className="flex-shrink-0 mt-3">
              <ul className="list-unstyled ps-0">
                <li><a href="home/shopping_cart.html" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500 w-100"><i className="fa-solid fa-cart-shopping me-2" /> Cart <span className="badge bg-danger ms-auto">0</span></a></li>
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
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses91d5.html?category=responsive-design" style={{paddingLeft: 35}}>Responsive Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses885f.html?category=wordpress-theme" style={{paddingLeft: 35}}>WordPress Theme</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses0c91.html?category=bootstrap" style={{paddingLeft: 35}}>Bootstrap</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesb5f1.html?category=html-amp-css" style={{paddingLeft: 35}}>HTML &amp; CSS</a>
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
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses4696.html?category=photoshop" style={{paddingLeft: 35}}>Photoshop</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesd1b3.html?category=adobe-illustrator" style={{paddingLeft: 35}}>Adobe Illustrator</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesf6aa.html?category=drawing" style={{paddingLeft: 35}}>Drawing</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses6e7b.html?category=logo-design" style={{paddingLeft: 35}}>Logo Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses2e21.html?category=digital-art" style={{paddingLeft: 35}}>Digital Art</a>
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
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses5b8a.html?category=user-experience-design" style={{paddingLeft: 35}}>User Experience Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses1c01.html?category=mobile-app-design" style={{paddingLeft: 35}}>Mobile App Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses6896.html?category=user-interface" style={{paddingLeft: 35}}>User Interface</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesd12a.html?category=design-thinking" style={{paddingLeft: 35}}>Design Thinking</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses2c28.html?category=figma" style={{paddingLeft: 35}}>Figma</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesaa5c.html?category=prototyping" style={{paddingLeft: 35}}>Prototyping</a>
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
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses6921.html?category=color-theory" style={{paddingLeft: 35}}>Color Theory</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses340a.html?category=lighting-design" style={{paddingLeft: 35}}>Lighting Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses8f26.html?category=sketchup" style={{paddingLeft: 35}}>SketchUp</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses55aa.html?category=home-improvement" style={{paddingLeft: 35}}>Home Improvement</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesb29e.html?category=3d-lighting" style={{paddingLeft: 35}}>3D Lighting</a>
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
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses43c0.html?category=blender" style={{paddingLeft: 35}}>Blender</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses01b3.html?category=motion-graphics" style={{paddingLeft: 35}}>Motion Graphics</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesb587.html?category=after-effects" style={{paddingLeft: 35}}>After Effects</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesd853.html?category=maya" style={{paddingLeft: 35}}>Maya</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesaa8a.html?category=zbrush" style={{paddingLeft: 35}}>zBrush</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesf09c.html?category=character-modeling" style={{paddingLeft: 35}}>Character Modeling</a>
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
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses80b0.html?category=fashion-design" style={{paddingLeft: 35}}>Fashion Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses21fb.html?category=sewing" style={{paddingLeft: 35}}>Sewing</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/coursesd657.html?category=t-shirt-design" style={{paddingLeft: 35}}>T-shirt Design</a>
                            </li>
                            <li>
                              <a className="text-dark text-14px fw-400 w-100" href="home/courses2cea.html?category=jewelry-design" style={{paddingLeft: 35}}>Jewelry Design</a>
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
                        <a href="home/courses.html" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          <i className="fas fa-list me-2" /> All courses</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="bg-light">
                  <a href="course_bundles.html" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fas fa-cube me-2" /> Course bundles</a>
                </li>
                <li className="bg-light">
                  <a href="addons/bootcamp/bootcamp_list.html" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fab fa-centercode me-2" /> Bootcamp</a>
                </li>
                <li className="bg-light">
                  <a href="addons/team_training/packages.html" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500">
                    <i className="fas fa-users me-2" /> Team training</a>
                </li>
                <li className="bg-light">
                  <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500 collapsed" data-bs-toggle="collapse" data-bs-target="#ebook-category-collapse" aria-expanded="false">
                    <i className="fas fa-file me-2" />
                    Ebook </button>
                  <div className="collapse" id="ebook-category-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-white pt-2">
                      <li>
                        <a href="ebook209b.html?category=kids&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Kids</a>
                      </li>
                      <li>
                        <a href="ebook2dbf.html?category=science-fiction-amp-fantasy&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Science Fiction &amp; Fantasy</a>
                      </li>
                      <li>
                        <a href="ebooke323.html?category=politics&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Politics</a>
                      </li>
                      <li>
                        <a href="ebook9776.html?category=cooking-amp-foods&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Cooking &amp; Foods</a>
                      </li>
                      <li>
                        <a href="ebook2b87.html?category=motivation&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Motivation</a>
                      </li>
                      <li>
                        <a href="ebookdf72.html?category=freelancing-amp-outsourcing&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Freelancing &amp; Outsourcing</a>
                      </li>
                      <li>
                        <a href="ebookb3b4.html?category=programming-language&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Programming Language</a>
                      </li>
                      <li>
                        <a href="ebook78f6.html?category=education&price=all&rating=all" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          Education</a>
                      </li>
                      <li>
                        <a href="ebook.html" className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-15px fw-400 py-2 w-100">
                          <i className="fas fa-list me-2" /> All ebooks</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="bg-light"><a className="btn btn-toggle-list d-inline-flex align-items-center rounded border-0 text-dark text-16px fw-500" href="tutors.html"><i className="fas fa-chalkboard-teacher me-2" />Find a tutor</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
  {/*-------- Header Section End  --------*/}

 

  <Script src="assets/frontend/default-new/js/bootstrap.bundle.min.js" />
    <Script src="assets/frontend/default-new/js/berli.js" />
   
    <Script src="assets/frontend/default-new/js/jquery.meanmenu.min.js" />
    <Script src="assets/frontend/default-new/js/jquery.nice-select.min.js" />
    <Script src="assets/frontend/default-new/js/jquery.webui-popover.min.js" />
    <Script src="assets/frontend/default-new/js/owl.carousel.min.js" />
    <Script src="assets/frontend/default-new/js/Script-2.js" />
    <Script src="assets/frontend/default-new/js/slick.min.js" />
    <Script src="assets/frontend/default-new/js/venobox.min.js" />
    <Script src="assets/frontend/default-new/js/wow.min.js" />
    <Script src="assets/frontend/default-new/js/Script.js" />
    <Script src="assets/frontend/default-new/summernote-0.8.20-dist/summernote-lite.min.js" />
    <Script src="assets/global/toastr/toastr.min.js" />
    <Script src="assets/global/jquery-form/jquery.form.min.js" />
    <Script src="assets/global/tagify/jquery.tagify.js" />

  

    </div>
  )
}

