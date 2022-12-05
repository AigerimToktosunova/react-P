import React from 'react'
import Pro1 from '../image/Pro1.jpg'
import Proj2 from '../image/proj2.jpg'
import Proj3 from '../image/proj3.jpg'
import Proj4 from '../image/proj4.png'
import '../styles/Project.css'

function Projects() {
  return (
    <div className='projects'>
      <h2> My Personal Projects</h2>
      <div className='projectlist'>
        <div className='projectitem'>
           <img src={Pro1} alt="website"/>
        </div>
     
      <div className='projectitem'>
         <img src={Proj2} alt="website"/>
      </div>
      <div className='projectitem'>
         <img src={Proj3} alt="website"/>
      </div>
      <div className='projectitem'>
         <img src={Proj4} alt="website"/>
      </div> 
      </div>
    </div>
  )
}

export default Projects
