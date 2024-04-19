import React from 'react'
import Home from './Home/Home'  
import { Route, Routes } from "react-router-dom"
import Courses from './course/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'

const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/"  element={<Home/>}/>

      <Route path="/Login" element={<Login/>}/>
      
      <Route path="/course" element={<Courses/>}/>
      
      <Route path="/signup" element={<Signup/>}/>
    </Routes>

    </div>
    </>
  )
}

export default App
