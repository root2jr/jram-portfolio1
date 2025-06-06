import React, { useRef } from 'react'
import './Projects.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
   const headRef = useRef(null);
   const textRef1 = useRef(null);
   const textRef2 = useRef(null);
   const textRef3 = useRef(null);
   const textRef4 = useRef(null);
   const textRef5 = useRef(null);
   const textRef6 = useRef(null);
   const textRef7 = useRef(null);
   const textRef8 = useRef(null);
   const textRef9 = useRef(null);
   const textRef10 = useRef(null);
   const textRef11 = useRef(null);
   const textRef12 = useRef(null);
   const textRef13 = useRef(null);
   const textRef14 = useRef(null);
   const textRef15 = useRef(null);
   useGSAP(() => {
      gsap.fromTo(headRef.current, { translateY: -100, opacity: 0 }, {
         translateY: 0, opacity: 1, scrollTrigger: {
            trigger: headRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef1.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef1.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef2.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef2.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef3.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef3.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef4.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef4.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef5.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef5.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef6.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef6.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef7.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef7.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef8.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef8.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef9.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef9.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef10.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef10.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef11.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef11.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef12.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef12.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef13.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef13.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef14.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef14.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
      gsap.fromTo(textRef15.current, { opacity: 0 }, {
         opacity: 1, scrollTrigger: {
            trigger: textRef15.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse'
         }
      })
   }, [])




   return (
      <div id='projects' className='projects'>
         <h1 ref={headRef}>MY <span>PROJECTS</span></h1>
         <div className="pro-container">
           <a href='https://j-a-r-v-i-s-ai.netlify.app'> <div className="proo">
               <div className="pro-1">
                  <h1 ref={textRef1}>Project 1</h1>
                  <h2 ref={textRef2}>JARVIS AI</h2>
                  <p ref={textRef3}>JARVIS AI is a full-stack virtual assistant using React, Express.js, and MongoDB for smart, natural language interactions. It supports voice input, reminders, task management, and real-time notifications. The system integrates Gemini API and node-cron to deliver contextual AI responses and timely alerts.</p>
               </div>
               <div className="pro-bggg">

               </div>
            </div>  </a>
          <a href='https://iphone-18.netlify.app'>  <div className="proo">
               <div className="pro-bgggg">
               </div>
               <div className="pro-1">
                  <h1 ref={textRef4} >Project 2</h1>
                  <h2 ref={textRef5}>iPhone Website Replica</h2>
                  <p ref={textRef6}>This project is a pixel-perfect frontend replica of Apple’s iPhone 15 landing page, built using HTML, CSS, and JavaScript. It mirrors Apple’s sleek design language, responsive layout, and smooth animations. The site showcases strong UI/UX skills and attention to visual detail.</p>

               </div>
            </div></a>
            <div className="proo">
               <div className="pro-1">
                  <h1 ref={textRef7}>Project 3</h1>
                  <h2 ref={textRef8}>Portfolio Website Project</h2>
                  <p ref={textRef9}>This portfolio website showcases my skills, projects, and achievements in web development. It highlights my proficiency in coding, design, and problem-solving. The site features an intuitive layout for easy navigation and seamless user experience. Explore my work and get in touch for potential collaborations!</p>
               </div>
               <div className="pro-bgg">

               </div>
            </div>
            <div className="proo">
               <div className="pro-bg">

               </div>
               <div className="pro-1">
                  <h1 ref={textRef10}>Project 4</h1>
                  <h2 ref={textRef11}>Jarvis Android</h2>
                  <p ref={textRef12}>Jarvis Android is a smart personal assistant app built with React Native and Node.js. It features task management, reminders, voice interaction, and real-time notifications—designed to feel like both a friend and an assistant.It’s optimized for Android and built for long-term personal use.</p>

               </div>
            </div>
            <div className="proo">
               <div className="pro-1">
                  <h1 ref={textRef13}>Project 5</h1>
                  <h2 ref={textRef14}>Portfolio Website Project</h2>
                  <p ref={textRef15}>This portfolio website showcases my skills, projects, and achievements in web development. It highlights my proficiency in coding, design, and problem-solving. The site features an intuitive layout for easy navigation and seamless user experience. Explore my work and get in touch for potential collaborations!</p>
               </div>
               <div className="pro-bg">

               </div>
            </div>
         </div>
      </div>
   )
}

export default Projects