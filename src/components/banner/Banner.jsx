import React, { useState, useEffect } from 'react';
import "./banner.css"
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import gif1 from '../../assets/img/gif1.gif';
import "animate.css"
import TrackVisibility from 'react-on-screen';
import useScreenWidth from '../../hooks/useScreenWidth';

const Banner = () => {
   const { width } = useScreenWidth()
   const [loopNum, setLoopNum] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const toRotate = ['React  ', 'Front End  ', 'JavaScript  ', 'Web Dev  '];
   const [text, setText] = useState("");
   const [delta, setDelta] = useState(500 - Math.random() * 100);
   const period = 200;
   const [toggle, setToggle] = useState(false)

   const handleClick = () => {
      setToggle(prev => !prev)
   }

   // Maintain scroll position
   const prevTextRef = React.useRef(text);
   useEffect(() => {
      prevTextRef.current = text;
   }, [text]);

   useEffect(() => {
      let ticker = setInterval(() => {
         tick();
      }, delta);

      return () => {
         clearInterval(ticker);
      };
   }, [text]);

   const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
         setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period);
      } else if (isDeleting && updatedText === '') {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
      }
   };

   return (
      <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
               <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <TrackVisibility>
                     {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                           <h1>Hi I'm Alex Rentz
                              <span className="wrap">
                                 <br /> {text || "\u00A0"}
                              </span>
                           </h1>
                        </div>}
                  </TrackVisibility>
                  <div className="banner-text">
                     <span>Passionate about coding. Hungry to learn. My{width < 600 && (
                        <>
                           <span className={toggle ? "hidden" : ""}>...</span>
                           <p onClick={handleClick} className={toggle ? "hidden read-more-btn" : "read-more-btn"}>...click to read more</p>
                        </>
                     )}
                        {width < 600 && <span className={toggle ? "" : "hidden"}> portfolio showcases my progress and achievements in the field of technology.</span>}
                        {width >= 600 && (
                           <span className=""> portfolio showcases my progress and achievements in the field of technology.</span>
                        )}
                     </span>
                  </div>
                  <a className="connect-link" href="#connect"><button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button></a>
               </Col>
               <Col xs={12} md={6} xl={5} className="banner-col-2">
                  <img className="animate__animated animate__fadeIn" src={gif1} alt="Infinity img" />
               </Col>
            </Row>
         </Container>
      </section >
   );
};

export default Banner;