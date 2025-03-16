import React, { useRef } from 'react'
import './Contact.css'
import instaLogo from './instagram-logo.png'
import snapLogo from './Snapchat-Logo.jpg'
import whatsappLogo from './whatsapp.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

   const contactRef = useRef(null);
   const contactRef1 = useRef(null);
   const contactRef2= useRef(null);
   const contactRef3 = useRef(null);
   useGSAP(() =>{
     gsap.fromTo(contactRef.current,{opacity:0},{opacity:1,direction:screenLeft,scrollTrigger:{
        trigger:contactRef.current,
        start:'top 60%',
        toggleActions:'play none none reverse'
     }})
     gsap.fromTo(contactRef1.current,{opacity:0},{opacity:1,direction:screenLeft,delay:.5,scrollTrigger:{
        trigger:contactRef1.current,
        start:'top 60%',
        toggleActions:'play none none reverse'
     }})
     gsap.fromTo(contactRef2.current,{opacity:0},{opacity:1,direction:screenLeft,delay:1,scrollTrigger:{
        trigger:contactRef2.current,
        start:'top 60%',
        toggleActions:'play none none reverse'
     }})
     gsap.fromTo(contactRef3.current,{opacity:0},{opacity:1,direction:screenLeft,delay:1.5,scrollTrigger:{
        trigger:contactRef3.current,
        start:'top 60%',
        toggleActions:'play none none reverse'
     }})
   },[])





  return (
    <div id='contact' className='contact'>
        <h1 ref={contactRef}> CONTACT <span>INFO</span></h1>
        <div className="c-container">
            <ul>
                <li ref={contactRef1}><a href='https://www.instagram.com/itz_jram18/'><div className="c-1">
                       <img src={instaLogo}></img>
                       <h1>Instagram</h1>
                       <p>@itz_jram18</p>
                    </div></a></li>
                <li ref={contactRef2}><a href='https://www.snapchat.com/itz_jram18'><div className="c-1">
                       <img src={snapLogo}></img>
                       <h1>Snapchat</h1>
                       <p>@itz_jram18</p>
                    </div></a></li>
                <li ref={contactRef3}><a href='https://web.whatsapp.com/'><div className="c-1">
                       <img src={whatsappLogo}></img>
                       <h1>WhatsApp</h1>
                       <p>@itz_jram18</p>
                    </div></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Contact