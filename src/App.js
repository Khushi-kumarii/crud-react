import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom';

import Home from './components/home';
import Create from './components/create';
import Update from './components/update';
import Read from './components/read';
function App(){
   return (
    
 <BrowserRouter>
   <Routes>

     <Route path='/' element={<Home/>}></Route>
     <Route path='/create' element={<Create/>}></Route>
     <Route path='/update/:id' element={<Update/>}></Route>
     <Route path='/read/:id' element={<Read/>}></Route>
   </Routes>
 </BrowserRouter>
  );
}

export default App;

