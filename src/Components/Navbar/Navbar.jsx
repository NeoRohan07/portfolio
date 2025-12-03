import React, { useRef } from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/rohan-logo.svg'
import under_line from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-400px";
  }
  return (
    <div className="navbar">
        <figure>
            <img src={logo} alt="logo" className='logo'/>
        </figure>
          <img src={menu_open} onClick={openMenu} alt="burger" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="close" className='nav-mob-close' />
            <li><a className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home"?<img src={under_line} alt=''/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></a>{menu==="about"?<img src={under_line} alt=''/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></a>{menu==="services"?<img src={under_line} alt=''/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></a>{menu==="portfolio"?<img src={under_line} alt=''/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu==="contact"?<img src={under_line} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect">
          <a className='anchor-link' offset={50} href='#contact'>
            Connect With Me
            </a>
        </div>
    </div>
  )
}

export default Navbar