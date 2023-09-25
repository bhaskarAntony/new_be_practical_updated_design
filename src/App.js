import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'
import Mearn from './components/Mearn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Python from './components/Python'
import Java from './components/Java'
import DataScience from './components/DataScience'
import DigitalMarket from './components/DigitalMarket'
import CloudOops from './components/CloudOops'
import H from './components/H'

function App() {

  return (
    <div>
      {/* <Header/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mern-fullstack' element={<Mearn/>}></Route>
        <Route path='/java-fullstack' element={<Java/>}></Route>
        <Route path='/python-fullstack' element={<Python/>}></Route>
        <Route path='/data-science' element={<DataScience/>}></Route>
        <Route path='/digital-marketing' element={<DigitalMarket/>}></Route>
        <Route path='/cloud-oops' element={<CloudOops/>}></Route>
        <Route path='/*' element={<Home/>}></Route>
      </Routes>
     </BrowserRouter>
      <Footer/> */}
      <H/>
    </div>
  )
}

export default App
