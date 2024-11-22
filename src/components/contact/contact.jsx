import './contact.css'
import { FaYoutube, FaGithub, FaFacebook, FaPhoneAlt } from "react-icons/fa"

const Contact = ()=>{
  return(
      <section id='contact'> 
        <h5>Reach out</h5>
        <h2>Contacts</h2>
        <div className='contact'>
          <p className='contactDescription'>
            So what's next? Feel free to reach me out if you are looking for a developer, have a query, or simply want to connect.
          </p>
          <div className='contactDetails'>
            <p>Email: rcleo3233@gmail.com</p>
            <p>Phone: 09363926188</p>
          </div>
          
          
          <p className='socialInfo'>You can also find me on these platforms:</p>
          <div className='socials'>
            <a href="https://www.facebook.com/codebuddySolutions">
              <FaFacebook className='icon'/>
            </a>
            <a href="https://www.youtube.com/@CodeBuddySolutions">
              <FaYoutube className='icon'/>
            </a>
            <a href="https://github.com/CodeBuddySLTNS">
              <FaGithub className='icon'/>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Contact