import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Services from './Services.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Services />
    <Projects />
    <About />
    <Contact />
    <Form />
  </StrictMode>
)
