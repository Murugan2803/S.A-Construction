import './App.css'
import HeaderComp from './Components/Navigation/HeaderComponents'
import Services from './Components/Services/service'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './Components/Home/Home'

function App() {

  return (
    <div>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </div>
  )
}

export default App
