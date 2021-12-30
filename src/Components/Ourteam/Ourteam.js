import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Servicetitlepattern from "../../Assets/Images/servicetitlepattern.png";
import Expert1 from "../../Assets/Images/expert1.png";
import Expert2 from "../../Assets/Images/expert2.png";
import Expert3 from "../../Assets/Images/expert3.png";
import Expert4 from "../../Assets/Images/expert4.png";
import "./Ourteam.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faInstagram,
   faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Ourteam() {
   return (
      <div className="ourteam_wrap">
         <Container>
            <div className="ourteam_main">
               <div className="ourteam_title">
                  <h6>Our Team</h6>
                  <h1>Mett Our Expert</h1>
                  <div className="ourteam_img">
                     <img src={Servicetitlepattern} alt="Servicetitlepattern" />
                  </div>
               </div>
               <div className="ourteam_card_main">
                  <Row>
                     <Col lg={3} sm={6}>
                        <div className="ourteam_card">
                           <div className="expert_name">
                              <h5>Master Dev</h5>
                              <p>World Champion Yogratten</p>
                           </div>
                           <div className="expert_image">
                              <img src={Expert1} alt="Expert1" />
                           </div>
                           <div className="expert_info">
                              <p>
                                 World Champion (2008-2009) Master Yogratten Dev
                                 Kapil is from a lineage of distinguished yogis.
                                 His teaching is based on the study of human
                                 anatomy, amalgamating the traditions of
                                 <a href="#readmore"> Read More...</a>
                              </p>
                           </div>
                           <div className="expert_social_media">
                              <ul>
                                 <li>
                                    <a href="#facebook">
                                       <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faTwitter} />
                                       </span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faInstagram} />
                                       </span>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Col>
                     <Col lg={3} sm={6}>
                        <div className="ourteam_card">
                           <div className="expert_name">
                              <h5>Jessie R</h5>
                              <p>Yoga Teacher</p>
                           </div>
                           <div className="expert_image">
                              <img src={Expert2} alt="Expert2" />
                           </div>
                           <div className="expert_info">
                              <p>
                                 As a teacher, Jessie is engaged in a continuous
                                 learning journey to improve her skills. Yoga
                                 has changed her positively in many ways and she
                                 wants to share this discipline with others.
                                 <a href="#readmore"> Read More...</a>
                              </p>
                           </div>
                           <div className="expert_social_media">
                              <ul>
                                 <li>
                                    <a href="#facebook">
                                       <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faTwitter} />
                                       </span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faInstagram} />
                                       </span>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Col>
                     <Col lg={3} sm={6}>
                        <div className="ourteam_card">
                           <div className="expert_name">
                              <h5>Jill</h5>
                              <p>Yoga Therapy Teacher</p>
                           </div>
                           <div className="expert_image">
                              <img src={Expert3} alt="Expert3" />
                           </div>
                           <div className="expert_info">
                              <p>
                                 Yogi’s forte is in the teaching of Yoga Therapy
                                 to relieve the bodily disorders that are the
                                 symptoms of our sedentary lifestyles and modern
                                 diet. Yogi underwent rigorous classical
                                 <a href="#readmore"> Read More...</a>
                              </p>
                           </div>
                           <div className="expert_social_media">
                              <ul>
                                 <li>
                                    <a href="#facebook">
                                       <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faTwitter} />
                                       </span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faInstagram} />
                                       </span>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Col>
                     <Col lg={3} sm={6}>
                        <div className="ourteam_card">
                           <div className="expert_name">
                              <h5>Monika</h5>
                              <p>Sport & Fitness Teacher</p>
                           </div>
                           <div className="expert_image">
                              <img src={Expert4} alt="Expert4" />
                           </div>
                           <div className="expert_info">
                              <p>
                                 Sports, fitness and dance have always been a
                                 part of Monika’s life. She is a keen competitor
                                 in sports, a trained Indian classical dancer,
                                 experienced yoga therapist and excel in many
                                 physical<a href="#readmore"> Read More...</a>
                              </p>
                           </div>
                           <div className="expert_social_media">
                              <ul>
                                 <li>
                                    <a href="#facebook">
                                       <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faTwitter} />
                                       </span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#facebook">
                                       <span>
                                          <FontAwesomeIcon icon={faInstagram} />
                                       </span>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Ourteam;
