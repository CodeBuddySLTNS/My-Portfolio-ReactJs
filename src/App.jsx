import Header from './components/header/header.jsx'
import Navigate from './components/nav/navigate.jsx'
import About from './components/about/about.jsx'
import Skills from './components/skills/skills.jsx'
import Projects from './components/projects/projects.jsx'
import Contact from './components/contact/contact.jsx'
import Certs from './components/certs/certs.jsx'


const App = ()=>{
  return(
      <div className='container'>
        <Header/>
        <Navigate/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    )
}

export default App