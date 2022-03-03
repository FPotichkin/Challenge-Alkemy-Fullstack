import React from 'react'
import FormInput from './FormInput'

const LoginForm = () => {

    const login = (event)=>{
        event.preventDefault()
        console.log(1)
        return
    }

  return (
    <div className='w-full mx-auto py-10 rounded-b-md bg-cyan-700'>
        <form onSubmit={login} className='w-full h-full flex flex-col justify-center '>
            <label className='text-white ml-5 mb-1'>Email</label>
            <FormInput type='email' name='email' placeholder='email@example.com'/>
            <label className='text-white ml-5 mt-2 mb-1'>Password</label>
            <FormInput type='password' name='password'/>
            <button className='w-11/12 mt-9 mx-auto p-1 rounded-lg text-gray-900 bg-gray-100 text-lg font-bold hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:shadow-black'>Enter</button>
        </form>
    </div>
  )
}

export default LoginForm