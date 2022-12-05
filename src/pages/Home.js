import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
     <div className='about'>
      <h2>Hi, My Name is Aigerim</h2>
      <div className='prompt'> 
           <p> A software developer with a passion for learning and creating</p>
      <BsInstagram/>
      <AiOutlineMail/>
      <AiFillGithub/>
      </div>
     </div>
     <div className='skills'>
         <h1>Skills</h1>
         <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span> ReactJS, Angular, Redux,  HTML, CSS, Bootstrap</span>
            </li>
            <li className='item'>
              <h2>React</h2>
              <span>ReactJS, Angular, Redux,  HTML, CSS, Bootstrap, Hodejs</span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span> JavaScript, JavaScript, JavaScript, JavaScript</span>
            </li>
         </ol>
     </div>
    </div>
  )
}

export default Home
