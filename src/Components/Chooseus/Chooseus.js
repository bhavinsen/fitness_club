import React from "react";
import "./Chooseus.scss";
import chooseussidepattern from "../../Assets/Images/chooseussidepattern.png";
import Servicetitlepattern from "../../Assets/Images/servicetitlepattern.png";
import Chooseusimg from "../../Assets/Images/chooseusimg.png";
import { Button, Container } from "react-bootstrap";

function Chooseus() {
   return (
      <div className="chooseus_wrap">
         <div className="chooseus_sidepattern">
            <img src={chooseussidepattern} alt="chooseussidepattern" />
         </div>
         <Container>
            <div className="chooseus_main">
               <div className="chooseus_title">
                  <h6>What We Do</h6>
                  <h1>Why Choose Us</h1>
                  <div className="servicetitlepattern_img">
                     <img src={Servicetitlepattern} alt="Servicetitlepattern" />
                  </div>
               </div>
               <div className="chooseus_main_content">
                  <div className="chooseus_img">
                     <img src={Chooseusimg} alt="Chooseusimg" />
                  </div>
                  <div className="chooseus_text">
                     <h2>Better Life With Perfect Body</h2>
                     <p>
                        Designed with our members’ lifestyle in mind, we have
                        made it our business to keep fitness both convenient and
                        accessible in the heart of the Central Business
                        District, a mere 3 minutes walk from Bugis MRT. With two
                        group fitness studios and three dedicated personal
                        training studios, our group classes run throughout the
                        day 7 days a week. The first fully ventilated hot studio
                        in Singapore, the only hot personal training studio in
                        Asia, first class teachers ..…try us out today!we have
                        made it our business to keep fitness both convenient and
                        accessible.
                     </p>
                     <Button>Read More</Button>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Chooseus;
