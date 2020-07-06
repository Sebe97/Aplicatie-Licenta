import React from "react";
import { FacebookIcon   } from "react-share"; // pentru linkul/iconita de fb
import './Footer.css';

const AcasaFooter = () => {
    return (
        // <MDBFooter color="mdb-color" className="font-small lighten-3 footer">
        //     <MDBContainer className="text-center text-md-left">
        //         <MDBRow className="my-4">
        //             <MDBCol md="4" lg="4">
        //                 <h5 className="text-uppercase mb-4 font-weight-bold">
        //                     MDBFooter Content
        //                 </h5>
        //                 <p>
        //                     Here you can use rows and columns here to organize your footer
        //                     content.
        //                 </p>
        //                 <p>
        //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        //                     error amet numquam iure provident voluptate esse quasi,
        //       veritatis totam voluptas nostrum.{" "}
        //                 </p>
        //             </MDBCol>
        //             <hr className="clearfix w-100 d-md-none" />
        //             <MDBCol md="2" lg="2" className="ml-auto">
        //                 <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
        //                 <ul className="list-unstyled">
        //                     <p>
        //                         <a href="#!">PROJECTS</a>
        //                     </p>
        //                     <p>
        //                         <a href="#!">ABOUT US</a>
        //                     </p>
        //                     <p>
        //                         <a href="#!">BLOG</a>
        //                     </p>
        //                     <p>
        //                         <a href="#!">AWARDS</a>
        //                     </p>
        //                 </ul>
        //             </MDBCol>
        //             <hr className="clearfix w-100 d-md-none" />
        //             <MDBCol md="5" lg="3">
        //                 <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
        //                 <p>
        //                     <i className="fa fa-home mr-3" /> New York, NY 10012, US
        //                 </p>
        //                 <p>
        //                     <i className="fa fa-envelope mr-3" /> info@example.com
        //                 </p>
        //                 <p>
        //                     <i className="fa fa-phone mr-3" /> + 01 234 567 88
        //                 </p>
        //                 <p>
        //                     <i className="fa fa-print mr-3" /> + 01 234 567 89
        //                 </p>
        //             </MDBCol>
        //             <hr className="clearfix w-100 d-md-none" />
        //             <MDBCol md="2" lg="2" className="text-center">
        //                 <h5 className="text-uppercase mb-4 font-weight-bold">
        //                     Follow us
        //                 </h5>
        //                 <div className="mt-2 ">
        //                     <a  href='https://www.facebook.com/Stomatologie-Dentalux-107387414084731/?epa=SEARCH_BOX'>
        //                             <FacebookIcon round size={35} />
        //                     </a>
        //                     <a type="button" className="btn-floating btn-small btn-tw">
        //                         <i className="fab fa-twitter" />
        //                     </a>
        //                     <a type="button" className="btn-floating btn-small btn-gplus">
        //                         <i className="fab fa-google-plus" />
        //                     </a>
        //                     <a type="button" className="btn-floating btn-small btn-dribbble">
        //                         <i className="fab fa-dribbble" />
        //                     </a>
        //                 </div>
        //             </MDBCol>
        //             <hr className="clearfix w-100 d-md-none" />
        //         </MDBRow>
        //     </MDBContainer>
        // </MDBFooter>

        
<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h4>Heading 1</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h4>Heading 2</h4>
          <ul class="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h4>Heading 3</h4>
          <ul class="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
    );
}

export default AcasaFooter;

