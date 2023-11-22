import React from 'react'
import Navbar from './components/Navbar'
import MyForm from './components/MyForm'
import Read from './components/Read'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element= {< MyForm />} />
          <Route path='/read' element= {< Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App