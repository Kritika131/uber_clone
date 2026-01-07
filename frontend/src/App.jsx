import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainSignup from './pages/captainSignup'
import Captainlogin from './pages/captainLogin'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/captainRiding'
const App = () => {
  return (
    <div className='text-2xl font-bold'>
      <Routes>

        <Route path='/' element={<Start/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/captainLogin" element={<Captainlogin/>}/>
        <Route path="/captainSignup" element={<CaptainSignup/>}/>
        <Route path="/riding" element={<Riding/>} />
         <Route path='/captain-riding' element={<CaptainRiding />} />
        
        <Route path="/home" element={
          <UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>  
        <Route path="/captainHome" element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}/>
        <Route path="/captainLogout" element={<CaptainProtectWrapper><CaptainLogout/></CaptainProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App