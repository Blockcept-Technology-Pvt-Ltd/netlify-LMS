import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";



export default function sign_up() {
  return (
    <div>
  
  {/*-------- Header Section start  --------*/}
  
  {/*-------- Header Section End  --------*/}
  <link rel="stylesheet" type="text/css" href="" async />
  <div className="cookieConsentContainer" id="cookieConsentContainer" style={{opacity: '.9', display: 'none'}}>
    {/* <div class="cookieTitle">
    <a>Cookies.</a>
  </div> */}
    <div className="cookieDesc">
      <p>
        This website uses cookies to personalize content and analyse traffic in order to offer you a better experience.
        <a className="link-cookie-policy" href="">Cookie policy</a>
      </p>
    </div>
    <div className="cookieButton">
      <a onclick="cookieAccept();">Accept</a>
    </div>
  </div>
  {/*-------- Header Section End  --------*/}
  <section className="sign-up my-5 pt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12 col-12 text-center">
          <img loading="lazy" width="65%" src="assets/frontend/default-new/image/login-security.gif" />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 col-12 ">
          <div className="sing-up-right">
            <h3>Sign up<span>!</span></h3>
            <p>Explore, learn, and grow with us. enjoy a seamless and enriching educational journey. lets begin!</p>
            <form action="#" method="post" encType="multipart/form-data">
              <div className="mb-4">
                <h5>First name</h5>
                <div className="position-relative">
                  <i className="fa-solid fa-user" />
                  <input className="form-control" id="first_name" type="text" name="first_name" placeholder="Enter your first name" required />
                </div>
              </div>
              <div className="mb-4">
                <h5>Last name</h5>
                <div className="position-relative">
                  <i className="fa-solid fa-user" />
                  <input className="form-control" id="last_name" type="text" name="last_name" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="mb-4">
                <h5>Your email</h5>
                <div className="position-relative">
                  <i className="fa-solid fa-user" />
                  <input className="form-control" id="email" type="email" name="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="mb-4">
                <h5>Password</h5>
                <div className="position-relative">
                  <i className="fa-solid fa-key" />
                  <i className="fa-solid fas fa-eye cursor-pointer" onclick="if($('#password').attr('type') == 'text'){$('#password').attr('type', 'password');}else{$('#password').attr('type', 'text');} $(this).toggleClass('fa-eye'); $(this).toggleClass('fa-eye-slash') " style={{right: 20, left: 'unset'}} />
                  <input className="form-control" id="password" type="password" name="password" placeholder="Enter your valid password" required />
                </div>
              </div>
              <div className="mb-4">
                <input id="instructor" type="checkbox" onchange="$('#become-instructor-fields').toggle()" name="instructor" defaultValue="yes" />
                <label htmlFor="instructor">Apply to become an instructor</label>
              </div>
              <div id="become-instructor-fields" className="d-hidden">
                <div className="mb-4">
                  <h5>Phone</h5>
                  <div className="position-relative">
                    <i className="fas fa-phone" />
                    <input className="form-control" id="phone" type="phone" name="phone" placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className="mb-4">
                  <h5>Document <small>(doc, docs, pdf, txt, png, jpg, jpeg)</small></h5>
                  <div className="position-relative">
                    <input className="form-control" id="document" type="file" name="document" />
                    <small>Provide some documents about your qualifications</small>
                  </div>
                </div>
                <div className="mb-4">
                  <h5>Message</h5>
                  <div className="position-relative">
                    <textarea className="form-control" name="message" rows={4} defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="log-in">
                <button type="submit" className="btn btn-primary">
                  Sign up </button>
              </div>
            </form>
            <div className="another text-center">
              <p>
                Already you have an account? <a href="/login">Log in</a>
              </p>
              <h5>Or</h5>
            </div>
            <div className="social-media">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* <button type="button" class="btn btn-primary"><a href="#"><img loading="lazy" src="image/facebook.png"> Facebook</a></button> */}
                  <div className="form-group text-center" style={{height: 45}}>
                    <div id="fb-root" />
                    <div className="fb-login-button" onlogin="check_API()" data-width scope="public_profile,email" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*------- footer Section Start-------------*/}
  
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

  )
}
