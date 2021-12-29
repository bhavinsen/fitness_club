import React from "react";
import "./Testimonial.scss";
import Leaf from "../../Assets/Images/leaf.png";
import Testimonialpattern from "../../Assets/Images/testimonialpattern.png";
import Servicetitlepattern from "../../Assets/Images/servicetitlepattern.png";
import Client1 from "../../Assets/Images/client1.png";
import Client2 from "../../Assets/Images/client2.png";
import Client3 from "../../Assets/Images/client3.png";
import Qouteleft from "../../Assets/Images/qouteleft.png";
import Qouteright from "../../Assets/Images/qouteright.png";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

function Testimonial() {
   const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   };
   return (
      <div className="testimonial_wrap">
         <div className="leaf_pattern">
            <img src={Leaf} alt="Leaf" />
         </div>
         <div className="testimonial_pattern">
            <img src={Testimonialpattern} alt="Testimonialpattern" />
         </div>
         <Container>
            <div className="testimonial_main">
               <div className="testimonial_title">
                  <h6>Testimonial</h6>
                  <h1>What Our Client Say’s</h1>
                  <div className="testimonial_img">
                     <img src={Servicetitlepattern} alt="Servicetitlepattern" />
                  </div>
               </div>
               <Slider {...settings}>
                  <div className="client_card">
                     <div className="client_cardbg">
                        <div className="client_card_img">
                           <img src={Client1} alt="Client1" />
                        </div>
                        <div className="client_card_text long_text">
                           <p>
                              <img src={Qouteleft} alt="qouteleft" />
                              As a business professional it is important to me
                              to maintain a fresh mind and balanced lifestyle.
                              Yoga is an ideal way to energize the body, gain
                              necessary concentration, organize thoughts and
                              release stress. On the other hand as a
                              professional athlete I recognize the strength of
                              yoga in various areas. It is helping me to gain
                              the necessary agility, strength and flexibility.
                              <img src={Qouteright} alt="qouteright" />
                           </p>
                        </div>
                        <h6 className="client_name">Miraslav Babol</h6>
                        <p className="client_position">Add Designation</p>
                     </div>
                  </div>
                  <div className="client_card">
                     <div className="client_cardbg">
                        <div className="client_card_img">
                           <img src={Client2} alt="Client2" />
                        </div>
                        <div className="client_card_text short_text">
                           <p>
                              <img src={Qouteleft} alt="qouteleft" />
                              All the instructors at One Wellness are very
                              experienced and attentive, and they never fail to
                              amaze me at how well they understand our body just
                              by looking at us in a posture. I always love a
                              challenging class, and Master Dev’s classes
                              definitely deliver that and more.
                              <img src={Qouteright} alt="qouteright" />
                           </p>
                        </div>
                        <h6 className="client_name">Miraslav Babol</h6>
                        <p className="client_position">Add Designation</p>
                     </div>
                  </div>
                  <div className="client_card">
                     <div className="client_cardbg">
                        <div className="client_card_img">
                           <img src={Client3} alt="Client3" />
                        </div>
                        <div className="client_card_text medium_text">
                           <p>
                              <img src={Qouteleft} alt="qouteleft" />
                              Yoga is about proper alignment and breathing and
                              feeling good. Yoga I believe is a good way to live
                              a healthy life. find the instructors at One
                              Wellness experienced and also very observant. They
                              guide and help you into the postures correctly. My
                              experience of practicing Yoga has completely
                              changed.
                              <img src={Qouteright} alt="qouteright" />
                           </p>
                        </div>
                        <h6 className="client_name">Miraslav Babol</h6>
                        <p className="client_position">Add Designation</p>
                     </div>
                  </div>
                  <div className="client_card">
                     <div className="client_cardbg">
                        <div className="client_card_img">
                           <img src={Client2} alt="Client2" />
                        </div>
                        <div className="client_card_text long_text">
                           <p>
                              <img src={Qouteleft} alt="qouteleft" />
                              As a business professional it is important to me
                              to maintain a fresh mind and balanced lifestyle.
                              Yoga is an ideal way to energize the body, gain
                              necessary concentration, organize thoughts and
                              release stress. On the other hand as a
                              professional athlete I recognize the strength of
                              yoga in various areas. It is helping me to gain
                              the necessary agility, strength and flexibility.
                              <img src={Qouteright} alt="qouteright" />
                           </p>
                        </div>
                        <h6 className="client_name">Miraslav Babol</h6>
                        <p className="client_position">Add Designation</p>
                     </div>
                  </div>
               </Slider>
            </div>
         </Container>
      </div>
   );
}

export default Testimonial;
