import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { REGISTER_URL } from '../Routes'
import FormInput from './FormInput'

const RegistrationForm = () => {

    const [invalid, setInvalid] = useState('hidden')
    const [error, setError] = useState('')


    const navigate = useNavigate()

    const comparePass = (pass, conf)=>{
        if(pass !== conf){
            setError('Passwords does not match')
            setInvalid('block')
            return false
        }
        return true
    }

    const register = async (event) =>{

        event.preventDefault()
        const formData = new FormData(event.target)

        if(!comparePass(formData.get('password'), formData.get('confPass'))){
            return
        }
        
        setInvalid('hidden')
        formData.delete('confPass')
        const objectData = Object.fromEntries(formData)

        try {
            const resp = await fetch(REGISTER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(objectData)
            })
            if(!resp.ok){
                setError('Email already used')
                setInvalid('block')
                return
            }
            
            navigate('/login')

        } catch (err) {
            // failed to fetch
            alert (err)
        }        
    }


  return (
    <div className='w-full h-full pt-10 pb-6 mx-auto rounded-b-md bg-cyan-700 shadow-md shadow-black'>
        <form onSubmit={register} className='w-full h-full flex flex-col justify-center'>
            <label htmlFor="username" className='text-white  pl-4'>Username</label>
            <FormInput name='username' type='text' placeholder='Your username'/>
            <label htmlFor='email' className='text-white  pl-4'>Email</label>
            <FormInput name='email' type='email' placeholder='Your email'/>
            <label htmlFor='password' className='text-white  pl-4'>Password</label>
            <FormInput name='password' type='password'/>
            <label htmlFor='confPass' className='text-white  pl-4'>Confirm Password</label>
            <FormInput name='confPass' type='password'/>
            <p className={`${invalid} bg-rose-200 text-red-600 ring-1 ring-red-700 text-center rounded w-11/12 mx-auto`}>{error}</p>
            <button className='w-2/3 mt-4 mx-auto rounded-lg bg-gray-100 hover:shadow-lg hover:shadow-black'>Start</button>
        </form>
    </div>
  )
}


export default RegistrationForm
