import React, { useState, useEffect } from 'react'
import "./navbar.css"
import { Navbar, Container, Nav } from 'react-bootstrap'
import aprLogo from "../../assets/img/apr-logo2.png"
import navIcon1 from "../../assets/img/nav-icon1.svg"
import githubLogo from "../../assets/img/github-logo.svg"

const NavBar = () => {
   const [activeLink, setActiveLink] = useState('home')
   const [scrolled, setScrolled] = useState(false)
   const [open, setOpen] = useState(false)

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true)
         } else setScrolled(false)
      }

      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)
   }, [])

   const onUpdateActiveLink = (value) => {
      setActiveLink('value')
   }

   const toggler = (myFunction) => {
      myFunction( prev => !prev)
   }

   return (
      <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
         <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => toggler(setOpen)} aria-expanded={open}>
               <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <div className="social-icon">
                     <a href="#"><img src={navIcon1} alt="" /></a>
                     <a href="#"><img src={githubLogo} alt="" /></a>
                  </div>
                  {/* <button className="vvd" onClick={() => console.log('connect')}><a href="#connect" ><span>Let's Connect</span></a></button> */}
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar
