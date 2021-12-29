import React from "react";
import "./Yogapicture.scss";
import Yogapicture1 from "../../Assets/Images/yogapicture1.png";
import Yogapicture2 from "../../Assets/Images/yogapicture2.png";
import Yogapicture3 from "../../Assets/Images/yogapicture3.png";
import Yogapicture4 from "../../Assets/Images/yogapicture4.png";
import Yogapicture5 from "../../Assets/Images/yogapicture5.png";
import { Button } from "react-bootstrap";

function Yogapicture() {
   return (
      <div className="yogapicture_wrap">
         <div className="left_content">
            <div className="first_img">
               <div className="yogapicture1">
                  <img src={Yogapicture1} alt="Yogapicture1" />
               </div>
               <div className="hovershow_content">
                  <div className="hovershow_text">
                     <h4>Yoga Postures</h4>
                     <p>
                        It is a long established fact that a reader will be
                        distracted
                     </p>
                     <Button variant="light">Read More</Button>
                  </div>
               </div>
            </div>
            <div className="first_img">
               <div className="yogapicture1">
                  <img src={Yogapicture2} alt="Yogapicture2" />
               </div>
               <div className="hovershow_content">
                  <div className="hovershow_text">
                     <h4>Yoga Postures</h4>
                     <p>
                        It is a long established fact that a reader will be
                        distracted
                     </p>
                     <Button variant="light">Read More</Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="right_content">
            <div className="top_img">
               <div className="first_img">
                  <div className="yogapicture3">
                     <img src={Yogapicture5} alt="Yogapicture5" />
                  </div>
                  <div className="hovershow_content">
                     <div className="hovershow_text">
                        <h4>Yoga Postures</h4>
                        <p>
                           It is a long established fact that a reader will be
                           distracted
                        </p>
                        <Button variant="light">Read More</Button>
                     </div>
                  </div>
               </div>
               <div className="first_img">
                  <div className="yogapicture3">
                     <img src={Yogapicture3} alt="Yogapicture3" />
                  </div>
                  <div className="hovershow_content">
                     <div className="hovershow_text">
                        <h4>Yoga Postures</h4>
                        <p>
                           It is a long established fact that a reader will be
                           distracted
                        </p>
                        <Button variant="light">Read More</Button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bottom_img">
               <div className="yogapicture4">
                  <img src={Yogapicture4} alt="Yogapicture4" />
               </div>
               <div className="hovershow_content">
                  <div className="hovershow_text">
                     <h4>Yoga Postures</h4>
                     <p>
                        It is a long established fact that a reader will be
                        distracted
                     </p>
                     <Button variant="light">Read More</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Yogapicture;
