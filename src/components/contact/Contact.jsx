import React, { useState } from 'react'
import "./contact.css"
import { Container, Row, Col } from 'react-bootstrap'
import envelopeImg from "../../assets/img/envelope-img.png"
import sgMail from '@sendgrid/mail'

const Contact = () => {
   const formInitialDetails = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   }
   sgMail.setApiKey(`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`);

   const msg = {
      to: 'alex.rentz@outlook.com',
      from: 'alex.rentz@outlook.com', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
   };
   //ES6
   const handleSubmit = async (e) => {
      e.preventDefault()
      console.log('sent')

      try {
         await sgMail.send(msg);
         // Success
      } catch (error) {
         console.error(error);

         if (error.response) {
            console.error(error.response.body);
         }
      }
   };










   const [formDetails, setFormDetails] = useState(formInitialDetails)
   const [buttonText, setButtonText] = useState('Send')
   const [status, setStatus] = useState({})

   const onFormUpdate = (category, value) => {
      setFormDetails({
         ...formDetails,
         [category]: value
      })
   }

   // const handleSubmit = async (e) => {
   //    e.preventDefault();
   //    setButtonText("Sending...");

   //    try {
   //       let response = await fetch("https://api.sendgrid.com/v3/mail/send", {
   //          method: "POST",
   //          headers: {
   //             "Content-Type": "application/json;charset=utf-8",
   //          },
   //          body: JSON.stringify(formDetails),
   //       });

   //       let result = await response.json();

   //       if (response.ok) {
   //          setStatus({ success: true, message: "Message Sent!" });
   //       } else {
   //          setStatus({ success: false, message: "Something went wrong" });
   //       }
   //    } catch (error) {
   //       setStatus({ success: false, message: "An error occurred" });
   //    } finally {
   //       setButtonText("Send");
   //       setFormDetails(formInitialDetails);
   //    }
   // };

   return (
      <section className="contact" id="connect">
         <Container className="contact-container">
            <Row className="align-items-center">
               <Col md={6} className="img-container">
                  <img className="contact-main-img" src={envelopeImg} alt="Contact Us" />
               </Col>
               <Col className="contact-form-container">
                  <h2>Get In Touch</h2>
                  <form onSubmit={(e) => handleSubmit(e)}>
                     <Row>
                        <Row sm={6} className="px-1">
                           <div className="input-container">
                              <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                           </div>
                        </Row>
                        <Row sm={6} className="px-1">
                           <div className="input-container">
                              <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                           </div>
                        </Row>
                        <Row sm={6} className="px-1">
                           <div className="input-container">
                              <input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                           </div>
                        </Row>
                        <Row sm={6} className="px-1">
                           <div className="input-container">
                              <input type="tel" value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                           </div>
                        </Row>
                        <Row className="px-1">
                           <div className="input-container">
                              <textarea rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                           </div>
                           <div className="input-container contact-button">
                              <button type="submit"><span>{buttonText}</span></button>
                           </div>
                        </Row>
                        {status.message &&
                           <Col>
                              <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                           </Col>
                        }
                     </Row>
                  </form>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Contact
