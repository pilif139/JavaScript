import { useEffect } from 'react'
import Project from './Project'
import './styles/Projects.css'
import { useState } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((res) => res.json())
            .then((data)=>setProjects(data));
    }, [])

    return (
        <>
            <h1 className='underline-ani'>My Projects</h1>
            <div className='projects'>
                {projects.length > 0 && projects.map((el, index) => <Project key={index} project={projects[index]} />)}
            </div>
        </>
    )
}
