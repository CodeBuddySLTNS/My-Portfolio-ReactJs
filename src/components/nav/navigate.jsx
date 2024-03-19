import './nav.css'
import {useState} from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

const Navigate = ()=>{
  const [active, setactive] = useState('#')
  return(
      <nav>
        <a href='#' className={active=='#'?'active':''} onClick={()=>{setactive('#')}}>
          <IoHomeSharp className='navIcon' />
        </a>
        <a href='#about' className={active=='#about'?'active':''} onClick={()=>{setactive('#about')}}>
          <FaUser className='navIcon'/>
        </a>
        <a href='#skill' className={active=='#skill'?'active':''} onClick={()=>{setactive('#skill')}}>
          <FaBook className='navIcon'/>
        </a>
        <a href='#projects' className={active=='#projects'?'active':''} onClick={()=>{setactive('#projects')}}>
          <FaTasks className='navIcon'/>
        </a>
        <a href='#contact' className={active=='#contact'?'active':''} onClick={()=>{setactive('#contact')}}>
          <BiSolidContact className='navIcon'/>
        </a>
      </nav>
    )
}

export default Navigate