import React from 'react'
import './App.css'
import Header from './Componenets/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CardDetails from './Componenets/CardDetails/CardDetails'

const App = () => {
  return (
    
    <BrowserRouter>
      
      <Routes>
      <Route path='/' element = {<Header />} />
      
      <Route path='/details/:filterby' element = {<CardDetails />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App