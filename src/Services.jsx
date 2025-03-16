import React, { useRef } from 'react'
import './Services.css'
import logoImg from './services-logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const oneRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);


  useGSAP(() => {
      gsap.fromTo( oneRef.current,{translateY:-100,opacity:0},{translateY:0,opacity:1,scrollTrigger:{
        trigger:oneRef.current,
        start:'top 70%',
        toggleActions:'play none none reverse'
      }} )
      gsap.fromTo( secondRef.current,{translateY:-100,opacity:0},{translateY:0,opacity:1,scrollTrigger:{
        trigger:secondRef.current,
        start:'top 60%',
        toggleActions:'play none none reverse'
      }} )
      gsap.fromTo( thirdRef.current,{opacity:0},{opacity:1,scrollTrigger:{
        trigger:thirdRef.current,
        start:'top 40%',
        toggleActions:'play none none reverse'
      }} )
  },[])






  return (
    <div id='services' className='services'>
        <h1 ref={oneRef}>SERV<span>I</span>CES</h1>
        <p ref={secondRef}>As a Full Stack Devoloper. Im able to create applications with both <br />
        Front End Development and Back End Development!</p>
        <div ref={thirdRef} className="services-list">
            <ul>
                <li><div className="l-1">
                      <img src={logoImg}></img>
                      <h1>WEB DESIGN</h1>
                      <p>This portfolio website showcases my skills, projects, and achievements in web development. It highlights my proficiency in coding, design, and problem-solving. The site features an intuitive layout for easy navigation and seamless user experience. Explore my work and get in touch for potential collaborations! MY PROJECTS</p>
                </div></li>
                <li><div className="l-1">
                      <img src={logoImg}></img>
                      <h1>WEB DESIGN</h1>
                      <p>This portfolio website showcases my skills, projects, and achievements in web development. It highlights my proficiency in coding, design, and problem-solving. The site features an intuitive layout for easy navigation and seamless user experience. Explore my work and get in touch for potential collaborations! MY PROJECTS</p>
                </div></li>
                <li><div className="l-1">
                      <img src={logoImg}></img>
                      <h1>WEB DESIGN</h1>
                      <p>This portfolio website showcases my skills, projects, and achievements in web development. It highlights my proficiency in coding, design, and problem-solving. The site features an intuitive layout for easy navigation and seamless user experience. Explore my work and get in touch for potential collaborations! MY PROJECTS</p>
                </div></li>
                <li><div className="l-1">
                      <img src={logoImg}></img>
                      <h1>WEB DESIGN</h1>
                      <p>This portfolio website showcases my skills, projects, and achievements in web development. It highlights my proficiency in coding, design, and problem-solving. The site features an intuitive layout for easy navigation and seamless user experience. Explore my work and get in touch for potential collaborations! MY PROJECTS</p>
                </div></li>
            </ul>
        </div>
    </div>
  )
}

export default Services