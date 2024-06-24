import './styles/Project.css'
<<<<<<< HEAD
import PropTypes from 'prop-types'

export default function Project({project}) {
  return (
    <div className='project-container'>
        <h2>{project.name}</h2>
        <div className='project-info'>
            <h3>{project.description}</h3>
            <a className='underline-ani' href={project.link} target='blank'>Link to code.</a>
            {project.hostlink && <a href={project.hostlink} target="blank">Link to page.</a>}
        </div>
    </div>
  )
}
Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    hostlink: PropTypes.string,
  }).isRequired,
};
=======
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
>>>>>>> 0d19f6fc1379de550211299fd2f1f5200faf78fc
