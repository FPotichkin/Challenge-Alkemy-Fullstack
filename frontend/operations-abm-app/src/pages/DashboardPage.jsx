import React from 'react'
import SideNav from '../components/SideNav'
import 'tw-elements';
import { GiTakeMyMoney } from 'react-icons/gi'

const DashboardPage = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-gray-900'>
        <div className='h-[15%]'>
            <div className='w-full h-1/3 flex flex-row pt-4 px-4'>
                <SideNav />
                <div className='flex-grow'></div>
                <h2 className='text-3xl text-white text-center w-fit mx-auto'><GiTakeMyMoney /></h2>
            </div>
            <div className='flex flex-center justify-center h-2/3 text-white m-auto'>
                <h2>100</h2>
            </div>
        </div>

        {/* Operations Grid */}
        <div className='w-full h-3/4 overflow-auto '>
            <div className='grid grid-cols-1 text-sm w-11/12 mx-auto bg-gray-100'>
                <div className='flex flex-row'>
                    <div className='w-3/4 flex flex-col space-y-[2px]'>
                        <div className='flex space-x-2'>
                            <div className={`w-16 bg-emerald-500 flex items-center justify-center rounded px-1 font-semibold`}>Deposit</div>
                            <div>Wage</div>
                        </div>
                        <div>Freelance</div>  
                        <div className='text-xs'>4/3/2022</div></div>
                    <div className='h-full self-end w-full flex items-center justify-center '>
                        <div className=' font-bold m-auto text-base text-black' >$100</div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardPage