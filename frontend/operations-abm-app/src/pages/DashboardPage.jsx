import React, { useEffect, useState } from 'react'
import SideNav from '../components/SideNav'
import 'tw-elements';
import { GiTakeMyMoney } from 'react-icons/gi'
import { CATEGORIES_URL, OPERATIONS_URL, REPORT_URL } from '../Routes';
import { useNavigate } from 'react-router-dom';
import ListOperationsGrid from '../components/ListOperationsGrid';

const DashboardPage = () => {

    const [balance, setBalance] = useState(0)
    const [lastTen, setLastTen] = useState([])
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()



    // useEffect(()=>{
    //     if(token =)
    // },[])


    useEffect(()=>{

        const token = localStorage.getItem('Bearer')
        const userId = localStorage.getItem('UserId')

        const getBalance = async ()=>{
            const resp = await fetch(`${REPORT_URL}?userId=${userId}`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            // if token is invalid or doesn't exist force the logout
            if(!resp.ok){
                if(resp.status === 401){
                    localStorage.clear()
                    navigate('/login')
                }
            }

            const { data } = await resp.json() 
            setBalance(data.balance)
        }
        // get the last 10 operations of the user
        const getLatest = async ()=>{
            const resp = await fetch(`${OPERATIONS_URL}?userId=${userId}&limit=10`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(!resp.ok){
                return
            }
            const { data } = await resp.json()
            setLastTen(data.operationsList)
        }

        const getCategories = async ()=>{
            const resp = await fetch (`${CATEGORIES_URL}/?userId=${userId}`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(!resp.ok){
                return
            }
            const { data } = await resp.json()
            setCategories(data.categoriesList)
        }

        getLatest()
        getBalance()
        getCategories()

    },[])


  return (
    <div className='flex flex-col w-full h-screen bg-gray-900'>
        <div className='h-[15%]'>
            <div className='w-full h-1/3 flex flex-row pt-4 px-4'>
                <SideNav />
                <div className='flex-grow'></div>
                <h2 className='text-3xl text-white text-center w-fit mx-auto'><GiTakeMyMoney /></h2>
            </div>
            <div className='flex flex-center justify-center h-2/3 text-white m-auto'>
                <h2 className='text-xl'>{'$'+balance}</h2>
            </div>
        </div>

        {/* Operations Grid */}
        <div className='w-full max-w-[700px] h-3/4 mx-auto overflow-auto border-x-4 border-gray-700'>
            <ListOperationsGrid  operationsArray={lastTen} categories={categories}/>
        </div>
    </div>
  )
}

export default DashboardPage