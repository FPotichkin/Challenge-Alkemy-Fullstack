import React from 'react'
import { USER_URL } from '../Routes'
import FormInput from './FormInput'

const EditProfileFrom = ({setError, TriggerFetch}) => {

    const editHandler = async (event)=>{
        event.preventDefault()
        const formData = new FormData(event.target)
        const objectData = Object.fromEntries(formData)
        const resp = await fetch(USER_URL,{
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('Bearer')}`
            },
            body: JSON.stringify(objectData)
        })
        const {data}= resp.json()
        if(!resp.ok){
            setError(data.message)
        }
        TriggerFetch[1](!TriggerFetch[0])
    }


  return (
    <div className='offcanvas offcanvas-end pb-3 bg-gray-900 fixed bottom-0 flex flex-col w-full max-w-md  invisible bg-clip-padding  outline-none transition duration-300 ease-in-out top-[30%]  md:left-[50%] md:ml-[-224px] right-0 border-none h-fit max-h-full shadow-xl shadow-black space-y-5' id="offcanvasEditProf">
          <button className='bg-white text-black h-6 w-6' data-bs-toggle='offcanvas' data-bs-target='#offcanvasEditProf'>X</button>
          <div className='flex justify-center'>
            <form onSubmit={editHandler} className='flex flex-col'>
              <label className='text-sm text-white text-center'>New Username</label>
              <FormInput type='text' name='username'/>
              <input type="hidden" name="userId" value={localStorage.getItem('UserId')} />
              <button type="submit" className='bg-orange-300 w-2/3 mx-auto mt-2  hover:border-gray-900 hover:bg-white hover:text-gray-900 text-black rounded' >change</button>
            </form> 
          </div>
          <div className='flex justify-center'>
            <form className='flex flex-col' onSubmit={editHandler}>
              <label className='text-sm text-white self-center'>New Password</label>
              <FormInput type='password' name='password'/>
              {/* <input type="password" className='bg-green-400 text-center 'placeholder='new password'/> */}
              <input type="hidden" name="userId" value={localStorage.getItem('UserId')} />
              <button type="submit" className=' bg-orange-300  w-2/3 mx-auto mt-2 hover:border-gray-900 hover:bg-white hover:text-gray-900 text-black rounded'>change</button>
            </form>
          </div>
    </div>
  )
}

export default EditProfileFrom