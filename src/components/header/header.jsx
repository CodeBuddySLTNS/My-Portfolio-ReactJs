import './header.css'
import ME from '../../assets/ME.png'
import Resume from './resume'

const Header = ()=>{
  return(
      <section className='header'>
        <div className='head_name'>
          <h4>Hello I'm</h4>
          <h1>Renz Cole</h1>
          <h5>Frontend Web Developer</h5>
        </div>
        <Resume/>
        <div className='ME'>
          <img src={ME}/>
        </div>
      </section>
    )
}

export default Header