import './projects.css'
import scImg from '../../assets/sC.jpg'
import firstWeb from '../../assets/web1.jpg'

const Projects = ()=>{
  
  const projects = [
      {
        img:scImg, 
        title:'Simple Interest Calculator',
        body:'A functional simple interest calculator that can solve for interest, principal, rate, and time.',
        link:'Simple Interest.html'
      },
      {
        img:firstWeb,
        title:'My First Portfolio ',
        body:'This was my first portfolio uploaded online. You can check this out, still available online.',
        link:'https://renzcole.great-site.net/'
      }
    ]
  return(
      <section id='projects'>
        <h5>Passion crafted</h5>
        <h2>Projects</h2>
        
        <div className='projects'>
          {projects.map((project)=>(
            
          <div className='project'>
            <img src={project.img}/>
            <div className='projectInfo'>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </div>
            <a href={project.link}className='linkBtn' target='_blank'>Live Demo</a>
          </div>
          
          ))}
        </div>
      </section>
    )
}

export default Projects