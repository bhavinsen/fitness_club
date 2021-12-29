import React from "react";
import "./Ourmission.scss";
import chooseussidepattern from "../../Assets/Images/chooseussidepattern.png";
import Servicetitlepattern from "../../Assets/Images/servicetitlepattern.png";
import Ourmissionimg from "../../Assets/Images/ourmission.png";
import Servicepattern from "../../Assets/Images/servicepattern.png";
import { Button, Container } from "react-bootstrap";

function Ourmission() {
   return (
      <div className="ourmission_wrap">
         <div className="ourmissionpattern">
            <img src={Servicepattern} alt="Servicepattern" />
         </div>
         <div className="ourmission_sidepattern">
            <img src={chooseussidepattern} alt="chooseussidepattern" />
         </div>
         <Container>
            <div className="ourmission_main">
               <div className="ourmission_title">
                  <h6>Mission</h6>
                  <h1>Our Mission</h1>
                  <div className="ourmission_img">
                     <img src={Servicetitlepattern} alt="Servicetitlepattern" />
                  </div>
               </div>
               <div className="ourmission_main_content">
                  <div className="ourmission_text">
                     <h2>Misson of One Wellness Fitness Club</h2>
                     <p>
                        We believe in the tangible and lasting changes to the
                        mind, body and spirit with the incorporation of a
                        fitness regime and aim to enhance the lifestyle of our
                        clients through innovative and exclusive wellness
                        programmes.
                        <br />
                        <br />
                        We believe in the tangible and lasting changes to
                        the mind, body and spirit with the incorporation of a
                        fitness regime and aim to enhance the lifestyle.
                     </p>
                     <Button>Read More</Button>
                  </div>
                  <div className="ourmission_img">
                     <img src={Ourmissionimg} alt="ourmission" />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Ourmission;
