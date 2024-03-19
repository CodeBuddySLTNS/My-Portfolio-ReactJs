import './about.css'

const About = ()=>{
  return(
      <section id='about'>
        <h5>Getting to know</h5>
        <h2>About Me</h2>
        <div className='aboutMessage'>
          <p>
            I am passionate about frontend development and have a basic knowledge about backend.
          </p>
          <p>
            I enjoy embracing challenges and expanding my knowledge by learning new technologies and remaining open-minded about various tech stacks.
          </p>
          <p>
            In my spare time, I tend to develop web applications that I'm interested with. I look for projects that present challenges or require a meaningful solution to a problem.
          </p>
          <p>
            One last thing, I'm available for <strong><em>freelance</em></strong> work, so feel free to reach me out and say hello!
          </p>
        </div>
      </section>
    )
}

export default About