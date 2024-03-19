import './skills.css'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'


const Skills = ()=>{
  const data = [{stack:html,name:'HTML'}, {stack:css, name:'CSS'}, {stack:js, name:'JavaScript'}, {stack:react, name:'ReactJs'}, {stack:node, name:'NodeJs'}];

  return(
      <section id='skill'>
        <h5>Preferred</h5>
        <h2>Skills</h2>
        <div className='skillSet'>
          {data.map( (d) => (
          <div className='eachStack'>
            <img src={d.stack}/>
            <p>{d.name}</p>
          </div>
          ))}
          
        </div>
      </section>
    )
}

export default Skills