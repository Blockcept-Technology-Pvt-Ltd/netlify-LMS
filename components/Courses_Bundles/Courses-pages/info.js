import React from 'react'
import Header from "../../Header/header"
import Footer from "../../Footer/footer"
import { useRouter } from 'next/router';
export default function info() {
  const router = useRouter();

    const video= () => {
        router.push('video'); // Programmatic navigation
      };
  return (
    <div>
      <Header />
    

    <div>
  
  
  {/*-------- Header Section End  --------*/}
 
 <div>
    
   
  </div>
 
  {/*-------- Banner Start --------*/}
  <section>
    <div className="bread-crumb courses-details bootcamp_details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="courses-details-1st-text">
              <h1>Coding Dojo</h1>
              <p className="mb-3">Full-time Remote Software Engineering Bootcamp.</p>
              <div className="review">
                <div className="row ">
                  <div className="col-12 course-heading-info mb-3">
                    <div className="info top">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={16} height={16}>
                          <path fill="#fff" d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                          <path fill="#fff" d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                        </svg>
                      </span>
                      <p className="text-15px">0 Enrolled</p>
                    </div>
                    <div className="info top">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={16} height={16}>
                          <path fill="#fff" d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
                          <circle fill="#fff" cx={12} cy={15} r="1.5" />
                          <circle fill="#fff" cx={7} cy={15} r="1.5" />
                          <circle fill="#fff" cx={17} cy={15} r="1.5" />
                        </svg>
                      </span>
                      <p className="text-12px">
                        Start:
                        Dec-31, 1969 </p>
                    </div>
                    <div className="info top">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={16} height={16}>
                          <path fill="#fff" d="M23.808,20.197L15.741,1.557c-.52-1.276-1.979-1.895-3.259-1.371l-.926,.378c-.358,.146-.671,.368-.921,.649-.438-.726-1.234-1.212-2.142-1.212H2.5C1.122,0,0,1.121,0,2.5V21.5c0,1.379,1.122,2.5,2.5,2.5h5.993c1.378,0,2.5-1.121,2.5-2.5V5.689l7.265,16.79c.522,1.286,2.014,1.885,3.259,1.367l.925-.378c1.261-.486,1.906-2.026,1.366-3.271ZM12.505,6.666l3.704-1.51,5.37,12.411-3.704,1.511L12.505,6.666ZM1,6h3.993v12H1V6Zm4.993,0h4v12H5.993V6Zm4-3.5v2.5H5.993V1h2.5c.827,0,1.5,.673,1.5,1.5ZM2.5,1h2.493V5H1V2.5c0-.827,.673-1.5,1.5-1.5ZM1,21.5v-2.5h3.993v4H2.5c-.827,0-1.5-.673-1.5-1.5Zm7.493,1.5h-2.5v-4h4v2.5c0,.827-.673,1.5-1.5,1.5ZM11.934,1.489l.926-.378c.751-.31,1.642,.051,1.959,.832l.993,2.294-3.704,1.51-.997-2.304c-.312-.766,.057-1.643,.823-1.955Zm10.947,20.245c-.155,.369-.445,.656-.816,.808h0l-.925,.378c-.765,.312-1.643-.056-1.959-.829l-.907-2.096,3.704-1.511,.909,2.101c.152,.371,.15,.779-.005,1.149Z" />
                        </svg>
                      </span>
                      <p className="text-12px">
                        Modules:
                        3 </p>
                    </div>
                    <div className="info top">
                      <span>
                        <svg width={16} height={16} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1_1278)">
                            <path d="M4.28076 7.73047C5.38376 7.73047 6.28076 6.83347 6.28076 5.73047C6.28076 4.62747 5.38376 3.73047 4.28076 3.73047C3.17776 3.73047 2.28076 4.62747 2.28076 5.73047C2.28076 6.83347 3.17776 7.73047 4.28076 7.73047ZM4.28076 4.73047C4.83226 4.73047 5.28076 5.17897 5.28076 5.73047C5.28076 6.28197 4.83226 6.73047 4.28076 6.73047C3.72926 6.73047 3.28076 6.28197 3.28076 5.73047C3.28076 5.17897 3.72926 4.73047 4.28076 4.73047ZM7.78076 12.2305C7.78076 12.507 7.55676 12.7305 7.28076 12.7305C7.00476 12.7305 6.78076 12.507 6.78076 12.2305C6.78076 10.852 5.65926 9.73047 4.28076 9.73047C2.90226 9.73047 1.78076 10.852 1.78076 12.2305C1.78076 12.507 1.55676 12.7305 1.28076 12.7305C1.00476 12.7305 0.780762 12.507 0.780762 12.2305C0.780762 10.301 2.35076 8.73047 4.28076 8.73047C6.21076 8.73047 7.78076 10.301 7.78076 12.2305ZM12.7808 3.23047V7.23047C12.7808 8.60897 11.6593 9.73047 10.2808 9.73047H8.28076C8.00476 9.73047 7.78076 9.50697 7.78076 9.23047V8.23047C7.78076 7.95397 8.00476 7.73047 8.28076 7.73047H9.78076C10.0568 7.73047 10.2808 7.95397 10.2808 8.23047V8.73047C11.1078 8.73047 11.7808 8.05747 11.7808 7.23047V3.23047C11.7808 2.40347 11.1078 1.73047 10.2808 1.73047H5.51326C4.97926 1.73047 4.48126 2.01797 4.21376 2.48097C4.07526 2.71997 3.76976 2.80247 3.53076 2.66297C3.29126 2.52497 3.20976 2.21897 3.34826 1.97997C3.79426 1.20947 4.62376 0.730469 5.51376 0.730469H10.2813C11.6598 0.730469 12.7808 1.85197 12.7808 3.23047Z" fill="#fff" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_1278">
                              <rect width={12} height={12} fill="white" transform="translate(0.780762 0.730469)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-12px">
                        Class:
                        5 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Banner Area End --------*/}
  <section className="course-decription bootcamp_description">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 order-2 order-lg-1">
          <div className="course-left-side mb-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link bootcamp-nav-link active" id="course-overview-tab" data-bs-toggle="tab" data-bs-target="#course-overview" type="button" role="tab" aria-controls="course-overview" aria-selected="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height="18.666" viewBox="0 0 14 18.666">
                    <g id="Group_8" data-name="Group 8" transform="translate(14 0) rotate(90)">
                      <path id="Shape" d="M7,14.307l3.7,3.78c1.3,1.326,3.3.227,3.3-1.81V0H0V16.277c0,2.037,2,3.136,3.3,1.81ZM2,2.385V16.277l5-5.11,5,5.11V2.385Z" transform="translate(0 14) rotate(-90)" fill="#1e293b" fillRule="evenodd" />
                    </g>
                  </svg>
                  <span className="ms-2">Overview</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link bootcamp-nav-link" id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false">
                  <svg id="Group_13" data-name="Group 13" xmlns="http://www.w3.org/2000/svg" width={20} height="19.692" viewBox="0 0 20 19.692">
                    <path id="Shape" d="M14,2.5a.5.5,0,0,0-.5-.5H2.5a.5.5,0,0,0-.5.5V16.028a.455.455,0,0,0,.658.407,3,3,0,0,1,2.683,0L7.553,17.54a1,1,0,0,0,.894,0l2.211-1.106a3,3,0,0,1,2.683,0A.455.455,0,0,0,14,16.028Zm2,16.691a.5.5,0,0,1-.724.447l-2.829-1.415a1,1,0,0,0-.894,0L9.342,19.329a3,3,0,0,1-2.683,0L4.447,18.224a1,1,0,0,0-.894,0L.724,19.638A.5.5,0,0,1,0,19.191V0H16Z" transform="translate(2)" fill="#1e293b" fillRule="evenodd" />
                    <g id="Shape-2" data-name="Shape" transform="translate(6 4)">
                      <path id="_5D20F028-8654-4138-BE2C-2596CB0A8C99" data-name="5D20F028-8654-4138-BE2C-2596CB0A8C99" d="M1,0A1,1,0,0,0,1,2H3A1,1,0,0,0,3,0Z" fill="#1e293b" />
                      <path id="CB5AF5FF-CA28-49F3-8207-42C293893700" d="M1,0A1,1,0,1,0,2,1,1,1,0,0,0,1,0Z" transform="translate(6)" fill="#1e293b" />
                      <path id="ECA14E2E-A90F-4909-9E68-1DC1F5104902" d="M0,1A1,1,0,0,1,1,0H3A1,1,0,0,1,3,2H1A1,1,0,0,1,0,1Z" transform="translate(0 4)" fill="#1e293b" />
                      <path id="_841F264B-A82E-487A-AEC1-CFCDCADF7975" data-name="841F264B-A82E-487A-AEC1-CFCDCADF7975" d="M1,0A1,1,0,1,0,2,1,1,1,0,0,0,1,0Z" transform="translate(6 4)" fill="#1e293b" />
                      <path id="AD528B39-E6BD-4596-94B4-DC58311EEB90" d="M0,1A1,1,0,0,1,1,0H3A1,1,0,0,1,3,2H1A1,1,0,0,1,0,1Z" transform="translate(0 8)" fill="#1e293b" />
                      <path id="_6CF152B9-DFD7-4CE1-B45B-12E7F5ED6D14" data-name="6CF152B9-DFD7-4CE1-B45B-12E7F5ED6D14" d="M1,0A1,1,0,1,0,2,1,1,1,0,0,0,1,0Z" transform="translate(6 8)" fill="#1e293b" />
                    </g>
                    <path id="Shape-3" data-name="Shape" d="M0,1A1,1,0,0,1,1,0H19a1,1,0,0,1,0,2H1A1,1,0,0,1,0,1Z" fill="#1e293b" />
                  </svg>
                  <span className="ms-2">Curriculum</span></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link bootcamp-nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor" type="button" role="tab" aria-controls="contact" aria-selected="false">
                  <svg id="Group_12" data-name="Group 12" xmlns="http://www.w3.org/2000/svg" width="15.582" height="19.666" viewBox="0 0 15.582 19.666">
                    <path id="Shape" d="M7.791,1.731a6.06,6.06,0,0,0-6.06,6.06V9.522A.866.866,0,1,1,0,9.522V7.791a7.791,7.791,0,0,1,15.582,0V9.522a.866.866,0,1,1-1.731,0V7.791A6.06,6.06,0,0,0,7.791,1.731Z" transform="translate(0 9.278)" fill="#1e293b" />
                    <path id="Shape-2" data-name="Shape" d="M5.194,8.656A3.463,3.463,0,1,0,1.731,5.194,3.463,3.463,0,0,0,5.194,8.656Zm0,1.731A5.194,5.194,0,1,0,0,5.194,5.194,5.194,0,0,0,5.194,10.388Z" transform="translate(2.597)" fill="#1e293b" fillRule="evenodd" />
                  </svg>
                  <span className="ms-2">Instructor</span>
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="course-overview" role="tabpanel" aria-labelledby="course-overview-tab">
                <link rel="stylesheet" href="../../../assets/frontend/default-new/css/bootcamp_style.css" />
                <div className="course-description">
                  <h3 className="description-head">Bootcamp description</h3>
                  <p>Coding Dojo gives students a lot of bang for their buck, with a robust
                    curriculum that includes more coding languages than its competitors. The
                    beginner-friendly curriculum starts with programming basics before
                    progressing into Python Full Stack and JavaScript Full Stack. For their
                    last module, students can choose between Java Full Stack or C# Stack. By
                    the end of the 14-week full-time program, students will be prepared to
                    build a variety of projects, including user interfaces, ecommerce
                    websites, login and registration pages, live-chat features, and more.</p>
                </div>
                <div className="course-description">
                  <h3 className="description-head">What will i learn?</h3>
                  <ul className="step-down">
                    <li>Graduates from Coding Dojo often acquire proficiency in multiple programming languages and
                      technologies, enabling them to build versatile and robust applications. The bootcamp's
                      comprehensive curriculum covers a wide range of tools and frameworks.</li>
                  </ul>
                </div>
                <div className="course-description requirements">
                  <h3 className="description-head">Requirements</h3>
                  <ul>
                    <li>Although most coding bootcamps are designed for novices without prior coding experience, they
                      try to fit as much information as possible into their curricula, which can overwhelm students. We
                      like that Hack Reactor offers a bootcamp that focuses primarily on Python and JavaScript, which
                      are two of the primary languages coders need to know.</li>
                  </ul>
                </div>
                <div className="course-description">
                  <h3 className="description-head">Frequently asked question</h3>
                  <div className="faq-accrodion m-0">
                    <div className="accordion">
                      <div className="accordion-item radius-0">
                        <h2 className="accordion-header" id="faq0">
                          <button className="faq accordion-button collapsed text-18px mt-20px" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-0" aria-expanded="false" aria-controls="panelsStayOpen-0">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>Is a coding bootcamp worth it?</span>
                              <span className="module_expand_icon">
                                <i className="fas fa-chevron-down" />
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div id="panelsStayOpen-0" className="accordion-collapse collapse" aria-labelledby="faq0">
                          <div className="accordion-body pt-0">
                            Coding bootcamps prepare individuals for a variety of careers in the tech field, including
                            web developer, software application developer, software quality assurance engineer, database
                            administrator, and business intelligence analyst. The Bureau of Labor Statistics predicts
                            that overall employment in computer and information technology occupations will grow 15% by
                            2031. </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n                  .course-description {\n                    margin: 0 !important;\n                  }\n                " }} />
              </div>
              <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                <link rel="stylesheet" href="../../../assets/frontend/default-new/css/bootcamp_style.css" />
                <div className="row">
                  <div className="col-12">
                    <div className="modules">
                      <div className="accordion accordion-flush" id="module_list">
                        <div className="accordion-item">
                          <h2 className="accordion-header m-0" id="module_12">
                            <button className="accordion-button collapsed px-0 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-module_12" aria-expanded="false" aria-controls="flush-module_12">
                              <div className="module-item d-flex align-items-center justify-content-between">
                                <div className="title d-flex align-items-center">
                                  <span className="module_expand_icon">
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                  <h5 className="module_title">
                                    <span>Web Fundamentals</span>
                                  </h5>
                                </div>
                                <span className="icon">
                                  <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_1278)">
                                      <path d="M4.28076 7.73047C5.38376 7.73047 6.28076 6.83347 6.28076 5.73047C6.28076 4.62747 5.38376 3.73047 4.28076 3.73047C3.17776 3.73047 2.28076 4.62747 2.28076 5.73047C2.28076 6.83347 3.17776 7.73047 4.28076 7.73047ZM4.28076 4.73047C4.83226 4.73047 5.28076 5.17897 5.28076 5.73047C5.28076 6.28197 4.83226 6.73047 4.28076 6.73047C3.72926 6.73047 3.28076 6.28197 3.28076 5.73047C3.28076 5.17897 3.72926 4.73047 4.28076 4.73047ZM7.78076 12.2305C7.78076 12.507 7.55676 12.7305 7.28076 12.7305C7.00476 12.7305 6.78076 12.507 6.78076 12.2305C6.78076 10.852 5.65926 9.73047 4.28076 9.73047C2.90226 9.73047 1.78076 10.852 1.78076 12.2305C1.78076 12.507 1.55676 12.7305 1.28076 12.7305C1.00476 12.7305 0.780762 12.507 0.780762 12.2305C0.780762 10.301 2.35076 8.73047 4.28076 8.73047C6.21076 8.73047 7.78076 10.301 7.78076 12.2305ZM12.7808 3.23047V7.23047C12.7808 8.60897 11.6593 9.73047 10.2808 9.73047H8.28076C8.00476 9.73047 7.78076 9.50697 7.78076 9.23047V8.23047C7.78076 7.95397 8.00476 7.73047 8.28076 7.73047H9.78076C10.0568 7.73047 10.2808 7.95397 10.2808 8.23047V8.73047C11.1078 8.73047 11.7808 8.05747 11.7808 7.23047V3.23047C11.7808 2.40347 11.1078 1.73047 10.2808 1.73047H5.51326C4.97926 1.73047 4.48126 2.01797 4.21376 2.48097C4.07526 2.71997 3.76976 2.80247 3.53076 2.66297C3.29126 2.52497 3.20976 2.21897 3.34826 1.97997C3.79426 1.20947 4.62376 0.730469 5.51376 0.730469H10.2813C11.6598 0.730469 12.7808 1.85197 12.7808 3.23047Z" fill="#6E798A" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_1278">
                                        <rect width={12} height={12} fill="white" transform="translate(0.780762 0.730469)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span className="module_details">2 live class</span>
                                </span>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-module_12" className="accordion-collapse collapse" aria-labelledby="module_12" data-bs-parent="#module_list">
                            <div className="accordion-body p-0 ps-3">
                              <div className="curriculum-class d-flex align-items-center">
                                <span className>
                                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={16} height={16}>
                                    <path d="M12,10c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm8.49,10.49c4.68-4.68,4.68-12.29,0-16.97-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c3.9,3.9,3.9,10.24,0,14.14-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-3.54-3.54c1.32-1.32,2.05-3.08,2.05-4.95s-.73-3.63-2.05-4.95c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c.94,.94,1.46,2.2,1.46,3.54s-.52,2.59-1.46,3.54c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-12.02,3.54c.39-.39,.39-1.02,0-1.41-3.9-3.9-3.9-10.24,0-14.14,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0C-1.16,8.19-1.16,15.81,3.51,20.49c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm3.54-3.54c.39-.39,.39-1.02,0-1.41-1.95-1.95-1.95-5.12,0-7.07,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0c-2.73,2.73-2.73,7.17,0,9.9,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
                                  </svg>
                                </span>
                                <div className="class-title">
                                  Front-End Basics </div>
                              </div>
                              <div className="curriculum-class d-flex align-items-center">
                                <span className>
                                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={16} height={16}>
                                    <path d="M12,10c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm8.49,10.49c4.68-4.68,4.68-12.29,0-16.97-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c3.9,3.9,3.9,10.24,0,14.14-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-3.54-3.54c1.32-1.32,2.05-3.08,2.05-4.95s-.73-3.63-2.05-4.95c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c.94,.94,1.46,2.2,1.46,3.54s-.52,2.59-1.46,3.54c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-12.02,3.54c.39-.39,.39-1.02,0-1.41-3.9-3.9-3.9-10.24,0-14.14,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0C-1.16,8.19-1.16,15.81,3.51,20.49c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm3.54-3.54c.39-.39,.39-1.02,0-1.41-1.95-1.95-1.95-5.12,0-7.07,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0c-2.73,2.73-2.73,7.17,0,9.9,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
                                  </svg>
                                </span>
                                <div className="class-title">
                                  JavaScript and jQuery </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header m-0" id="module_13">
                            <button className="accordion-button collapsed px-0 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-module_13" aria-expanded="false" aria-controls="flush-module_13">
                              <div className="module-item d-flex align-items-center justify-content-between">
                                <div className="title d-flex align-items-center">
                                  <span className="module_expand_icon">
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                  <h5 className="module_title">
                                    <span>Advanced Back-End Frameworks (Django/Flask &amp; Express)</span>
                                  </h5>
                                </div>
                                <span className="icon">
                                  <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_1278)">
                                      <path d="M4.28076 7.73047C5.38376 7.73047 6.28076 6.83347 6.28076 5.73047C6.28076 4.62747 5.38376 3.73047 4.28076 3.73047C3.17776 3.73047 2.28076 4.62747 2.28076 5.73047C2.28076 6.83347 3.17776 7.73047 4.28076 7.73047ZM4.28076 4.73047C4.83226 4.73047 5.28076 5.17897 5.28076 5.73047C5.28076 6.28197 4.83226 6.73047 4.28076 6.73047C3.72926 6.73047 3.28076 6.28197 3.28076 5.73047C3.28076 5.17897 3.72926 4.73047 4.28076 4.73047ZM7.78076 12.2305C7.78076 12.507 7.55676 12.7305 7.28076 12.7305C7.00476 12.7305 6.78076 12.507 6.78076 12.2305C6.78076 10.852 5.65926 9.73047 4.28076 9.73047C2.90226 9.73047 1.78076 10.852 1.78076 12.2305C1.78076 12.507 1.55676 12.7305 1.28076 12.7305C1.00476 12.7305 0.780762 12.507 0.780762 12.2305C0.780762 10.301 2.35076 8.73047 4.28076 8.73047C6.21076 8.73047 7.78076 10.301 7.78076 12.2305ZM12.7808 3.23047V7.23047C12.7808 8.60897 11.6593 9.73047 10.2808 9.73047H8.28076C8.00476 9.73047 7.78076 9.50697 7.78076 9.23047V8.23047C7.78076 7.95397 8.00476 7.73047 8.28076 7.73047H9.78076C10.0568 7.73047 10.2808 7.95397 10.2808 8.23047V8.73047C11.1078 8.73047 11.7808 8.05747 11.7808 7.23047V3.23047C11.7808 2.40347 11.1078 1.73047 10.2808 1.73047H5.51326C4.97926 1.73047 4.48126 2.01797 4.21376 2.48097C4.07526 2.71997 3.76976 2.80247 3.53076 2.66297C3.29126 2.52497 3.20976 2.21897 3.34826 1.97997C3.79426 1.20947 4.62376 0.730469 5.51376 0.730469H10.2813C11.6598 0.730469 12.7808 1.85197 12.7808 3.23047Z" fill="#6E798A" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_1278">
                                        <rect width={12} height={12} fill="white" transform="translate(0.780762 0.730469)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span className="module_details">2 live class</span>
                                </span>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-module_13" className="accordion-collapse collapse" aria-labelledby="module_13" data-bs-parent="#module_list">
                            <div className="accordion-body p-0 ps-3">
                              <div className="curriculum-class d-flex align-items-center">
                                <span className>
                                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={16} height={16}>
                                    <path d="M12,10c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm8.49,10.49c4.68-4.68,4.68-12.29,0-16.97-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c3.9,3.9,3.9,10.24,0,14.14-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-3.54-3.54c1.32-1.32,2.05-3.08,2.05-4.95s-.73-3.63-2.05-4.95c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c.94,.94,1.46,2.2,1.46,3.54s-.52,2.59-1.46,3.54c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-12.02,3.54c.39-.39,.39-1.02,0-1.41-3.9-3.9-3.9-10.24,0-14.14,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0C-1.16,8.19-1.16,15.81,3.51,20.49c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm3.54-3.54c.39-.39,.39-1.02,0-1.41-1.95-1.95-1.95-5.12,0-7.07,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0c-2.73,2.73-2.73,7.17,0,9.9,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
                                  </svg>
                                </span>
                                <div className="class-title">
                                  RESTful APIs and Microservices </div>
                              </div>
                              <div className="curriculum-class d-flex align-items-center">
                                <span className>
                                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={16} height={16}>
                                    <path d="M12,10c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm8.49,10.49c4.68-4.68,4.68-12.29,0-16.97-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c3.9,3.9,3.9,10.24,0,14.14-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-3.54-3.54c1.32-1.32,2.05-3.08,2.05-4.95s-.73-3.63-2.05-4.95c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c.94,.94,1.46,2.2,1.46,3.54s-.52,2.59-1.46,3.54c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-12.02,3.54c.39-.39,.39-1.02,0-1.41-3.9-3.9-3.9-10.24,0-14.14,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0C-1.16,8.19-1.16,15.81,3.51,20.49c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm3.54-3.54c.39-.39,.39-1.02,0-1.41-1.95-1.95-1.95-5.12,0-7.07,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0c-2.73,2.73-2.73,7.17,0,9.9,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
                                  </svg>
                                </span>
                                <div className="class-title">
                                  DevOps and Deployment </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header m-0" id="module_14">
                            <button className="accordion-button collapsed px-0 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-module_14" aria-expanded="false" aria-controls="flush-module_14">
                              <div className="module-item d-flex align-items-center justify-content-between">
                                <div className="title d-flex align-items-center">
                                  <span className="module_expand_icon">
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                  <h5 className="module_title">
                                    <span>Final Project - Full Stack Application</span>
                                  </h5>
                                </div>
                                <span className="icon">
                                  <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_1278)">
                                      <path d="M4.28076 7.73047C5.38376 7.73047 6.28076 6.83347 6.28076 5.73047C6.28076 4.62747 5.38376 3.73047 4.28076 3.73047C3.17776 3.73047 2.28076 4.62747 2.28076 5.73047C2.28076 6.83347 3.17776 7.73047 4.28076 7.73047ZM4.28076 4.73047C4.83226 4.73047 5.28076 5.17897 5.28076 5.73047C5.28076 6.28197 4.83226 6.73047 4.28076 6.73047C3.72926 6.73047 3.28076 6.28197 3.28076 5.73047C3.28076 5.17897 3.72926 4.73047 4.28076 4.73047ZM7.78076 12.2305C7.78076 12.507 7.55676 12.7305 7.28076 12.7305C7.00476 12.7305 6.78076 12.507 6.78076 12.2305C6.78076 10.852 5.65926 9.73047 4.28076 9.73047C2.90226 9.73047 1.78076 10.852 1.78076 12.2305C1.78076 12.507 1.55676 12.7305 1.28076 12.7305C1.00476 12.7305 0.780762 12.507 0.780762 12.2305C0.780762 10.301 2.35076 8.73047 4.28076 8.73047C6.21076 8.73047 7.78076 10.301 7.78076 12.2305ZM12.7808 3.23047V7.23047C12.7808 8.60897 11.6593 9.73047 10.2808 9.73047H8.28076C8.00476 9.73047 7.78076 9.50697 7.78076 9.23047V8.23047C7.78076 7.95397 8.00476 7.73047 8.28076 7.73047H9.78076C10.0568 7.73047 10.2808 7.95397 10.2808 8.23047V8.73047C11.1078 8.73047 11.7808 8.05747 11.7808 7.23047V3.23047C11.7808 2.40347 11.1078 1.73047 10.2808 1.73047H5.51326C4.97926 1.73047 4.48126 2.01797 4.21376 2.48097C4.07526 2.71997 3.76976 2.80247 3.53076 2.66297C3.29126 2.52497 3.20976 2.21897 3.34826 1.97997C3.79426 1.20947 4.62376 0.730469 5.51376 0.730469H10.2813C11.6598 0.730469 12.7808 1.85197 12.7808 3.23047Z" fill="#6E798A" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_1278">
                                        <rect width={12} height={12} fill="white" transform="translate(0.780762 0.730469)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span className="module_details">1 live class</span>
                                </span>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-module_14" className="accordion-collapse collapse" aria-labelledby="module_14" data-bs-parent="#module_list">
                            <div className="accordion-body p-0 ps-3">
                              <div className="curriculum-class d-flex align-items-center">
                                <span className>
                                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={16} height={16}>
                                    <path d="M12,10c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm8.49,10.49c4.68-4.68,4.68-12.29,0-16.97-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c3.9,3.9,3.9,10.24,0,14.14-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-3.54-3.54c1.32-1.32,2.05-3.08,2.05-4.95s-.73-3.63-2.05-4.95c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41c.94,.94,1.46,2.2,1.46,3.54s-.52,2.59-1.46,3.54c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-12.02,3.54c.39-.39,.39-1.02,0-1.41-3.9-3.9-3.9-10.24,0-14.14,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0C-1.16,8.19-1.16,15.81,3.51,20.49c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm3.54-3.54c.39-.39,.39-1.02,0-1.41-1.95-1.95-1.95-5.12,0-7.07,.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0c-2.73,2.73-2.73,7.17,0,9.9,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
                                  </svg>
                                </span>
                                <div className="class-title">
                                  Advanced Topics (MERN/MEAN Stack) </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n                  .course-decription #myTab {\n                    margin: 0;\n                  }\n                " }} />
              </div>
              <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                <link rel="stylesheet" href="../../../assets/frontend/default-new/css/bootcamp_style.css" />
                <div className="instructor">
                  <div className="row g-3">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                      <div className="instructor-img">
                        <img src="../../../uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                      <div className="instructor-text">
                        <h2 className="text-black ms-0 fw-600">John Doe</h2>
                        <p className="ms-0 text-15px font-inter-light ellipsis-line-2">Adobe Certified Instructor &amp;
                          Adobe Certified Expert</p>
                        <div className="ellipsis-line-2 font-inter-light">Sharing is who I am, and teaching is where I am at
                          my best, because I've been on both sides of that equation, and getting to deliver useful
                          training is my meaningful way to be a part of the creative community.I've spent a long time
                          watching others learn, and teach, to refine how I work with you to be efficient, useful and,
                          most importantly, memorable. I want you to carry what I've shown you into a bright future.I
                          have a wife (a lovely Irish girl) and kids. I have lived and worked in many places (as Kiwis
                          tend to do) – but most of my 14+ years of creating and teaching has had one overriding theme:
                          bringing others along for the ride as we all try to change the world with our stories, our
                          labours of love and our art.I'm a certified Adobe instructor (ACI) in Ireland. I'm also an
                          Adobe Certified Expert (ACE) and have completed the Adobe Certified Associate training (ACA).
                          And I don't just do Adobe. Remember, media is a very broad term – digital blew out the
                          borders, so we are all constantly learning.I've been teaching for 14+ years. I come from being
                          a media designer and content creator – so I understand exactly where you're at now. I've been
                          there. I love this stuff. Print, digital publishing, web and video. I can see how it all
                          connects. And I can see how we can share those connections.I built Bring Your Own Laptop in
                          Ireland, New Zealand, Australia &amp; online. I have a great team working with me to keep BYOL at
                          the top of Adobe and digital media training. I understand business, I have one – so I know how
                          important it is to get it right and make it work for you.Now my focus is on Udemy. It's my
                          mission to bring you the best training for digital media on Udemy.</div>
                      </div>
                      <div className="instructor-icon mt-3">
                        <a href="../../../../../www.facebook.com/admin.html">
                          <i className="fa-brands fa-facebook-f" data-bs-toggle="tooltip" title="Facebook" />
                        </a>
                        <a href="http://www.twitter.com/mobins">
                          <i className="fa-brands fa-twitter" data-bs-toggle="tooltip" title="Twitter" />
                        </a>
                        <a href="http://www.linkedin.com/admin">
                          <i className="fa-brands fa-linkedin" data-bs-toggle="tooltip" title="Linkedin" /></a>
                      </div>
                      <a className="btn btn-primary py-2 btn-sm" href="../../../home/instructor_page/1.html" target="_blank">View profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing card */}
        <div className="col-lg-4 col-md-12 col-sm-12 order-1 order-lg-2">
          <div className="course-right-section">
            <div className="course-card">
              <div className="card-img">
                <div className="courses-card-image" onClick={video} style={{color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
                  <img className="w-100" src="../../../uploads/bootcamp/bootcamp_thumbnail/fb6506243d24688d383aa810be15fffd.jpg" />
                </div>
              </div>
              <div className="bootcamp-info">
                <div className="ammount d-flex mb-3">
                  <h1 className="fw-500">$19</h1>
                  <h3 className="fw-500"><del>$19</del></h3>
                </div>
                <span className="count_class">
                  <span className="icon">
                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_1278)">
                        <path d="M4.28076 7.73047C5.38376 7.73047 6.28076 6.83347 6.28076 5.73047C6.28076 4.62747 5.38376 3.73047 4.28076 3.73047C3.17776 3.73047 2.28076 4.62747 2.28076 5.73047C2.28076 6.83347 3.17776 7.73047 4.28076 7.73047ZM4.28076 4.73047C4.83226 4.73047 5.28076 5.17897 5.28076 5.73047C5.28076 6.28197 4.83226 6.73047 4.28076 6.73047C3.72926 6.73047 3.28076 6.28197 3.28076 5.73047C3.28076 5.17897 3.72926 4.73047 4.28076 4.73047ZM7.78076 12.2305C7.78076 12.507 7.55676 12.7305 7.28076 12.7305C7.00476 12.7305 6.78076 12.507 6.78076 12.2305C6.78076 10.852 5.65926 9.73047 4.28076 9.73047C2.90226 9.73047 1.78076 10.852 1.78076 12.2305C1.78076 12.507 1.55676 12.7305 1.28076 12.7305C1.00476 12.7305 0.780762 12.507 0.780762 12.2305C0.780762 10.301 2.35076 8.73047 4.28076 8.73047C6.21076 8.73047 7.78076 10.301 7.78076 12.2305ZM12.7808 3.23047V7.23047C12.7808 8.60897 11.6593 9.73047 10.2808 9.73047H8.28076C8.00476 9.73047 7.78076 9.50697 7.78076 9.23047V8.23047C7.78076 7.95397 8.00476 7.73047 8.28076 7.73047H9.78076C10.0568 7.73047 10.2808 7.95397 10.2808 8.23047V8.73047C11.1078 8.73047 11.7808 8.05747 11.7808 7.23047V3.23047C11.7808 2.40347 11.1078 1.73047 10.2808 1.73047H5.51326C4.97926 1.73047 4.48126 2.01797 4.21376 2.48097C4.07526 2.71997 3.76976 2.80247 3.53076 2.66297C3.29126 2.52497 3.20976 2.21897 3.34826 1.97997C3.79426 1.20947 4.62376 0.730469 5.51376 0.730469H10.2813C11.6598 0.730469 12.7808 1.85197 12.7808 3.23047Z" fill="#754FFE" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1278">
                          <rect width={12} height={12} fill="white" transform="translate(0.780762 0.730469)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="module_details">5 live class</span>
                  </span>
                </span>
                <div className="pricing_info">
                  <h4 className="info-title mt-4">In this course you get:</h4>
                  <div className="info">
                    <p>
                      <span>
                        <i className="fa-solid fa-circle-check" />
                        <span>Enrolled</span>
                      </span>
                      <span>0</span>
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <span>
                        <i className="fa-solid fa-circle-check" />
                        <span>Module</span>
                      </span>
                      <span>3</span>
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <span>
                        <i className="fa-solid fa-circle-check" />
                        <span>Live class</span>
                      </span>
                      <span>5</span>
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <span>
                        <i className="fa-solid fa-circle-check" />
                        <span>Resource</span>
                      </span>
                      <span>Yes</span>
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <span>
                        <i className="fa-solid fa-circle-check" />
                        <span>Class record</span>
                      </span>
                      <span>Yes</span>
                    </p>
                  </div>
                </div>
                <a href="../purchase/1.html" className="join-batch-btn d-flex align-items-center gap-3">
                  <i className="fas fa-credit-card" />
                  <span>
                    Buy now </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*------- course Description Page end ----*/}
  <style dangerouslySetInnerHTML={{__html: "\n    .info.top p {\n      color: #fff !important;\n    }\n\n    .info.top span {\n      display: inline-flex;\n\n    }\n\n    .info.top {\n      display: flex;\n      align-items: center;\n      gap: 4px;\n    }\n\n    .course-heading-info {\n      gap: 16px;\n    }\n\n    .courses-card-image {\n      position: relative !important;\n      width: 100% !important;\n      aspect-ratio: 16 / 9 !important;\n      height: auto !important;\n    }\n\n    .pricing_info {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n\n    .info p {\n      color: #1E293B !important;\n      font-size: 15px;\n      font-weight: 500;\n      line-height: normal;\n      letter-spacing: 0.3px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .info p i {\n      color: #754FFE;\n    }\n\n    .info-title {\n      color: #1E293B !important;\n      font-size: 16px;\n      font-weight: 500;\n      line-height: normal;\n      letter-spacing: 0.32px;\n    }\n\n    .course-left-side {\n      padding: 13px 30px;\n    }\n\n    .amount h1 {\n      color: #1E293B !important;\n      text-align: center;\n      font-size: 34px;\n      font-weight: 600 !important;\n      line-height: normal;\n    }\n\n    span.share-bootcamp-btn {\n      background: #fff;\n      width: 35px;\n      height: 35px;\n      display: inline-block;\n      position: relative;\n      border-radius: 8px;\n      border: 1.5px solid #647996;\n    }\n\n    span.share-bootcamp-btn svg {\n      position: absolute;\n      top: 50%;\n      left: 49%;\n      transform: translate(-53%, -50%);\n      display: inline-flex;\n    }\n\n    .count_class {\n      color: #1E293B !important;\n      border-radius: 5px;\n      background: rgba(234, 236, 240, 0.80);\n      padding: 3px 8px;\n      display: inline-block;\n      cursor: default;\n    }\n\n    .course-right-section .course-card .ammount {\n      padding: 0 !important;\n    }\n\n    .bootcamp-info {\n      padding: 20px 10px;\n    }\n\n    .join-batch-btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 30px;\n      border-radius: 10px;\n      background: #754FFE;\n      color: #fff !important;\n      padding: 20px 0;\n      font-size: 15px;\n      font-weight: 600;\n      line-height: 15px;\n    }\n\n    .course-right-section .course-card .card-img img {\n      padding: 0 !important;\n    }\n\n    .course-card {\n      padding: 10px;\n      overflow: hidden;\n    }\n\n    .courses-card-image img {\n      width: 400px !important;\n      aspect-ratio: 16/9 !important;\n      object-fit: cover;\n      object-position: center;\n    }\n\n    .modal-header {\n      padding: 0 0 12px !important;\n      border-bottom: 1.5px solid #676C7D;\n      margin-bottom: 12px;\n    }\n\n    .modal-content {\n      padding: 16px !important;\n    }\n\n    .modal-footer {\n      display: none !important;\n    }\n\n    .modal-header .title~button:active {\n      background: #8B0000;\n    }\n\n    .modal-header .title~button {\n      background: red;\n      border: none;\n      border-radius: 4px !important;\n    }\n  " }} />{/*------- footer Section Start-------------*/}
 
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
