import React from 'react'
import {FaInstagramSquare } from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import '../styles/Footer.css';



function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <FaInstagramSquare/>
        <FaTwitterSquare/>
        <FaFacebookSquare/>
        <FaLinkedin/>
      </div>
      <p> &copy; 2022 aigerimdev.com</p>
    </div>
  )
}

export default Footer
