import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, } 
        from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaSchool} from 'react-icons/fa';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='2021 - 2022'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<FaSchool/>}> 
        <h3 className='vertical-timeline-element-title'>
          My Random High School, Random Place, Random State
        </h3>
        <p>High School Diploma </p>
        </VerticalTimelineElement>
             <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='2021 - 2022'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<FaSchool/>}> 
        <h3 className='vertical-timeline-element-title'>
          My Random High School, Random Place, Random State
        </h3>
        <p>High School Diploma </p>
             </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='2021 - 2022'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<FaSchool/>}> 
        <h3 className='vertical-timeline-element-title'>
          My Random High School, Random Place, Random State
        </h3>
        <p>High School Diploma </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience

