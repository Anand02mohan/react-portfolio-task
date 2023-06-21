import React from 'react'
import foodImage from "../assest/img/food.png"
import portImage from "../assest/img/portfolio.png"
import tempImage from "../assest/img/temperature.jpeg"
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className='project' id='project'>
          <h1 className='heading text-center'>Project</h1>
          <div className='project_content'>
            <ProjectCard name="Food Park" url="" img={foodImage}/>
            <ProjectCard name="Portfolio" url="" img={portImage}/>
            <ProjectCard name="Temperature Convertor" url="" img={tempImage}/>
          </div>
        </div>
  )
}

export default Project