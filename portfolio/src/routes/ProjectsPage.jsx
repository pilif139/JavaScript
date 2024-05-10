import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import './styles/ProjectsPage.css'
import Hamburger from 'hamburger-react'

export default function ProjectsPage() {

  return (
    <div className="projects-page">
        <Hamburger onToggle={()=>{
          let navbarDisplay = document.querySelector(".navbar")
          if(navbarDisplay.style.opacity == 0){
            navbarDisplay.style.opacity=1;
            navbarDisplay.style.height="35vh";
            navbarDisplay.style.margin = "3em";
          }
          else{
            navbarDisplay.style.opacity=0;
            navbarDisplay.style.height=0;
            navbarDisplay.style.margin = 0;
          }

        }} />
        <Navbar/>
        <Projects/>
    </div>
  )
}
