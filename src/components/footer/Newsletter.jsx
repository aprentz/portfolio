import React, { useState, useEffect } from 'react'
import "./footer.css"
import { Col, Row } from 'react-bootstrap'

const Newsletter = ({ onValidated, status, message }) => {
   const [email, setEmail] = useState('')

   useEffect(() => {
      if (status === 'success') {
         clearFields()
      }
   }, [status])

   const handleSubmit = (e) => {
      e.preventDefault()
      email &&
         email.indexOf("@") > -1 &&
         onValidated({
            EMAIL: email
         })
   }

   const clearFields = () => {
      setEmail("")
   }

   return (
      <Col lg={12}>
         <div className="newsletter-bx">
            <Row className="newsletter-ctr">
               <Col lg={12} md={6} xl={5}>
                  <h3>Subscribe To Receive Project Updates</h3>
                  {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                  {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                  {status === "success" && <div style={{ color: "green" }}>Subscribed!</div>}
               </Col>
               <Col md={12} xl={7}>
                  <form onSubmit={handleSubmit} className="subscribe-form">
                     <div className="new-email-bx">
                        <input value={email} type="email" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value) }} />
                        <button type="submit" onClick={e => handleSubmit(e)}>Submit</button>
                     </div>
                  </form>
               </Col>
            </Row>
         </div>
      </Col>
   )
}

export default Newsletter