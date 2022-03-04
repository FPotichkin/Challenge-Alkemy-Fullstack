import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'

const RegistrationPage = () => {
  return (
    <div className='w-screen h-screen pt-4 bg-gray-900 flex flex-col items-center'>
        <div className='w-4/5 max-w-[500px] h-fit flex flex-col items-center justify-center'>
            <h2 className='text-2xl text-white font-bold tracking-wide'>Register</h2>
            <RegistrationForm />
        </div>
        <div className='border-2 border-orange-300 w-4/5 max-w-[500px] rounded mt-4 py-7 text-center text-white'>
            <p>Already have an account?</p>
            <p>What are you doing here?<span className='underline text-orange-300'><Link to='/login'>Log In</Link></span></p>
        </div>
    </div>
  )
}

export default RegistrationPage