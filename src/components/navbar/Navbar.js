import { useState } from 'react'
import "./Navbar.css"
import { AiOutlineRocket, AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  // Hide mobile menu icon initially
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  } 

  // Use this function to hide menu after a link is clicked
  const hideMenu = () => {
    setShowMenu(false);
  } 

  return (
    <nav className='container navbar'>
      {/* Create nice inline logo img */}
      <div className='logo'>
        <AiOutlineRocket color="fff" size={35} />
        <p className='logo-text'>Lucy.<span>com</span></p>
      </div>

      <menu>
        {/* Use id property to show or hide the mobile menu */}
        {/* When a link is clicked, hide the mobile menu */}
        <ul className='nav-links' id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
          <li onClick={hideMenu}><a href="#">Home</a></li>
          <li onClick={hideMenu}><a href="#">Features</a></li>
          <li onClick={hideMenu}><a href="#">Download</a></li>
          <li onClick={hideMenu}><a href="#">Subscribe</a></li>
          <li onClick={hideMenu} className='nav-btn'><a className="btn btn-orange" href="#">Get Started</a></li>
        </ul>
      </menu>

      {/* Div to hold hamburger icon and close icon. Use logic to see which icon to display & toggle on click */}
      <div className='menu-icons' onClick={toggleMenu}>
        {showMenu  ? (
          <RiCloseLine color="fff" size={27}/>
        ) : (
          <AiOutlineBars color="fff" size={27} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
