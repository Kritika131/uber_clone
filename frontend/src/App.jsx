import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainSignup from './pages/captainSignup'
import Captainlogin from './pages/captainLogin'
const App = () => {
  return (
    <div className='text-2xl font-bold'>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/captainLogin" element={<Captainlogin/>}/>
        <Route path="/captainSignup" element={<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App