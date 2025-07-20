import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
      <div className='p-5 md:px-[10%]' >
        <Navbar />
        <Home />
      </div>
      <About />

    </div>

  )
}

export default App
