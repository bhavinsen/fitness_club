import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import {
   faLinkedinIn,
   faSkype,
   faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Whitelogo from '../../Assets/Images/whitelogo.png'

function Footer() {
   return (
      <div className="footer_wrap">
         <Container>
            <div className="footer_main">
               <div className="brand_sec">
                  <div className="brand_logo">
                     <img src={Whitelogo} alt="Whitelogo" />
                  </div>
                  <p className="about_text">
                     It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking
                     at its layout. The point of using Lorem Ipsum.
                  </p>
                  <ul className="social_media">
                     <li>
                        <a href="#linkedin">
                           <FontAwesomeIcon icon={faLinkedinIn} />
                           <span>Linkedin</span>
                        </a>
                     </li>
                     <li>
                        <a href="#skype">
                           <FontAwesomeIcon icon={faSkype} />
                           <span>Skype</span>
                        </a>
                     </li>
                     <li>
                        <a href="#twitter">
                           <FontAwesomeIcon icon={faTwitter} />
                           <span>Twitter</span>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="quick_link">
                  <div className="title_wrap">
                     <h5>Quick Link</h5>
                  </div>
                  <ul className="quick_link_ul">
                     <li>
                        <a href="/">
                           <span>Home</span>
                        </a>
                     </li>
                     <li>
                        <a href="#aboutus">
                           <span>About Us</span>
                        </a>
                     </li>
                     <li>
                        <a href="#class">
                           <span>Class</span>
                        </a>
                     </li>
                     <li>
                        <a href="/contactus">
                           <span>Contact</span>
                        </a>
                     </li>
                     <li>
                        <a href="#packages">
                           <span>Packages</span>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="events_wrap">
                  <div className="title_wrap">
                     <h5>Events</h5>
                  </div>
                  <ul className="events_wrap_ul">
                     <li>
                        <a href="#linkedin">
                           <span>Events</span>
                        </a>
                     </li>
                     <li>
                        <a href="#skype">
                           <span>Workshop</span>
                        </a>
                     </li>
                     <li>
                        <a href="#twitter">
                           <span>200 Hours Hatha Yoga Teacher Training</span>
                        </a>
                     </li>
                     <li>
                        <a href="#twitter">
                           <span>Mass Workout</span>
                        </a>
                     </li>
                     <li>
                        <a href="#twitter">
                           <span>Prenatal Yoga Teacher Training</span>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="address_wrap">
                  <div className="title_wrap">
                     <h5>Address</h5>
                  </div>
                  <ul className="address_wrap_ul">
                     <li>
                        <a href="tel:+1-555-555-1212">
                           <div className="icon_back">
                              <FontAwesomeIcon
                                 className="rotate_icon"
                                 icon={faMobileAlt}
                              />
                           </div>
                           <span>(65) 6221 9663</span>
                        </a>
                     </li>
                     <li>
                        <a href="mailto:eniquiry@onewellness.com.sg">
                           <div className="icon_back">
                              <FontAwesomeIcon icon={faEnvelope} />
                           </div>
                           <span>eniquiry@onewellness.com.sg</span>
                        </a>
                     </li>
                     <li>
                        <a href="#address">
                           <div className="icon_back">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                           </div>
                           <span>
                              247A Victoria Street, Bugis Village,
                              Singapore 188033
                           </span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="right_reserved">
               <p>© 2021 OnewellnessfitnessClub. All right reserved</p>
            </div>
         </Container>
      </div>
   );
}

export default Footer;
