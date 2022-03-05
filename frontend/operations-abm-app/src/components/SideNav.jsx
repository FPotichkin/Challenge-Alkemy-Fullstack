import React from 'react'
import { GiTakeMyMoney, GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'


const SideNav = () => {

  const navigate = useNavigate()

  const logOut = ()=>{
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
      <aside id='sideNav' className={`offcanvas offcanvas-start fixed bottom-0 flex flex-col bg-gray-100 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-3/4  max-w-[400px]`}>
        <div className='flex justify-start px-3 pb-2 offcanvas-header'>
          <h1 className='text-gray-900 text-5xl'><GiTakeMyMoney /></h1>
          <p className='text-gray-900 self-center text-sm'> Alkemy abm</p>
        </div>
        <div className='w-11/12 mx-auto'>
        <div className="w-full my-2 text-center cursor-pointer hover:bg-gray-200">Profile</div>
          <div className='w-ful h-[2px] bg-slate-300'></div>
          <div className="w-full my-2 text-center cursor-pointer hover:bg-gray-200" onClick={()=>{navigate('/dashboard')}}>DashBoard</div>
          <div className='w-ful h-[2px] bg-slate-300'></div>
          <div className="w-full my-2   text-center cursor-pointer hover:bg-gray-20">Operations</div>
          <div className="w-full mt-2 bg-red-700 text-white text-center cursor-pointer " data-bs-toggle="collapse" data-bs-target="#confirmCol" aria-expanded="false" aria-controls="collapseExample">Log Out</div>
        </div>
        <div className='collapse bg-gray-300 pt-2' id='confirmCol'>
          <p className=' text-center'>You want to log out?</p>
          <div className='flex justify-evenly p-1'>
              <button className='bg-gray-300 hover:bg-gray-100 w-1/2 border-r-[3px] border-white border-collapse' onClick={()=>{logOut()}}>Yes</button>
              <button className='bg-gray-300 hover:bg-gray-100 w-1/2' data-bs-toggle="collapse" data-bs-target="#confirmCol">No</button>
          </div>
        </div>
        </aside>
        <button className='text-white text-xl' data-bs-toggle='offcanvas' data-bs-target='#sideNav'><GiHamburgerMenu /></button>
    </>
  )
}

export default SideNav