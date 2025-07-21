import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'

function App() {
  return (
    <div>
      <div className='p-5 md:px-[10%]' >
        <Navbar />
        <Home />
      </div>
      <About />
      <div className='py-25 md:px-[15%]'>
       <Experiences />
      </div>
    </div>

  )
}

export default App
