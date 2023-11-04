import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import htmlCssJsLogo from "./htmlcssjs.png"
import reactLogo from "../../assets/img/react.png"
import azureLogo from "../../assets/img/azure-logo.png"
import tailwindLogo from "../../assets/img/tailwind-logo.png"
import m365Logo from "../../assets/img/m365-logo.png"
import firebaseLogo from "../../assets/img/firebase-logo.png"
import sharepointLogo from "../../assets/img/sharepoint-logo.png"
import colorSharp from "../../assets/img/color-sharp.png"

import "./skills.css"

const Skills = () => {
   const responsive = {
      superLargeDesktop: {
         breakpoint: { max: 4000, min: 3000 },
         items: 5
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1
      }
   }

   return (
      <section className="skills" id="skills">
         <Container>
            <Row>
               <Col>
                  <div className="skills-bx">
                     <h2>Skills</h2>
                     <p>Beginning my career in the MSP i gained great exposure to all things technology.<br />Eager to enhance my skill set I delved into programming languages with a keen interest in JS/React</p>
                     <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                           <div className="img-ctr
                           ">

                              <img className="react-logo" src={reactLogo} alt="Image" />
                           </div>
                           <h5>React</h5>
                        </div>
                        <div className="item">
                           <div className="img-ctr
                           ">

                              <img src={htmlCssJsLogo} alt="Image" />
                           </div>
                           <h5>HTML • CSS • JS</h5>
                        </div>
                        <div className="item">
                           <div className="img-ctr
                           ">

                              <img src={azureLogo} alt="Image" />
                           </div>
                           <h5>Azure</h5>
                        </div>
                        <div className="item">
                           <div className="img-ctr
                           ">

                              <img src={m365Logo} alt="Image" />
                           </div>
                           <h5>M365</h5>
                        </div>
                        <div className="item">
                           <div className="img-ctr
                           ">

                              <img src={tailwindLogo} alt="Image" />
                           </div>
                           <h5>Tailwind CSS</h5>
                        </div>
                        <div className="item">
                           <div>
                              <img src={firebaseLogo} alt="Image" />

                           </div>
                           <h5>Google Firebase</h5>
                        </div>
                        <div className="item">
                           <div className="img-ctr
                           ">

                              <img src={sharepointLogo} alt="Image" />
                           </div>
                           <h5>SharePoint</h5>
                        </div>
                     </Carousel>
                  </div>
               </Col>
            </Row>
         </Container>
         <img className="background-image-left" src={colorSharp} />
      </section>
   )
}

export default Skills