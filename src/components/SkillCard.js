import React from 'react'
import "./SkillCardStyle.css";

import {DiGit,DiJava,DiSwift} from "react-icons/di";
import {SiVisualstudiocode, SiReact, SiSpringboot, SiSpring, SiIntellijidea, SiAndroidstudio } from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandPython} from "react-icons/tb";
import {IoLogoWindows, IoLogoNpm , IoLogoApple} from "react-icons/io"

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title='Java'><DiJava className='techLogo'/></abbr>
              <abbr title='Swift'><DiSwift className='techLogo'/></abbr>
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
            </div>                     
          </div>
          <div className="skill-box">
            <h2>Libraries and Frameworks</h2>
            <div className="skillset">
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo'/></abbr>
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
              <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
              <abbr title='Spring'><SiSpring className='techLogo'/></abbr>
              <abbr title='Spring Boot'><SiSpringboot className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoApple className='techLogo'/></abbr>
              <abbr title='Intellij idea'><SiIntellijidea className='techLogo'/></abbr>
              <abbr title='Android Studio'><SiAndroidstudio className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>

  )
}
