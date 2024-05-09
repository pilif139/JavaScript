import React from 'react'
import './Project.css'

export default function Project({project}) {
  return (
    <div className='project-container'>
        <h2>{project.name}</h2>
        <div className='project-info'>
            <h3>{project.description}</h3>
            <a className='underline-ani' href={project.link} target='blank'>Link to code.</a>
        </div>
    </div>
  )
}
