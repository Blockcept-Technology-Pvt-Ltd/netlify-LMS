
import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
export default function tutors() {
  return (
    <div>
       
      <div>
 
  {/*-------- Header Section start  --------*/}
  <Header />
  {/*-------- Header Section End  --------*/}
  <link rel="stylesheet" type="text/css" href="assets/frontend/eu-cookie/purecookie.css" async />
  <div className="cookieConsentContainer" id="cookieConsentContainer" style={{opacity: '.9', display: 'none'}}>
    {/* <div class="cookieTitle">
    <a>Cookies.</a>
  </div> */}
    <div className="cookieDesc">
      <p>
        This website uses cookies to personalize content and analyse traffic in order to offer you a better experience.
        <a className="link-cookie-policy" href="home/cookie_policy.html">Cookie policy</a>
      </p>
    </div>
    <div className="cookieButton">
      <a onclick="cookieAccept();">Accept</a>
    </div>
  </div>
  {/* Add the jQuery and jQuery UI libraries */}
  <link rel="stylesheet" href="../../code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
  {/*-------- Bread Crumb Area Start --------*/}
  <section>
    <div className="bread-crumb">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/home">
                    <img loading="lazy" className="brd-home mb-1" src="assets/frontend/default-new/image/c-bread-crumb-home.png" />
                    <span>Home</span>
                  </a>
                </li>
                <li><i className="fa-solid fa-chevron-right" /></li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span>List of tuitions</span>
                </li>
              </ol>
            </nav>
            <h1>List of tuitions</h1>
          </div>
          <div className="col-3 ms-auto d-none d-sm-inline-block">
            <div className="book-img">
              <img loading="lazy" src="assets/frontend/default-new/image/brd-book.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Bread Crumb Area End --------*/}
  <style dangerouslySetInnerHTML={{__html: "\n    .ui-slider-horizontal .ui-slider-range {\n      height: 25%;\n      background: #754ffe;\n      top: 8px;\n    }\n    .ui-slider-horizontal .ui-slider-handle {\n      top: 4px;\n    }\n    .ui-slider .ui-slider-handle {\n      touch-action: none;\n      border-radius: 50%;\n      cursor: pointer;\n      width: 15px;\n      height: 15px;\n      cursor: default;\n    }\n    .ui-state-hover,\n    .ui-widget-content .ui-state-hover,\n    .ui-widget-header .ui-state-hover,\n    .ui-state-focus,\n    .ui-widget-content .ui-state-focus,\n    .ui-widget-header .ui-state-focus,\n    .ui-button:hover,\n    .ui-button:focus {\n      border: 1px solid #c5c5c5;\n      background: #f6f6f6;\n    }\n    .ui-widget.ui-widget-content {\n      border: none !important;\n    }\n    #price-range-slider {\n      position: relative;\n    }\n    #price-range-slider:after {\n      position: absolute;\n      content: \"\";\n      top: 6px;\n      left: 0;\n      width: 100%;\n      height: 33%;\n      background: #e9ecef;\n      border-radius: 5px;\n    }\n    .s_Sidebar_checkbox_one input {\n      border: none;\n    }\n    .ui-slider-handle:focus {\n      border-color: #754ffe !important;\n      outline: none;\n    }\n    .slider-control {\n      margin-top: 5px;\n      margin-bottom: 15px;\n    }\n    .slider-control input:focus {\n      outline: none;\n    }\n    .slider-control input {\n      width: 50px;\n      height: 100%;\n      color: #676C7D;\n      text-align: center;\n      border: none;\n      outline: none;\n    }\n    .separator {\n      font-size: 20px;\n      color: #676C7D;\n    }\n    .s_Sidebar_checkbox_one .form-check-input {\n      border: 1px solid rgba(0, 0, 0, .25);\n    }\n  " }} />
  {/* Start Tutor list */}
  <section className="pt-50 pb-120">
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4">
          <div className="s_Sidebar_one">
            <div className="title">
              <h4>Filters</h4>
              <div className="icon"><img loading="lazy" src="assets/frontend/default-new/image/icon/filter.svg" alt />
              </div>
            </div>
            <div className="content">
              <form id="filter_data_search" action="https://demo.creativeitem.com/academy/tutor/filter" method="get">
                <div className="s_search mb-20">
                  <input type="search" className="form-control" name="searched_word" placeholder="Search" defaultValue />
                  <span><img loading="lazy" src="assets/frontend/default-new/image/icon/s_search.svg" alt /></span>
                </div>
              </form>
              <form id="filter_data" action="https://demo.creativeitem.com/academy/tutor/filter" method="get">
                <input type="hidden" className="form-control" name="searched_word" placeholder="Search" defaultValue />
                <div className="pb-30">
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Tuition type</h4>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="online" name="searched_tution_class_type[]" className="form-check-input" type="checkbox" onchange="document.getElementById('filter_data').submit()" defaultValue={1} />
                    <label className="form-check-label" htmlFor="online">Online</label>
                  </div>
                  <div className="s_Sidebar_checkbox_one">
                    <input id="in_Person" name="searched_tution_class_type[]" className="form-check-input" type="checkbox" onchange="document.getElementById('filter_data').submit()" defaultValue={2} />
                    <label className="form-check-label" htmlFor="in_Person">In perosn</label>
                  </div>
                </div>
                <div className="pb-30">
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Main category</h4>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="main_cat_1" className="form-check-input" defaultValue={1} name="searched_main_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" />
                    <label className="form-check-label" htmlFor="main_cat_1">Finance and accounting</label>
                  </div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="main_cat_6" className="form-check-input" defaultValue={6} name="searched_main_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" />
                    <label className="form-check-label" htmlFor="main_cat_6">Graphic design</label>
                  </div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="main_cat_12" className="form-check-input" defaultValue={12} name="searched_main_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" />
                    <label className="form-check-label" htmlFor="main_cat_12">Business</label>
                  </div>
                </div>
                <div className="pb-30">
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Sub category</h4>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_2" className="form-check-input" defaultValue={2} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_2">
                      <label className="form-check-label" htmlFor="sub_cat_2">Accounting</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_4" className="form-check-input" defaultValue={4} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_4">
                      <label className="form-check-label" htmlFor="sub_cat_4">Bookkeeping</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_5" className="form-check-input" defaultValue={5} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_5">
                      <label className="form-check-label" htmlFor="sub_cat_5">Global economics</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_7" className="form-check-input" defaultValue={7} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_7">
                      <label className="form-check-label" htmlFor="sub_cat_7">Photoshop</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_8" className="form-check-input" defaultValue={8} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_8">
                      <label className="form-check-label" htmlFor="sub_cat_8">Adobe illustrator</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_9" className="form-check-input" defaultValue={9} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_9">
                      <label className="form-check-label" htmlFor="sub_cat_9">Drawing</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_13" className="form-check-input" defaultValue={13} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_13">
                      <label className="form-check-label" htmlFor="sub_cat_13">Communication skills</label>
                    </label></div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="sub_cat_14" className="form-check-input" defaultValue={14} name="searched_sub_category[]" onchange="document.getElementById('filter_data').submit()" type="checkbox" /> <label htmlFor="sub_cat_14">
                      <label className="form-check-label" htmlFor="sub_cat_14">Leadership</label>
                    </label></div>
                </div>
                <div>
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Price range</h4>
                  <div className="pb-30" id="price-range-slider" />
                  <div className="slider-control d-flex align-items-center">
                    <span>Price: </span>
                    <div className="input-field d-flex align-items-center">
                      <input type="text" className name="price_min" defaultValue={1} id="price-range1" readOnly />
                      <div className="separator">-</div>
                      <input type="text" className name="price_max" defaultValue={59} id="price-range2" readOnly />
                    </div>
                  </div>
                </div>
                <div className="pb-30">
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Tuition type</h4>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="hourly" className="form-check-input" name="searched_price_type[]" type="checkbox" onchange="document.getElementById('filter_data').submit()" defaultValue="hourly" />
                    <label className="form-check-label" htmlFor="hourly">Hourly</label>
                  </div>
                  <div className="s_Sidebar_checkbox_one">
                    <input id="fixed" className="form-check-input" name="searched_price_type[]" type="checkbox" onchange="document.getElementById('filter_data').submit()" defaultValue="fixed" />
                    <label className="form-check-label" htmlFor="fixed">Fixed</label>
                  </div>
                </div>
                <div className="pb-30">
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Tutors</h4>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="tutor_1" className="form-check-input" name="searched_tutors[]" onchange="document.getElementById('filter_data').submit()" defaultValue={1} type="checkbox" />
                    <label className="form-check-label" htmlFor="tutor_1">John doe</label>
                  </div>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="tutor_6" className="form-check-input" name="searched_tutors[]" onchange="document.getElementById('filter_data').submit()" defaultValue={6} type="checkbox" />
                    <label className="form-check-label" htmlFor="tutor_6">Mathew anderson</label>
                  </div>
                </div>
                <div className>
                  <h4 className="mb-20 s_Sidebar_title_one s_bar">Tution availability</h4>
                  <div className="s_Sidebar_checkbox_one pb-12">
                    <input id="single_time" className="form-check-input" name="searched_duration[]" onchange="document.getElementById('filter_data').submit()" defaultValue={1} type="checkbox" />
                    <label className="form-check-label" htmlFor="single_time">Single time</label>
                  </div>
                  <div className="s_Sidebar_checkbox_one">
                    <input id="selected_days" className="form-check-input" name="searched_duration[]" onchange="document.getElementById('filter_data').submit()" defaultValue={0} type="checkbox" />
                    <label className="form-check-label" htmlFor="selected_days">Selected days </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Course list */}
        <div className="col-lg-9 col-md-8">
          <div className="s_course_item_one mb-24">
            <div className="img"><img loading="lazy" className="rounded" height="230px" src="uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt /></div>
            <div className="content">
              <div className="title d-flex justify-content-between flex-wrap g-12">
                {/* Left */}
                <div className="left">
                  <p className="sub-title">
                    Admin </p>
                  <div className="name-rating d-flex align-items-center">
                    <h4 className="name">John doe</h4>
                    <div className="rating d-flex align-items-center">
                      <p>0</p>
                      <img loading="lazy" src="assets/frontend/default-new/image/icon/star-solid.svg" alt />
                      <span>(0 Reviews)</span>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <a href="schedules_bookings/1.html" className="schedule-no">Available schedules : 1</a>
              </div>
              <p className="info">Leadership: You Can Speak Like a Leader</p>
              <ul className="s_course_tag_list d-flex flex-wrap g-12">
                <li><a href="#" className="s_course_tag">Business</a></li>
                <li><a href="#" className="s_course_tag">Leadership</a></li>
                <li><a href="#" className="s_course_tag">Online</a></li>
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <p className="price">$49.00</p>
                <p className="type">Hourly</p>
              </div>
            </div>
          </div>
          <div className="s_course_item_one mb-24">
            <div className="img"><img loading="lazy" className="rounded" height="230px" src="uploads/user_image/optimized/4cba25d6c2f7be7968ec1ae9e5c49920.jpg" alt /></div>
            <div className="content">
              <div className="title d-flex justify-content-between flex-wrap g-12">
                {/* Left */}
                <div className="left">
                  <p className="sub-title">
                    Instructor </p>
                  <div className="name-rating d-flex align-items-center">
                    <h4 className="name">Mathew anderson</h4>
                    <div className="rating d-flex align-items-center">
                      <p>0</p>
                      <img loading="lazy" src="assets/frontend/default-new/image/icon/star-solid.svg" alt />
                      <span>(0 Reviews)</span>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <a href="schedules_bookings/6.html" className="schedule-no">Available schedules : 1</a>
              </div>
              <p className="info">The complete communication skills master class for life</p>
              <ul className="s_course_tag_list d-flex flex-wrap g-12">
                <li><a href="#" className="s_course_tag">Business</a></li>
                <li><a href="#" className="s_course_tag">Communication skills</a></li>
                <li><a href="#" className="s_course_tag">Online</a></li>
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <p className="price">$45.00</p>
                <p className="type">Hourly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*------- footer Section Start-------------*/}
 <Footer />
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
  {/* Google analytics */}
  {/* Ended Google analytics */}
  {/* Meta pixel */}
  {/* Ended Meta pixel */}
</div>

    </div>
  )
}
