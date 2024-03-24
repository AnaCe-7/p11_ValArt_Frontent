import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home/>}></Route> 
        {/* <Route path="/" element={}></Route>
        <Route path="/allartworks" element={}></Route>
        <Route path="/artworks" element={}></Route>
        <Route path="/createartwork" element={}></Route>  */}
       
    </Routes>
</BrowserRouter>
  )
}

export default Router