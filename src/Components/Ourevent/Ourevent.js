import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Servicetitlepattern from "../../Assets/Images/servicetitlepattern.png";
import Ourevent1 from "../../Assets/Images/ourevent1.png";
import Ourevent2 from "../../Assets/Images/ourevent2.png";
import Ourevent3 from "../../Assets/Images/ourevent3.png";
import Ourevent4 from "../../Assets/Images/ourevent4.png";
import "./Ourevent.scss";

function Ourevent() {
   const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };
   return (
      <div className="ourevent_wrap">
         <Container>
            <div className="ourevent_main">
               <div className="ourevent_title">
                  <h6>Testimonial</h6>
                  <h1>What Our Client Say’s</h1>
                  <div className="ourevent_img">
                     <img src={Servicetitlepattern} alt="Servicetitlepattern" />
                  </div>
               </div>
               <div>
                  <Slider {...settings}>
                     <div className="ourevent_card_space">
                        <div className="ourevent_card">
                           <div className="ourevent_card_img">
                              <img src={Ourevent1} alt="Ourevent1" />
                           </div>
                           <div className="ourevent_card_text">
                              <p>Prenatal Yoga Teacher Training</p>
                           </div>
                        </div>
                     </div>
                     <div className="ourevent_card_space">
                        <div className="ourevent_card">
                           <div className="ourevent_card_img">
                              <img src={Ourevent2} alt="Ourevent2" />
                           </div>
                           <div className="ourevent_card_text">
                              <p>50 Hours Vinyasa Yoga Teacher</p>
                           </div>
                        </div>
                     </div>
                     <div className="ourevent_card_space">
                        <div className="ourevent_card">
                           <div className="ourevent_card_img">
                              <img src={Ourevent3} alt="Ourevent3" />
                           </div>
                           <div className="ourevent_card_text">
                              <p>Talks and Performance</p>
                           </div>
                        </div>
                     </div>
                     <div className="ourevent_card_space">
                        <div className="ourevent_card">
                           <div className="ourevent_card_img">
                              <img src={Ourevent4} alt="Ourevent4" />
                           </div>
                           <div className="ourevent_card_text">
                              <p>200 Hours Hatha Yoga Teacher</p>
                           </div>
                        </div>
                     </div>
                     <div className="ourevent_card_space">
                        <div className="ourevent_card">
                           <div className="ourevent_card_img">
                              <img src={Ourevent2} alt="Ourevent2" />
                           </div>
                           <div className="ourevent_card_text">
                              <p>50 Hours Vinyasa Yoga Teacher</p>
                           </div>
                        </div>
                     </div>
                  </Slider>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Ourevent;
