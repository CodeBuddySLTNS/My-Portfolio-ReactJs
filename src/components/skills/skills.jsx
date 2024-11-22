import './skills.css'

const Skills = () => {
  const data = [
    {devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',name:'HTML', isClass: false}, 
    {devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', name:'CSS', isClass: false}, 
    {devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name:'JavaScript', isClass: false}, 
    {devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', name:'MongoDB', isClass: false},
    {devicon: 'devicon-express-original', name:'Express', isClass: true},
    {devicon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', name:'ReactJs', isClass: false}, 
    {devicon: 'devicon-nodejs-plain-wordmark', name:'NodeJs', isClass: true}
  ];

  return(
      <section id='skill'>
        <h5>Preferred</h5>
        <h2>Skills</h2>
        <div className='skillSet'>
          <p>Frontend and Backend</p>
          <div className="stacks">
            {data.map( (d) => (
            <div className='stack'>
              { d.isClass ? 
                <i className={d.devicon}></i> :
                <img src={d.devicon} />
              }
              <p>{d.name}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Skills