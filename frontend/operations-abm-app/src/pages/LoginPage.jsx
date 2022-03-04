import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen pt-4 bg-gray-900 flex flex-col items-center justify-center'>
        <div className='w-4/5 max-w-[500px] h-fit flex flex-col items-center'>
            <h2 className='text-white text-2xl font-bold tracking-wide'>Log In</h2>
            <LoginForm />
        </div>
        <div className='w-4/5 max-w-[500px] border-2 border-orange-300 rounded mt-4 py-7 text-center text-white'>
          Don't have an account? <span className='underline text-orange-300'><Link to='/register'>Register Now</Link></span>
        </div>
    </div>
  )
}

export default LoginPage