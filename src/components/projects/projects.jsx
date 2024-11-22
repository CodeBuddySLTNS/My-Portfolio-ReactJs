import './projects.css'
import p1 from '../../assets/SubjectSchedSystem.jpg'
import p2 from '../../assets/ELM.jpg'

const Projects = () => {
  
  const projects = [
      {
        img:p1, 
        title:'Subject Scheduling System',
        body:'A system that can detect conflicts to any subject schedules per department. Exports the schedules as word document (.docx).',
        tech: ['Express', 'Nodejs'],
        link:'https://subject-scheduling-system.onrender.com'
      },
      {
        img:p2,
        title:'E-Learning Materials Management System',
        body:'A system that manages E-Learning Materials in one place where students can view files online, share files via link, and even download files.',
        tech: ['MongoDB', 'Express', 'Nodejs'],
        link:'https://elm-management-system.onrender.com'
      }
    ]
  return(
      <section id='projects'>
        <h5>Passion crafted</h5>
        <h2>Projects</h2>
        
        <div className='projects'>
          {projects.map((project) => (
            
          <div className='project'>
            <img src={project.img}/>
            <div className='projectInfo'>
              <div>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <p>Tech: {project.tech.map((t) => t).join(', ')}</p>
              </div>
              <a href={project.link} className='linkBtn' target='_blank'>Live Demo</a>
            </div>
          </div>
          
          ))}
        </div>
      </section>
    )
}

export default Projects