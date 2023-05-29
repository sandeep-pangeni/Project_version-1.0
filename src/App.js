import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Error from './Component/Error'

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/home' Component={Home} />
      <Route exact path='/about' Component={About} />
      <Route path="*" Component={Error} />
    </Routes>
  )
}

export default App