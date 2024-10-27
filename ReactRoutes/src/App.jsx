import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Pages/Home'
import Contect from './Pages/Contect'
import About from './Pages/About'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import None from './Pages/None'
const App = () => {
  return (
    <Fragment>
    <BrowserRouter> 
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='*' element={<None/>}/>
      </Routes>
    </BrowserRouter>
    </Fragment>
  )
}

export default App