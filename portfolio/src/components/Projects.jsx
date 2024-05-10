import React from 'react'
import Project from './Project'
import './styles/Projects.css'

export default function Projects() {
    const projects = [{
        name: "To do list",
        description: 
        "Simple to do list application made with vanilla javascript.dasijdasjdasidjasiodjanoinozxcnzicnsaoicascadsadadadad. fisahfiaojhfiaofhjasifojaiotion made with vanilla javascript.dasijdasjdasidjasiodjanoinozxcnzicnsaoicascadsadadadad. fisahfiaojhfiaofhjasifojaiotion made with vanilla javascript.dasijdasjdasidjasiodjanoinozxcnzicnsaoicascadsadadadad. fisahfiaojhfiaofhjasifojaiotion made with vanilla javascript.dasijdasjdasidjasiodjanoinozxcnzicnsaoicascadsadadadad. fisahfiaojhfiaofhjasifojaiotion made with vanilla javascript.dasijdasjdasidjasiodjanoinozxcnzicnsaoicascadsadadadad. fisahfiaojhfiaofhjasifojaiotion made with vanilla javascript.dasijdasjdasidjasiodjanoinozxcnzicnsaoicascadsadadadad. fisahfiaojhfiaofhjasifojaio",

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
}
