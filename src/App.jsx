import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import NavBar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Skills from './components/skills/skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
   return (
      <div className="app">
         <NavBar />
         <Banner />
         <Skills /> 
         <Projects />
         <Contact />
         <Footer />
      </div>
   )
}

export default App
