import React from 'react'
import { useRouter } from 'next/router';
import Header from "../Header/header"
import Footer from "../Footer/footer"

export default function main() {
    const router = useRouter();

    const info= () => {
        router.push('info'); // Programmatic navigation
      };
  return (

    <div>
        <Header />
       <div>
     
  
  {/*-------- Header Section End  --------*/}
 
  
  
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
                    <img loading="lazy" className="brd-home mb-1" src="../../assets/frontend/default-new/image/c-bread-crumb-home.png" />
                    <span>Home</span>
                  </a>
                </li>
                <li><i className="fa-solid fa-chevron-right" /></li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span>Course bundle</span>
                </li>
              </ol>
            </nav>
            <h1>Course bundle</h1>
          </div>
          <div className="col-3 ms-auto d-none d-sm-inline-block">
            <div className="book-img">
              <img loading="lazy" src="../../assets/frontend/default-new/image/brd-book.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Bread Crumb Area End --------*/}
  <section className="grid-view courses-list-view m-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-4 col-12">
          <link rel="stylesheet" href="../../assets/frontend/default-new/css/bootcamp_style.css" />
          <form action method="get" id="bootcamp_filter_form">
            <div className="course-all-category m-0">
              <div className="course-category">
                <h3>Bootcamps</h3>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="category" defaultValue="all" id="all_bootcamps" defaultChecked />
                  <label className="form-check-label" htmlFor="all_bootcamps">
                    <div className="category-heading">
                      <span className="text-13px">All bootcamps</span>
                    </div>
                    <span>(5)
                    </span>
                  </label>
                </div>
                <div className="webdesign webdesign-category">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" defaultValue="software-engineering" name="category" id="bootcamp-1" />
                    <label className="form-check-label" htmlFor="bootcamp-1">
                      <div className="category-heading">
                        <span className="text-13px">Software Engineering</span>
                      </div>
                      <span>(1)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" defaultValue="web-development" name="category" id="bootcamp-2" />
                    <label className="form-check-label" htmlFor="bootcamp-2">
                      <div className="category-heading">
                        <span className="text-13px">Web Development</span>
                      </div>
                      <span>(1)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" defaultValue="data-science-and-analytics" name="category" id="bootcamp-3" />
                    <label className="form-check-label" htmlFor="bootcamp-3">
                      <div className="category-heading">
                        <span className="text-13px">Data Science and Analytics</span>
                      </div>
                      <span>(1)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" defaultValue="information-security" name="category" id="bootcamp-4" />
                    <label className="form-check-label" htmlFor="bootcamp-4">
                      <div className="category-heading">
                        <span className="text-13px">Information Security</span>
                      </div>
                      <span>(1)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" defaultValue="ux/ui-design-bootcamp" name="category" id="bootcamp-5" />
                    <label className="form-check-label" htmlFor="bootcamp-5">
                      <div className="category-heading">
                        <span className="text-13px">UX/UI Design Bootcamp</span>
                      </div>
                      <span>(1)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-8">
          <div className="search-bootcamp mb-4">
            <form action method="get" className="d-flex gap-3 align-items-center">
              <div className="form-element flex-grow-1">
                <input type="hidden" name="category" defaultValue="all" />
                <input type="text" className="form-control" name="search" defaultValue />
              </div>
              <div className="form-element">
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
          <div className="bootcamps-card">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <div className="bootcamp-card">
                  <div className="live-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                      <ellipse cx="14.2485" cy="13.9239" rx="13.5171" ry="13.4874" fill="url(#paint0_radial_1_1754)" fillOpacity="0.51" />
                      <ellipse cx="14.2482" cy="13.9231" rx="9.15364" ry="9.1335" fill="white" fillOpacity="0.88" />
                      <path d="M26.6211 13.9235C26.6211 20.7411 21.082 26.2688 14.248 26.2688C7.414 26.2688 1.87489 20.7411 1.87489 13.9235C1.87489 7.10584 7.414 1.57812 14.248 1.57812C21.082 1.57812 26.6211 7.10584 26.6211 13.9235Z" stroke="white" strokeWidth="0.5" />
                      <ellipse cx="14.2487" cy="13.9258" rx="4.00986" ry="4.00104" fill="#F81C43" />
                      <defs>
                        <radialGradient id="paint0_radial_1_1754" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(14.2485 13.9239) rotate(90) scale(13.4874 13.5171)">
                          <stop offset="0.640098" stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <a onClick={info} style={{  textDecoration: 'none', cursor: 'pointer' }} className="bootcamp-thumbnail">
                    <img src="../../uploads/bootcamp/bootcamp_thumbnail/fb6506243d24688d383aa810be15fffd.jpg" />
                  </a>
                  <div className="bootcamp-details">
                    <a onClick={info} style={{  textDecoration: 'none', cursor: 'pointer' }} className="ellipsis-line-2 bootcamp-title">Coding Dojo</a>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="live-classes">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                            <g clipPath="url(#clip0_1_1752)">
                              <path d="M4.04541 7.44334C5.14841 7.44334 6.04541 6.54831 6.04541 5.44774C6.04541 4.34717 5.14841 3.45214 4.04541 3.45214C2.94241 3.45214 2.04541 4.34717 2.04541 5.44774C2.04541 6.54831 2.94241 7.44334 4.04541 7.44334ZM4.04541 4.44994C4.59691 4.44994 5.04541 4.89745 5.04541 5.44774C5.04541 5.99803 4.59691 6.44554 4.04541 6.44554C3.49391 6.44554 3.04541 5.99803 3.04541 5.44774C3.04541 4.89745 3.49391 4.44994 4.04541 4.44994ZM7.54541 11.9334C7.54541 12.2093 7.32141 12.4323 7.04541 12.4323C6.76941 12.4323 6.54541 12.2093 6.54541 11.9334C6.54541 10.558 5.42391 9.43894 4.04541 9.43894C2.66691 9.43894 1.54541 10.558 1.54541 11.9334C1.54541 12.2093 1.32141 12.4323 1.04541 12.4323C0.76941 12.4323 0.54541 12.2093 0.54541 11.9334C0.54541 10.0082 2.11541 8.44114 4.04541 8.44114C5.97541 8.44114 7.54541 10.0082 7.54541 11.9334ZM12.5454 2.95324V6.94444C12.5454 8.31991 11.4239 9.43894 10.0454 9.43894H8.04541C7.76941 9.43894 7.54541 9.21593 7.54541 8.94004V7.94224C7.54541 7.66635 7.76941 7.44334 8.04541 7.44334H9.54541C9.82141 7.44334 10.0454 7.66635 10.0454 7.94224V8.44114C10.8724 8.44114 11.5454 7.76962 11.5454 6.94444V2.95324C11.5454 2.12806 10.8724 1.45654 10.0454 1.45654H5.27791C4.74391 1.45654 4.24591 1.74341 3.97841 2.20539C3.83991 2.44386 3.53441 2.52618 3.29541 2.38699C3.05591 2.24929 2.97441 1.94397 3.11291 1.70549C3.55891 0.936687 4.38841 0.45874 5.27841 0.45874H10.0459C11.4244 0.45874 12.5454 1.57777 12.5454 2.95324Z" fill="#754FFE" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1752">
                                <rect width={12} height="11.9736" fill="white" transform="translate(0.54541 0.45874)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          5 Live class </span>
                      </div>
                      <div className="bootcamp-schedule">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.02429 11.7303C9.79711 11.7303 12.0449 9.48741 12.0449 6.72069C12.0449 3.95399 9.79711 1.71113 7.02429 1.71113C4.25149 1.71113 2.00369 3.95399 2.00369 6.72069C2.00369 9.48741 4.25149 11.7303 7.02429 11.7303ZM7.02429 12.9826C10.4903 12.9826 13.3 10.179 13.3 6.72069C13.3 3.26231 10.4903 0.45874 7.02429 0.45874C3.55829 0.45874 0.748535 3.26231 0.748535 6.72069C0.748535 10.179 3.55829 12.9826 7.02429 12.9826Z" fill="#754FFE" />
                            <path d="M7.02455 2.96289C7.37115 2.96289 7.65212 3.24325 7.65212 3.58909V6.46069L9.03725 7.84276C9.28233 8.08731 9.28233 8.48379 9.03725 8.72834C8.79217 8.97288 8.39481 8.97288 8.14972 8.72834L6.58079 7.16285C6.46309 7.04541 6.39697 6.88614 6.39697 6.72006V3.58909C6.39697 3.24325 6.67795 2.96289 7.02455 2.96289Z" fill="#754FFE" />
                          </svg>
                        </span>
                        <span>
                          Dec-31, 1969 </span>
                      </div>
                    </div>
                    <div className="card-price">
                      <h1 className="fw-500 text-secondary"><del>$19</del></h1>
                      <h1 className="fw-500">$19</h1>
                    </div>
                    <div className="card-btn">
                      <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }}>View details</a>
                      <a onClick={info} style={{color: 'black', textDecoration: 'none', cursor: 'pointer' }}>Buy now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <div className="bootcamp-card">
                  <div className="live-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                      <ellipse cx="14.2485" cy="13.9239" rx="13.5171" ry="13.4874" fill="url(#paint0_radial_1_1754)" fillOpacity="0.51" />
                      <ellipse cx="14.2482" cy="13.9231" rx="9.15364" ry="9.1335" fill="white" fillOpacity="0.88" />
                      <path d="M26.6211 13.9235C26.6211 20.7411 21.082 26.2688 14.248 26.2688C7.414 26.2688 1.87489 20.7411 1.87489 13.9235C1.87489 7.10584 7.414 1.57812 14.248 1.57812C21.082 1.57812 26.6211 7.10584 26.6211 13.9235Z" stroke="white" strokeWidth="0.5" />
                      <ellipse cx="14.2487" cy="13.9258" rx="4.00986" ry="4.00104" fill="#F81C43" />
                      <defs>
                        <radialGradient id="paint0_radial_1_1754" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(14.2485 13.9239) rotate(90) scale(13.4874 13.5171)">
                          <stop offset="0.640098" stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="bootcamp-thumbnail">
                    <img src="../../uploads/bootcamp/bootcamp_thumbnail/bbd1e8dae93dc090582eb7a043d6021b.jpg" />
                  </a>
                  <div className="bootcamp-details">
                    <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="ellipsis-line-2 bootcamp-title">CareerFoundry Web Development for
                      Beginners Course</a>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="live-classes">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                            <g clipPath="url(#clip0_1_1752)">
                              <path d="M4.04541 7.44334C5.14841 7.44334 6.04541 6.54831 6.04541 5.44774C6.04541 4.34717 5.14841 3.45214 4.04541 3.45214C2.94241 3.45214 2.04541 4.34717 2.04541 5.44774C2.04541 6.54831 2.94241 7.44334 4.04541 7.44334ZM4.04541 4.44994C4.59691 4.44994 5.04541 4.89745 5.04541 5.44774C5.04541 5.99803 4.59691 6.44554 4.04541 6.44554C3.49391 6.44554 3.04541 5.99803 3.04541 5.44774C3.04541 4.89745 3.49391 4.44994 4.04541 4.44994ZM7.54541 11.9334C7.54541 12.2093 7.32141 12.4323 7.04541 12.4323C6.76941 12.4323 6.54541 12.2093 6.54541 11.9334C6.54541 10.558 5.42391 9.43894 4.04541 9.43894C2.66691 9.43894 1.54541 10.558 1.54541 11.9334C1.54541 12.2093 1.32141 12.4323 1.04541 12.4323C0.76941 12.4323 0.54541 12.2093 0.54541 11.9334C0.54541 10.0082 2.11541 8.44114 4.04541 8.44114C5.97541 8.44114 7.54541 10.0082 7.54541 11.9334ZM12.5454 2.95324V6.94444C12.5454 8.31991 11.4239 9.43894 10.0454 9.43894H8.04541C7.76941 9.43894 7.54541 9.21593 7.54541 8.94004V7.94224C7.54541 7.66635 7.76941 7.44334 8.04541 7.44334H9.54541C9.82141 7.44334 10.0454 7.66635 10.0454 7.94224V8.44114C10.8724 8.44114 11.5454 7.76962 11.5454 6.94444V2.95324C11.5454 2.12806 10.8724 1.45654 10.0454 1.45654H5.27791C4.74391 1.45654 4.24591 1.74341 3.97841 2.20539C3.83991 2.44386 3.53441 2.52618 3.29541 2.38699C3.05591 2.24929 2.97441 1.94397 3.11291 1.70549C3.55891 0.936687 4.38841 0.45874 5.27841 0.45874H10.0459C11.4244 0.45874 12.5454 1.57777 12.5454 2.95324Z" fill="#754FFE" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1752">
                                <rect width={12} height="11.9736" fill="white" transform="translate(0.54541 0.45874)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          5 Live class </span>
                      </div>
                      <div className="bootcamp-schedule">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.02429 11.7303C9.79711 11.7303 12.0449 9.48741 12.0449 6.72069C12.0449 3.95399 9.79711 1.71113 7.02429 1.71113C4.25149 1.71113 2.00369 3.95399 2.00369 6.72069C2.00369 9.48741 4.25149 11.7303 7.02429 11.7303ZM7.02429 12.9826C10.4903 12.9826 13.3 10.179 13.3 6.72069C13.3 3.26231 10.4903 0.45874 7.02429 0.45874C3.55829 0.45874 0.748535 3.26231 0.748535 6.72069C0.748535 10.179 3.55829 12.9826 7.02429 12.9826Z" fill="#754FFE" />
                            <path d="M7.02455 2.96289C7.37115 2.96289 7.65212 3.24325 7.65212 3.58909V6.46069L9.03725 7.84276C9.28233 8.08731 9.28233 8.48379 9.03725 8.72834C8.79217 8.97288 8.39481 8.97288 8.14972 8.72834L6.58079 7.16285C6.46309 7.04541 6.39697 6.88614 6.39697 6.72006V3.58909C6.39697 3.24325 6.67795 2.96289 7.02455 2.96289Z" fill="#754FFE" />
                          </svg>
                        </span>
                        <span>
                          Jan-11, 2024 </span>
                      </div>
                    </div>
                    <div className="card-price">
                      <h1 className="fw-500">$30</h1>
                    </div>
                    <div className="card-btn">
                      <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }}>View details</a>
                      <a onClick={info} style={{color: 'black', textDecoration: 'none', cursor: 'pointer' }}>Buy now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <div className="bootcamp-card">
                  <div className="live-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                      <ellipse cx="14.2485" cy="13.9239" rx="13.5171" ry="13.4874" fill="url(#paint0_radial_1_1754)" fillOpacity="0.51" />
                      <ellipse cx="14.2482" cy="13.9231" rx="9.15364" ry="9.1335" fill="white" fillOpacity="0.88" />
                      <path d="M26.6211 13.9235C26.6211 20.7411 21.082 26.2688 14.248 26.2688C7.414 26.2688 1.87489 20.7411 1.87489 13.9235C1.87489 7.10584 7.414 1.57812 14.248 1.57812C21.082 1.57812 26.6211 7.10584 26.6211 13.9235Z" stroke="white" strokeWidth="0.5" />
                      <ellipse cx="14.2487" cy="13.9258" rx="4.00986" ry="4.00104" fill="#F81C43" />
                      <defs>
                        <radialGradient id="paint0_radial_1_1754" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(14.2485 13.9239) rotate(90) scale(13.4874 13.5171)">
                          <stop offset="0.640098" stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="bootcamp-thumbnail">
                    <img src="../../uploads/bootcamp/bootcamp_thumbnail/a475cb2577ed6e49fbdbd1caa816846f.jpg" />
                  </a>
                  <div className="bootcamp-details">
                    <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="ellipsis-line-2 bootcamp-title">Data Science Bootcamp</a>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="live-classes">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                            <g clipPath="url(#clip0_1_1752)">
                              <path d="M4.04541 7.44334C5.14841 7.44334 6.04541 6.54831 6.04541 5.44774C6.04541 4.34717 5.14841 3.45214 4.04541 3.45214C2.94241 3.45214 2.04541 4.34717 2.04541 5.44774C2.04541 6.54831 2.94241 7.44334 4.04541 7.44334ZM4.04541 4.44994C4.59691 4.44994 5.04541 4.89745 5.04541 5.44774C5.04541 5.99803 4.59691 6.44554 4.04541 6.44554C3.49391 6.44554 3.04541 5.99803 3.04541 5.44774C3.04541 4.89745 3.49391 4.44994 4.04541 4.44994ZM7.54541 11.9334C7.54541 12.2093 7.32141 12.4323 7.04541 12.4323C6.76941 12.4323 6.54541 12.2093 6.54541 11.9334C6.54541 10.558 5.42391 9.43894 4.04541 9.43894C2.66691 9.43894 1.54541 10.558 1.54541 11.9334C1.54541 12.2093 1.32141 12.4323 1.04541 12.4323C0.76941 12.4323 0.54541 12.2093 0.54541 11.9334C0.54541 10.0082 2.11541 8.44114 4.04541 8.44114C5.97541 8.44114 7.54541 10.0082 7.54541 11.9334ZM12.5454 2.95324V6.94444C12.5454 8.31991 11.4239 9.43894 10.0454 9.43894H8.04541C7.76941 9.43894 7.54541 9.21593 7.54541 8.94004V7.94224C7.54541 7.66635 7.76941 7.44334 8.04541 7.44334H9.54541C9.82141 7.44334 10.0454 7.66635 10.0454 7.94224V8.44114C10.8724 8.44114 11.5454 7.76962 11.5454 6.94444V2.95324C11.5454 2.12806 10.8724 1.45654 10.0454 1.45654H5.27791C4.74391 1.45654 4.24591 1.74341 3.97841 2.20539C3.83991 2.44386 3.53441 2.52618 3.29541 2.38699C3.05591 2.24929 2.97441 1.94397 3.11291 1.70549C3.55891 0.936687 4.38841 0.45874 5.27841 0.45874H10.0459C11.4244 0.45874 12.5454 1.57777 12.5454 2.95324Z" fill="#754FFE" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1752">
                                <rect width={12} height="11.9736" fill="white" transform="translate(0.54541 0.45874)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          7 Live class </span>
                      </div>
                      <div className="bootcamp-schedule">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.02429 11.7303C9.79711 11.7303 12.0449 9.48741 12.0449 6.72069C12.0449 3.95399 9.79711 1.71113 7.02429 1.71113C4.25149 1.71113 2.00369 3.95399 2.00369 6.72069C2.00369 9.48741 4.25149 11.7303 7.02429 11.7303ZM7.02429 12.9826C10.4903 12.9826 13.3 10.179 13.3 6.72069C13.3 3.26231 10.4903 0.45874 7.02429 0.45874C3.55829 0.45874 0.748535 3.26231 0.748535 6.72069C0.748535 10.179 3.55829 12.9826 7.02429 12.9826Z" fill="#754FFE" />
                            <path d="M7.02455 2.96289C7.37115 2.96289 7.65212 3.24325 7.65212 3.58909V6.46069L9.03725 7.84276C9.28233 8.08731 9.28233 8.48379 9.03725 8.72834C8.79217 8.97288 8.39481 8.97288 8.14972 8.72834L6.58079 7.16285C6.46309 7.04541 6.39697 6.88614 6.39697 6.72006V3.58909C6.39697 3.24325 6.67795 2.96289 7.02455 2.96289Z" fill="#754FFE" />
                          </svg>
                        </span>
                        <span>
                          Jan-04, 2024 </span>
                      </div>
                    </div>
                    <div className="card-price">
                      <h1 className="fw-500">$42</h1>
                    </div>
                    <div className="card-btn">
                      <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }}>View details</a>
                      <a onClick={info} style={{color: 'black', textDecoration: 'none', cursor: 'pointer' }}>Buy now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <div className="bootcamp-card">
                  <div className="live-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                      <ellipse cx="14.2485" cy="13.9239" rx="13.5171" ry="13.4874" fill="url(#paint0_radial_1_1754)" fillOpacity="0.51" />
                      <ellipse cx="14.2482" cy="13.9231" rx="9.15364" ry="9.1335" fill="white" fillOpacity="0.88" />
                      <path d="M26.6211 13.9235C26.6211 20.7411 21.082 26.2688 14.248 26.2688C7.414 26.2688 1.87489 20.7411 1.87489 13.9235C1.87489 7.10584 7.414 1.57812 14.248 1.57812C21.082 1.57812 26.6211 7.10584 26.6211 13.9235Z" stroke="white" strokeWidth="0.5" />
                      <ellipse cx="14.2487" cy="13.9258" rx="4.00986" ry="4.00104" fill="#F81C43" />
                      <defs>
                        <radialGradient id="paint0_radial_1_1754" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(14.2485 13.9239) rotate(90) scale(13.4874 13.5171)">
                          <stop offset="0.640098" stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="bootcamp-thumbnail">
                    <img src="../../uploads/bootcamp/bootcamp_thumbnail/fd522248828fa7d912a23d5b6b909cab.jpg" />
                  </a>
                  <div className="bootcamp-details">
                    <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="ellipsis-line-2 bootcamp-title">Cybersecurity Bootcamp</a>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="live-classes">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                            <g clipPath="url(#clip0_1_1752)">
                              <path d="M4.04541 7.44334C5.14841 7.44334 6.04541 6.54831 6.04541 5.44774C6.04541 4.34717 5.14841 3.45214 4.04541 3.45214C2.94241 3.45214 2.04541 4.34717 2.04541 5.44774C2.04541 6.54831 2.94241 7.44334 4.04541 7.44334ZM4.04541 4.44994C4.59691 4.44994 5.04541 4.89745 5.04541 5.44774C5.04541 5.99803 4.59691 6.44554 4.04541 6.44554C3.49391 6.44554 3.04541 5.99803 3.04541 5.44774C3.04541 4.89745 3.49391 4.44994 4.04541 4.44994ZM7.54541 11.9334C7.54541 12.2093 7.32141 12.4323 7.04541 12.4323C6.76941 12.4323 6.54541 12.2093 6.54541 11.9334C6.54541 10.558 5.42391 9.43894 4.04541 9.43894C2.66691 9.43894 1.54541 10.558 1.54541 11.9334C1.54541 12.2093 1.32141 12.4323 1.04541 12.4323C0.76941 12.4323 0.54541 12.2093 0.54541 11.9334C0.54541 10.0082 2.11541 8.44114 4.04541 8.44114C5.97541 8.44114 7.54541 10.0082 7.54541 11.9334ZM12.5454 2.95324V6.94444C12.5454 8.31991 11.4239 9.43894 10.0454 9.43894H8.04541C7.76941 9.43894 7.54541 9.21593 7.54541 8.94004V7.94224C7.54541 7.66635 7.76941 7.44334 8.04541 7.44334H9.54541C9.82141 7.44334 10.0454 7.66635 10.0454 7.94224V8.44114C10.8724 8.44114 11.5454 7.76962 11.5454 6.94444V2.95324C11.5454 2.12806 10.8724 1.45654 10.0454 1.45654H5.27791C4.74391 1.45654 4.24591 1.74341 3.97841 2.20539C3.83991 2.44386 3.53441 2.52618 3.29541 2.38699C3.05591 2.24929 2.97441 1.94397 3.11291 1.70549C3.55891 0.936687 4.38841 0.45874 5.27841 0.45874H10.0459C11.4244 0.45874 12.5454 1.57777 12.5454 2.95324Z" fill="#754FFE" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1752">
                                <rect width={12} height="11.9736" fill="white" transform="translate(0.54541 0.45874)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          6 Live class </span>
                      </div>
                      <div className="bootcamp-schedule">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.02429 11.7303C9.79711 11.7303 12.0449 9.48741 12.0449 6.72069C12.0449 3.95399 9.79711 1.71113 7.02429 1.71113C4.25149 1.71113 2.00369 3.95399 2.00369 6.72069C2.00369 9.48741 4.25149 11.7303 7.02429 11.7303ZM7.02429 12.9826C10.4903 12.9826 13.3 10.179 13.3 6.72069C13.3 3.26231 10.4903 0.45874 7.02429 0.45874C3.55829 0.45874 0.748535 3.26231 0.748535 6.72069C0.748535 10.179 3.55829 12.9826 7.02429 12.9826Z" fill="#754FFE" />
                            <path d="M7.02455 2.96289C7.37115 2.96289 7.65212 3.24325 7.65212 3.58909V6.46069L9.03725 7.84276C9.28233 8.08731 9.28233 8.48379 9.03725 8.72834C8.79217 8.97288 8.39481 8.97288 8.14972 8.72834L6.58079 7.16285C6.46309 7.04541 6.39697 6.88614 6.39697 6.72006V3.58909C6.39697 3.24325 6.67795 2.96289 7.02455 2.96289Z" fill="#754FFE" />
                          </svg>
                        </span>
                        <span>
                          Dec-31, 1969 </span>
                      </div>
                    </div>
                    <div className="card-price">
                      <h1 className="fw-500">$34</h1>
                    </div>
                    <div className="card-btn">
                      <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }}>View details</a>
                      <a onClick={info} style={{color: 'black', textDecoration: 'none', cursor: 'pointer' }}>Buy now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <div className="bootcamp-card">
                  <div className="live-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                      <ellipse cx="14.2485" cy="13.9239" rx="13.5171" ry="13.4874" fill="url(#paint0_radial_1_1754)" fillOpacity="0.51" />
                      <ellipse cx="14.2482" cy="13.9231" rx="9.15364" ry="9.1335" fill="white" fillOpacity="0.88" />
                      <path d="M26.6211 13.9235C26.6211 20.7411 21.082 26.2688 14.248 26.2688C7.414 26.2688 1.87489 20.7411 1.87489 13.9235C1.87489 7.10584 7.414 1.57812 14.248 1.57812C21.082 1.57812 26.6211 7.10584 26.6211 13.9235Z" stroke="white" strokeWidth="0.5" />
                      <ellipse cx="14.2487" cy="13.9258" rx="4.00986" ry="4.00104" fill="#F81C43" />
                      <defs>
                        <radialGradient id="paint0_radial_1_1754" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(14.2485 13.9239) rotate(90) scale(13.4874 13.5171)">
                          <stop offset="0.640098" stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="bootcamp-thumbnail">
                    <img src="../../uploads/bootcamp/bootcamp_thumbnail/be138977e236840846d459daaf38cb76.jpg" />
                  </a>
                  <div className="bootcamp-details">
                    <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }} className="ellipsis-line-2 bootcamp-title">UX/UI Design Bootcamp</a>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="live-classes">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                            <g clipPath="url(#clip0_1_1752)">
                              <path d="M4.04541 7.44334C5.14841 7.44334 6.04541 6.54831 6.04541 5.44774C6.04541 4.34717 5.14841 3.45214 4.04541 3.45214C2.94241 3.45214 2.04541 4.34717 2.04541 5.44774C2.04541 6.54831 2.94241 7.44334 4.04541 7.44334ZM4.04541 4.44994C4.59691 4.44994 5.04541 4.89745 5.04541 5.44774C5.04541 5.99803 4.59691 6.44554 4.04541 6.44554C3.49391 6.44554 3.04541 5.99803 3.04541 5.44774C3.04541 4.89745 3.49391 4.44994 4.04541 4.44994ZM7.54541 11.9334C7.54541 12.2093 7.32141 12.4323 7.04541 12.4323C6.76941 12.4323 6.54541 12.2093 6.54541 11.9334C6.54541 10.558 5.42391 9.43894 4.04541 9.43894C2.66691 9.43894 1.54541 10.558 1.54541 11.9334C1.54541 12.2093 1.32141 12.4323 1.04541 12.4323C0.76941 12.4323 0.54541 12.2093 0.54541 11.9334C0.54541 10.0082 2.11541 8.44114 4.04541 8.44114C5.97541 8.44114 7.54541 10.0082 7.54541 11.9334ZM12.5454 2.95324V6.94444C12.5454 8.31991 11.4239 9.43894 10.0454 9.43894H8.04541C7.76941 9.43894 7.54541 9.21593 7.54541 8.94004V7.94224C7.54541 7.66635 7.76941 7.44334 8.04541 7.44334H9.54541C9.82141 7.44334 10.0454 7.66635 10.0454 7.94224V8.44114C10.8724 8.44114 11.5454 7.76962 11.5454 6.94444V2.95324C11.5454 2.12806 10.8724 1.45654 10.0454 1.45654H5.27791C4.74391 1.45654 4.24591 1.74341 3.97841 2.20539C3.83991 2.44386 3.53441 2.52618 3.29541 2.38699C3.05591 2.24929 2.97441 1.94397 3.11291 1.70549C3.55891 0.936687 4.38841 0.45874 5.27841 0.45874H10.0459C11.4244 0.45874 12.5454 1.57777 12.5454 2.95324Z" fill="#754FFE" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1752">
                                <rect width={12} height="11.9736" fill="white" transform="translate(0.54541 0.45874)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          6 Live class </span>
                      </div>
                      <div className="bootcamp-schedule">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.02429 11.7303C9.79711 11.7303 12.0449 9.48741 12.0449 6.72069C12.0449 3.95399 9.79711 1.71113 7.02429 1.71113C4.25149 1.71113 2.00369 3.95399 2.00369 6.72069C2.00369 9.48741 4.25149 11.7303 7.02429 11.7303ZM7.02429 12.9826C10.4903 12.9826 13.3 10.179 13.3 6.72069C13.3 3.26231 10.4903 0.45874 7.02429 0.45874C3.55829 0.45874 0.748535 3.26231 0.748535 6.72069C0.748535 10.179 3.55829 12.9826 7.02429 12.9826Z" fill="#754FFE" />
                            <path d="M7.02455 2.96289C7.37115 2.96289 7.65212 3.24325 7.65212 3.58909V6.46069L9.03725 7.84276C9.28233 8.08731 9.28233 8.48379 9.03725 8.72834C8.79217 8.97288 8.39481 8.97288 8.14972 8.72834L6.58079 7.16285C6.46309 7.04541 6.39697 6.88614 6.39697 6.72006V3.58909C6.39697 3.24325 6.67795 2.96289 7.02455 2.96289Z" fill="#754FFE" />
                          </svg>
                        </span>
                        <span>
                          Jan-02, 2024 </span>
                      </div>
                    </div>
                    <div className="card-price">
                      <h1 className="fw-500">$19</h1>
                    </div>
                    <div className="card-btn">
                      <a onClick={info} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }}>View details</a>
                      <a onClick={info} style={{color: 'black', textDecoration: 'none', cursor: 'pointer' }}>Buy now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagenation-items mb-0 mt-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <style dangerouslySetInnerHTML={{__html: "\n    .data-not-found {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n\n    }\n\n    .card-price {\n      display: flex;\n      gap: 8px;\n      margin-bottom: 12px;\n    }\n\n    .card-price h1 {\n      font-size: 16px;\n      line-height: 25px;\n      font-weight: 500 !important;\n      padding-right: 7px;\n      transition: .5s;\n      color: #1E293B;\n    }\n  " }} />{/*------- footer Section Start-------------*/}
  
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
<Footer />
    </div>
  )
}
