import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Contactform.scss";

function Contactform() {
   return (
      <>
         <div className="all-input">
            <div className="contact-input">
               <InputGroup className="Name-input">
                  <FormControl
                     placeholder="Enter Name *"
                     aria-describedby="basic-addon1"
                  />
               </InputGroup>
            </div>
            <div className="contact-input">
               <InputGroup className="Name-input">
                  <FormControl
                     placeholder="Enter Email *"
                     aria-describedby="basic-addon1"
                  />
               </InputGroup>
            </div>
         </div>
         <div className="subject-input">
            <InputGroup className="Enter-input">
               <FormControl
                  placeholder="Enter Name *"
                  aria-describedby="basic-addon1"
               />
            </InputGroup>
         </div>
         <div className="message-input">
            <textarea placeholder="Message *"></textarea>
         </div>
         <div className="contact-button">
            <Button>Submit</Button>
         </div>
      </>
   );
}

export default Contactform;
