import React from 'react'
import Home from './Home/Home'
import Signup from './Components/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Courses from './course/Courses'

function App() {
  return (
  <>
  <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
  </>
  )
}

export default App;