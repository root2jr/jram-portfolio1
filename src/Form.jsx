import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import axios from 'axios';
import './Form.css';

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });

  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);
  const formRef4 = useRef(null);
  const formRef5 = useRef(null);
  const formRef6 = useRef(null);
  const formRef7 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(formRef1.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef1.current, start: 'top 60%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(formRef2.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef2.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(formRef3.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef3.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(formRef4.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef4.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(formRef5.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef5.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(formRef6.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef6.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(formRef7.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: formRef7.current, start: 'top 100%', toggleActions: 'play none none reverse' } });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`, formData);
      if (response.data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', number: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='form'>
      <h1 ref={formRef1}>CONTACT <span>ME</span></h1>
      <form onSubmit={handleSubmit}>
        <input ref={formRef2} type='text' placeholder='Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input ref={formRef3} type='email' placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input ref={formRef4} type='text' placeholder='Number' value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
        <textarea ref={formRef5} placeholder="What's Up?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
        <button ref={formRef6} type="submit">Submit</button>
      </form>
      <p ref={formRef7}>Copyright © 2020 jram. All rights reserved</p>
    </div>
  );
};

export default Form;
