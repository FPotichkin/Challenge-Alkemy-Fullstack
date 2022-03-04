import React from 'react'
import FormInput from './FormInput'

const RegistrationForm = () => {
  return (
    <div className='w-full h-full pt-10 pb-6 mx-auto rounded-b-md bg-cyan-700 shadow-md shadow-black'>
        <form onSubmit={()=>{}} className='w-full h-full flex flex-col justify-center'>
            <label htmlFor="username" className='text-white  pl-4'>Username</label>
            <FormInput name='username' type='text' placeholder='Your username'/>
            <label htmlFor='email' className='text-white  pl-4'>Email</label>
            <FormInput name='email' type='email' placeholder='Your email'/>
            <label htmlFor='password' className='text-white  pl-4'>Password</label>
            <FormInput name='password' type='password'/>
            <label htmlFor='confPass' className='text-white  pl-4'>Confirm Password</label>
            <FormInput name='confPass' type='password'/>
            <button className='w-2/3 mt-4 mx-auto rounded-lg bg-gray-100 hover:shadow-lg hover:shadow-black'>Start</button>
        </form>
    </div>
  )
}


export default RegistrationForm
