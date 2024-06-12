import './styles/Project.css'
import { Link } from 'react-router-dom'

export default function Project({project}) {
  return (
      <div className='project-container'>
        <Link to="/project-code" className="linkToCode">
          <h2>{project.name}</h2>
          <div className='project-info'>
              <h3>{project.description}</h3>
              {/* <a className='underline-ani githubUrl' href={project.link} target='blank'>Link to code.</a> */}
          </div>
          </Link>
      </div>
  )
}
