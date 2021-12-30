import React from "react";
import contactpattern from "../../Assets/Images/servicetitlepattern.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import './ContactUs.scss'
import {
   Container,
   Row,
   Col
} from "react-bootstrap";
import Contactform from "../Contactform/Contactform";

function ContactUs() {
   return (
      <div>
         <div className="ContactUs">
            <Container>
               <Row>
                  <Col lg={5}>
                     <div className="contact-title">
                        <h6>Contact Us</h6>
                        <h1>Get In Touch</h1>
                        <div className="contactpattern_img">
                           <img src={contactpattern} alt="contactpattern" />
                        </div>
                        <p>
                           It is a long established fact that a reader will be
                           distracted by
                           <br />
                           the readable content of a page when looking at its
                           layout. The
                           <br />
                           point of using Lorem Ipsum.
                        </p>
                     </div>
                     <div className="All-contactus">
                        <ul className="contact-calls">
                           <li>
                              <a href="tel:+1-555-555-1212">
                                 <div className="contact-icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                 </div>
                                 <span>(65) 6221 9663</span>
                              </a>
                           </li>
                           <li>
                              <a href="mailto:eniquiry@onewellness.com.sg">
                                 <div className="contact-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                 </div>
                                 <span>enquiry@onewellness.com.sg</span>
                              </a>
                           </li>
                           <li>
                              <a href="#linkedin">
                                 <div className="contact-icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                 </div>
                                 <span>
                                    247A / 247B Victoria Stree, Bugis Village,
                                    <br />
                                    Singapore 188033
                                 </span>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </Col>
                  <Col lg={7}>
                     <Contactform />
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
}

export default ContactUs;
