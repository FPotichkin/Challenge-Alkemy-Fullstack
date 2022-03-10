import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import EditProfileFrom from '../components/EditProfileFrom'
import { GiTakeMyMoney } from 'react-icons/gi'
import { USER_URL } from '../Routes'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

    const userId = localStorage.getItem('UserId')

    const [user, setUser ] = useState('')
    const [error, setError] = useState('')

    const TriggerFetch = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{

        const whoIm = async ()=>{
            const resp = await fetch(`${USER_URL}/${userId}`,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Bearer')}`
                }
            })
            if(!resp.ok){
                if(resp.status === 401){
                    localStorage.clear()
                    navigate('/login')
                }else{
                    setError('There was an error try again later')
                }
            }
            const { data } = await resp.json()
            setUser(data.user)
            
        }
        whoIm()
    },[TriggerFetch[0]])

    const errorAlert = ()=>{
        return(
        <div class="alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
            <p>{error}</p>
            <button type="button" class="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setError('')}}></button>
        </div>
        )
    }

  return (
    <div className='bg-gray-800 h-screen'>
        <div className='h-[15%] bg-gray-900 text-white'>
            <div className='w-full h-1/3 flex flex-row pt-4 px-4'>
                <div>
                    <NavBar />
                    <SideNav />
                </div>
                <div className='flex-grow'></div>
                <h2 className='text-3xl text-white text-center w-fit mx-auto'><GiTakeMyMoney /></h2>
            </div>
            <h3 className='text-center text-3xl'>Profile</h3>
        </div>
        {error && errorAlert()}
        <div className='w-full h-[85%] mt-14 text-white flex flex-col space-y-6'>
            <h4 className=' text-center text-5xl'>{user.username}</h4>
            <p className='text-center mt-3'>{user.email}</p>
            <button className='mx-auto max-w-sm w-1/2 rounded-md h-10 py-1 px-2 bg-orange-300 text-black font-bold text-lg' data-bs-toggle='offcanvas' data-bs-target='#offcanvasEditProf'>edit</button>
            <EditProfileFrom setError={setError} TriggerFetch={TriggerFetch}/>
        </div>
    </div>
  )
}

export default ProfilePage