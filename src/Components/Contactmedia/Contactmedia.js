import React from "react";
import './Contactmedia.scss'
import { Container } from 'react-bootstrap'
import './Contactmedia.scss'
import contactpattern from "../../Assets/Images/servicetitlepattern.png"
import facebook from '../../Assets/Images/Facebook.png'
import Instagram from '../../Assets/Images/Instagram.png'
import Phone from '../../Assets/Images/phone.png'
import Twitter from '../../Assets/Images/Twitter.png'
import Email from '../../Assets/Images/Email.png'
import Border from '../../Assets/Images/border.png'

function Contactmedia() {
   return (
      <div>
         <Container>
            <div className="main-contactmedia">
               <div className="Contactmedia-title">
                  <h6>Contact Us</h6>
                  <h1>Contact Us</h1>
                  <div className="mediapattern_img">
                     <img src={contactpattern} alt="contactpattern" />
                  </div>
               </div>
               <div className="all-mediacontact">
                  <ul className="media-section">
                     <li>
                        <a href="#">
                           <div className="mediaone">
                              <div className="media-icon">
                                 <img src={facebook} alt="" />
                              </div>
                              <p>Facebook</p>
                              <span>@Onewellness</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <div className="media-border">
                           <img src={Border} alt="" />
                        </div>
                     </li>
                     <li>
                        <a href="#">
                           <div className="mediaone">
                              <div className="media-icon">
                                 <img src={Instagram} alt="" />
                              </div>
                              <p>Instagram</p>
                              <span>@Onewellness</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <div className="media-border">
                           <img src={Border} alt="" />
                        </div>
                     </li>
                     <li>
                        <a href="#">
                           <div className="mediaone">
                              <div className="media-icon">
                                 <img src={Phone} alt="" />
                              </div>
                              <p>Phone</p>
                              <span>(65) 6221 9663</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <div className="media-border">
                           <img src={Border} alt="" />
                        </div>
                     </li>
                     <li>
                        <a href="#">
                           <div className="mediaone">
                              <div className="media-icon">
                                 <img src={Twitter} alt="" />
                              </div>
                              <p>Twitter</p>
                              <span>FOLLOW US</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <div className="media-border">
                           <img src={Border} alt="" />
                        </div>
                     </li>
                     <li>
                        <a href="#">
                           <div className="mediaone">
                              <div className="media-icon">
                                 <img src={Email} alt="" />
                              </div>
                              <p>Email</p>
                              <span>enquiry@onewellness.com.sg</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Contactmedia;
