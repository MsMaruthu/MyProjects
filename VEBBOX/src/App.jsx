import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Services from './Services'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <Nav></Nav>
       <Home ></Home>
       <Services></Services>
       <Products></Products>
       <About></About>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
