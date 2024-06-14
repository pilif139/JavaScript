import './styles/Project.css'
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