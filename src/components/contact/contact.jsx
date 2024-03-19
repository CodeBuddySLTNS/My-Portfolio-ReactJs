import './contact.css'
import { FaYoutube, FaGithub, FaFacebook, FaPhoneAlt } from "react-icons/fa"

const Contact = ()=>{
  return(
      <section id='contact'> 
        <h5>Reach me out</h5>
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
            <FaFacebook className='icon'/>
            <FaYoutube className='icon'/>
            <FaGithub className='icon'/>
          </div>
        </div>
      </section>
    )
}

export default Contact