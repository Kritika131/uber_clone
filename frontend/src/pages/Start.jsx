import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className=" bg-cover  bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0JTIwaW1hZ2VzfGVufDB8fDB8fHww)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400">
        <img src="https://www.citypng.com/public/uploads/preview/uber-text-word-white-logo-png-701751694707221r0neubngm8.png" alt="logo" className='w-16 ml-8' />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
          <Link to="/login"  className=' flex items-center justify-center w-full bg-black text-white py-2 rounded mt-5'>Continue</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Start