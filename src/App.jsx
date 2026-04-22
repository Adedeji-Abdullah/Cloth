import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './component/Button'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
