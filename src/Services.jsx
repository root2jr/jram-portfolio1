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
                      <h1>FRONT-END</h1>
                      <p>I create responsive, high-performance user interfaces using React and Tailwind CSS. My focus is on clean component architecture, smooth UX, and scalable code. I ensure cross-browser compatibility and seamless API integration. Every UI is built to feel intuitive and fast, with attention to detail in both logic and layout.</p>
                </div></li>
                <li><div className="l-1">
                      <img src={logoImg}></img>
                      <h1>BACK-END</h1>
                      <p>I build RESTful APIs using Node.js and Express, structuring modular backend systems for speed and security. I handle middleware, route handling, and authentication with JWT. My code ensures smooth client-server communication and efficient data flow. I prioritize clean architecture and maintainable code for long-term scalability.</p>
                </div></li>
                <li><div className="l-1">
                      <img src={logoImg}></img>
                      <h1>DATABASE</h1>
                      <p>I manage MongoDB databases with Mongoose, designing optimized schemas and handling complex queries. From CRUD operations to aggregation pipelines, I ensure data integrity and performance. The database layer is tightly integrated with backend services. I focus on efficient data modeling and indexing for fast, reliable access.</p>
                </div></li>
            </ul>
        </div>
    </div>
  )
}

export default Services