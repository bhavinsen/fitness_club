import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactpattern from "../../Assets/Images/servicetitlepattern.png";
import Contactform from "../Contactform/Contactform";
import "./Contactmap.scss";

function Contactmap() {
   return (
      <div className="contactmap_wrap">
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="contact-title">
                     <h6>Contact Us</h6>
                     <h1>Get In Touch</h1>
                     <div className="contactpattern_img">
                        <img src={contactpattern} alt="contactpattern" />
                     </div>
                  </div>
                  <Contactform />
               </Col>
               <Col lg={6}>
                  <div className="map_wrap">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29877.41650984282!2d72.9284608!3d20.601241599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1640864155803!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        title="map_wrap"
                        allowfullscreen=""
                        loading="lazy"
                     ></iframe>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Contactmap;
