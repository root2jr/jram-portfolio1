import './App.css'

function App() {

  function nav(){
    let a = document.getElementById('nav');
    a.classList.toggle('slide');
  }


  return (
    <>
       <div className="main">
          <div id='nav' className="nav-bar">
            <div className="nav">
               <button onClick={nav}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <ul>
                   <a href='#' onClick={nav}><li>HOME</li></a>
                   <a href='#services' onClick={nav}><li>SERVICES</li></a>
                   <a href='#' onClick={nav}><li>PROJECTS</li></a>
                   <a href='#' onClick={nav}><li>CONTACT</li></a>
               </ul>
          </div>
           <div className="bg">
                  <nav>
                     <a href='#'><h1>J<span>A</span>YR<span>A</span>M</h1></a>  
                      
                     <div className="ball" onClick={nav}>
                         <h2><i class="fa-solid fa-bars-staggered"></i></h2>  
                    </div>                      
                  </nav>
                  <div className="text">
                      <h1>HELLO,<br/>MY NAME IS<br/><span>JAYRAM</span></h1>
                      <a href='#'><button>PORTFOLIO</button></a>
                  </div> 
           </div>
       </div>
    </>
  )
}

export default App
