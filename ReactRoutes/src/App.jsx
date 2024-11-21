import React, { createContext, Fragment, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Pages/Home'
import Contect from './Pages/Contect'
import About from './Pages/About'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import None from './Pages/None'
import ErroePage from './Pages/ErroePage';
import PageLoader from './loaders/PageLoader';

export const CountProp = createContext();

const App = () => {
  const [count,setCount] = useState(0)
  return (
    <Fragment>
    <BrowserRouter> 
    <CountProp.Provider value={{count,setCount}}>
    <Navbar/>
      <Routes errorElement={<ErroePage/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}  loader={PageLoader} />
        <Route path='*' element={<None/>}/>
      </Routes>
      </CountProp.Provider>
    </BrowserRouter>
    </Fragment>
  )
}

export default App