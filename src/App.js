import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="FixItFast: On road vehicle service"
        projectDesc="A one-stop solution for reparing your vehicle on road or at your doorstep"
        projectLink="https://github.com/Y-coderr/FixItFast"
        deployedProjectLink=""
        projectImg={require('./images/projectFixitFast.jpg')}
      />

      <ProjectCard
        projectTitle="Siddhesh Decor: A Home Decor Website"
        projectDesc="Its a live project developed based on client requirment which helps their customer get there quotation for an home decoration."
        projectLink="https://github.com/Y-coderr/siddheshdecor"
        deployedProjectLink="https://siddheshdecor.netlify.app/"
        projectImg={require('./images/projectSiddheshDecor.png')}
      />

      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
