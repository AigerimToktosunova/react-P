import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import "../styles/Navbar.css";
import { FiAlignJustify } from "react-icons/fi";


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const Location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [Location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'> 
         <button onClick={() => {
            setExpandNavbar((prev) => !prev);
         }}>
             <FiAlignJustify /></button>
      </div>
      <div className='Links'>
         <Link to={"/"}> Home </Link>
         <Link to={"/projects"}> Projects </Link>
         <Link to={"/experience"}> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar
