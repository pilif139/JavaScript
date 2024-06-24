<<<<<<< HEAD
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
=======
import Project from './Project'
import './styles/Projects.css'

export default function Projects() {
    const projects = [{
        name: "To do list",
        description: 
        "Simple to do list applicat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error ea, modi quod reiciendis vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error ea, modi quod reiciendis vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error ea, modi quod reiciendis vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error ea, modi quod reiciendis vel.",

        link: "https://github.com/pilif139/JavaScript/tree/main/Todo%20List%20App",
    },
    {
        name: "To do list",
        description: "Simple to do list application made with vanilla javascript.",
        link: "https://github.com/pilif139/JavaScript/tree/main/Todo%20List%20App",
    },
    {
        name: "To do list",
        description: "Simple to do list application made with vanilla javascript.",
        link: "https://github.com/pilif139/JavaScript/tree/main/Todo%20List%20App",
    },
    {
        name: "To do list",
        description: "Simple to do list application made with vanilla javascript.",
        link: "https://github.com/pilif139/JavaScript/tree/main/Todo%20List%20App",
    },
    {
        name: "To do list",
        description: "Simple to do list application made with vanilla javascript.",
        link: "https://github.com/pilif139/JavaScript/tree/main/Todo%20List%20App",
    },
]

    return (
    <>
        <h1 className='underline-ani'>My Projects</h1>
        <div className='projects'>
            {projects.map((el,index)=> <Project key={index} project={projects[index]}/>)}
        </div>
    </>
  )
>>>>>>> 0d19f6fc1379de550211299fd2f1f5200faf78fc
}
