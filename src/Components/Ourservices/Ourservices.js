import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Ourservices.scss";
import service from "../../Assets/Images/serviceimg.png";
import Servicepattern from "../../Assets/Images/servicepattern.png";
import Servicetitlepattern from "../../Assets/Images/servicetitlepattern.png";
import Ashtanga from "../../Assets/Images/ashtanga.png";
import Iyengar from "../../Assets/Images/Iyengar.png";
import Vinyasa from "../../Assets/Images/vinyasa.png";
import Restorative from "../../Assets/Images/restorative.png";

function Ourservices() {
   return (
      <div className="ourservices_wrap">
         <div className="servicepattern">
            <img src={Servicepattern} alt="Servicepattern" />
         </div>
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="ourservices_content">
                     <div className="ourservices_title">
                        <h6>Our Services</h6>
                        <h1>Benifits Of Our Services</h1>
                        <div className="servicetitlepattern_img">
                           <img
                              src={Servicetitlepattern}
                              alt="Servicetitlepattern"
                           />
                        </div>
                     </div>
                     <p className="services_text">
                        You will be spoilt for choice by the array of group
                        classes we offer in yoga, pilates, therapy and dance.
                        With more than 40 classes a week, there is something for
                        everyone no matter what your fitness goals are.
                        <br />
                        <br /> For those who prefer individualized training or
                        have specific health concerns and/ or sports injury, we
                        offer private sessions as well. Additionally, we offer
                        professional workshops, corporate fitness programmes,
                        yoga retreats, mass yoga workouts and internationally
                        accredited hatha yoga teacher training.Additionally, we
                        offer professional workshops, corporate fitness
                        programmes, yoga retreats, mass yoga workouts and
                        internationally accredited hatha yoga teacher training.
                     </p>
                  </div>
               </Col>
               <Col lg={6}>
                  <div className="ourservices_image">
                     <img src={service} alt="service" />
                  </div>
               </Col>
            </Row>
            <Row className="mt-5">
               <Col lg={3} sm={6}>
                  <div className="service_card">
                     <div className="service_card_img">
                        <img src={Ashtanga} alt="Ashtanga" />
                     </div>
                     <div className="service_card_text">
                        <p>Ashtanga</p>
                     </div>
                  </div>
               </Col>
               <Col lg={3} sm={6}>
                  <div className="service_card">
                     <div className="service_card_img">
                        <img src={Iyengar} alt="Iyengar" />
                     </div>
                     <div className="service_card_text">
                        <p>Iyengar</p>
                     </div>
                  </div>
               </Col>
               <Col lg={3} sm={6}>
                  <div className="service_card">
                     <div className="service_card_img">
                        <img src={Vinyasa} alt="Vinyasa" />
                     </div>
                     <div className="service_card_text">
                        <p>Vinyasa</p>
                     </div>
                  </div>
               </Col>
               <Col lg={3} sm={6}>
                  <div className="service_card">
                     <div className="service_card_img">
                        <img src={Restorative} alt="Restorative" />
                     </div>
                     <div className="service_card_text">
                        <p>Restorative</p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Ourservices;
