import React, { useRef } from 'react'
import './about.css'
import aboutImg from './jram-about.png'
import jram from './_src_Jayaraman.pdf'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)
const About = () => {
  
    const aboutRef1 = useRef(null);
    const aboutRef2 = useRef(null);
    const aboutRef3 = useRef(null);
    const aboutRef4 = useRef(null);
    const aboutRef5 = useRef(null);
    
    useGSAP(() => {
          gsap.fromTo(aboutRef1.current,{opacity:0},{opacity:1,delay:0,scrollTrigger:{
            trigger:aboutRef1.current,
            start:'top 70%',
            toggleActions:'play none none reverse'
          }})
          gsap.fromTo(aboutRef2.current,{opacity:0},{opacity:1,delay:1,scrollTrigger:{
            trigger:aboutRef2.current,
            start:'top 70%',
            toggleActions:'play none none reverse'
          }})
          gsap.fromTo(aboutRef3.current,{opacity:0},{opacity:1,delay:2,scrollTrigger:{
            trigger:aboutRef3.current,
            start:'top 70%',
            toggleActions:'play none none reverse'
          }})
          gsap.fromTo(aboutRef4.current,{opacity:0},{opacity:1,delay:3,scrollTrigger:{
            trigger:aboutRef4.current,
            start:'top 70%',
            toggleActions:'play none none reverse'
          }})
          gsap.fromTo(aboutRef5.current,{opacity:0},{opacity:1,delay:4,scrollTrigger:{
            trigger:aboutRef5.current,
            start:'top 70%',
            toggleActions:'play none none reverse'
          }})
    },[])




  return (
    <div className='about'>
        <div className="ab-left">
            <img ref={aboutRef1} src={aboutImg}></img>
        </div>
        <div className="ab-right"> 
            <h1 ref={aboutRef2}>ABOUT <span>ME</span></h1>
            <h2 ref={aboutRef3}>Front-End Developer</h2>
            <p ref={aboutRef4}>Im P.V Jayaraman, I have completed a bacherlorates degree in Computer Science. Im a self taught Full Stack Developer but i've also completed necessary courses to be a Full Stack Developer.I have also attached the Certificates of the courses i have completed in this website.This Website is also one of the projects that i have done.</p>
            <a ref={aboutRef5} href={jram} download={jram}><button>DOWNLOAD RESUME</button></a>
       </div>
    </div>
  )
}

export default About