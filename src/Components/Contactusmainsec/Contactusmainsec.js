import React from "react";
import { Container } from "react-bootstrap";
import "./Contactusmainsec.scss";

function Contactusmainsec() {
   return (
      <div className="contactusmainsec_wrap">
         <Container>
            <div className="contactus_path">
               <p>
                  <a href="/">Home</a> // <a href="/contactus">Contact Us</a>
               </p>
            </div>
         </Container>
      </div>
   );
}

export default Contactusmainsec;
