import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_URL } from '../Routes'
import FormInputReq from './FormInputReq'

const LoginForm = () => {

  const [error, setError ] = useState('')
  const [isVisible, setIsVisible] = useState('hidden')

  const navigate = useNavigate()
  
  const login = async (event)=>{
      event.preventDefault()

      const formData = new FormData(event.target)
      const dataObject = Object.fromEntries(formData)

      try {
        const resp = await fetch(LOGIN_URL,{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(dataObject)
        })
        const { data } = await resp.json()
        if(!resp.ok){
          setError('Wrong credentials')
          setIsVisible('block')
          return
        }else{
          localStorage.setItem('Bearer', `${data.token}`)
          localStorage.setItem('UserId',`${data.userId}`)
          navigate('/dashboard')
        }
      } catch (err) {
        alert(err)
      }
      
  }

  return (
    <div className='w-full mx-auto py-10 rounded-b-md bg-cyan-700'>
        <form onSubmit={login} className='w-full h-full flex flex-col justify-center '>
            <label htmlFor='email' className='text-white ml-5 mb-1'>Email</label>
            <FormInputReq type='email' name='email' placeholder='email@example.com'/>
            <label htmlFor='password' className='text-white ml-5 mt-2 mb-1'>Password</label>
            <FormInputReq type='password' name='password'/>
            <p className={`${isVisible} bg-rose-200 text-red-600 ring-1 ring-red-700 text-center rounded w-11/12 mx-auto`}>{error}</p>
            <button className='w-11/12 mt-9 mx-auto p-1 rounded-lg text-gray-900 bg-gray-100 text-lg font-bold hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:shadow-black'>Enter</button>
        </form>
    </div>
  )
}

export default LoginForm