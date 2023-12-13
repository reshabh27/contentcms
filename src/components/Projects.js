import React from 'react'
import { useFetchProjects } from './fetchProjects'

export const Projects = () => {
  const {loading,projects} = useFetchProjects();
  // console.log(loading,projects);
  if(loading)
  {
    return (
      <section className='project'>
        <h2>Loading ...</h2>
      </section>
    );
  }
    // console.log(process.env.REACT_APP_SPACE);

  return (
    <section className='projects'>
      <h2>Projects</h2>
      <div className='projects-center'>
        {projects.map(project => {
          const {id,image,url,title} = project;
          return (
            <a key={id} href={url} target='_blank' rel='noreferrer' className='project'>
              <img src={image} alt="project" className='img'/>
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
