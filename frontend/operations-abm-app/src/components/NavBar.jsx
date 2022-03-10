import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { FaUserCircle, FaHome } from 'react-icons/fa'
import {BsFillPlusSquareFill } from 'react-icons/bs'



const NavBar = () => {

    const navigate = useNavigate()

    const logout = ()=>{
      localStorage.clear()
      navigate('/login')
    }

  return (
    <div className='hidden lg:block text-white h-full'>
        <div className='flex space-x-5'>
            <button onClick={()=>{navigate('/profile')}} className="text-2xl flex space-x-"><FaUserCircle /></button>
            <button onClick={()=>{navigate('/dashboard')}} className="text-2xl flex"><FaHome /></button>
            <button onClick={()=>{navigate('/abm')}} className="text-2xl flex"><BsFillPlusSquareFill /></button>
            <button onClick={()=>{logout()}} className="text-2xl flex"><BiLogOut /></button>
        </div>
    </div>
  )
}

export default NavBar