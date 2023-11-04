import React from 'react'
import ProjectCard from "../projectCard/ProjectCard"
import { Container, Row, Col, Nav, NavItem, NavLink, TabContainer, TabPane, TabContent } from 'react-bootstrap'
import "./projects.css"
import forkAndKnifeThumbnail from "../../assets/img/fork_and_knife-logo.png"
import knightThumbnail3 from "../../assets/img/knight-4x.png"
import quizLogo from "../../assets/img/quiz-logo.png" 
import quizLogo2 from "../../assets/img/quiz-logo2.png" 
import projImg2 from "../../assets/img/project-img2.png"
import projImg3 from "../../assets/img/project-img3.png"
import colorSharp2 from "../../assets/img/color-sharp2.png"

const Projects = () => {
   const projects = [
      {
         title: "DiceQuest",
         description: "A fun game to showcase core JavaScript concepts. Check back in as this game is a work in progress",
         imgUrl: knightThumbnail3,
      },
    
      {
         title: "WiseGuy",
         description: "A web based quiz app which draws data from an API and renders it on screen",
         imgUrl: quizLogo2,
      },
        {
         title: "MyFeast",
         description: "Signup and install this as a PWA to have your own private, secure shopping list stored on Google Firebase.",
         imgUrl: forkAndKnifeThumbnail,
      },
   ];

   return (
      <section className="project" id="projects">
         <Container>
            <Row>
               <Col>
                  <h2>Projects</h2>
                  <p>Each project within my portfolio serves as a distinct showcase of my abilities, encompassing tasks such as API integrations, secure authentication and interaction with Cloud Databases, and a firm grasp of fundamental JS concepts</p>
                  <TabContainer id="projects-tabs" defaultActiveKey="first">
                     <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                        <NavItem >
                           <NavLink eventKey="first">Tab One</NavLink>
                        </NavItem>
                        <NavItem >
                           <NavLink eventKey="second">Tab Two</NavLink>
                        </NavItem>
                        <NavItem >
                           <NavLink eventKey="third">Tab Three</NavLink>
                        </NavItem>
                     </Nav>
                     <TabContent>
                        <TabPane eventKey="first">
                           <Row>
                              {projects.map((project, index) => {
                                 return (
                                    <ProjectCard

                                       key={index}
                                       {...project}
                                    />
                                 )
                              })}
                           </Row>
                        </TabPane>
                        <TabPane eventKey="second">Under construction...</TabPane>
                        <TabPane eventKey="third">More to come...</TabPane>
                     </TabContent>
                  </TabContainer>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2} />
      </section>
   )
}

export default Projects