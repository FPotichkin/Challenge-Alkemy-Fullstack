import React from 'react'
import SideNav from '../components/SideNav'
import {GiTakeMyMoney} from 'react-icons/gi'
import {TiPlus} from 'react-icons/ti'
import {FaFilter} from 'react-icons/fa'

const AbmPage = () => {
  return (
    <div className='h-screen lg:h-full min-h-screen bg-gray-900 flex flex-col'>
        <div className='h-1/6 w-full'>
            <div className='w-full h-1/3 flex justify-between pt-4 px-4 lg:mb-11'>
                <SideNav />
                <h3 className='text-white text-xl font-bold tracking-widest'>ABM</h3>
                <h2 className='text-3xl text-white text-center w-fit'><GiTakeMyMoney /></h2>
            </div>
            <div className='w-11/12 h-2/3 mx-auto flex items-end pb-1'>
                <div className='flex w-full items-center justify-between text-white'>
                    <button className='h-6 min-w-[24px] text-orange-300 ring-1 ring-orange-300 flex items-center justify-center rounded-sm hover:ring-0 hover:text-black hover:bg-orange-300 md:after:content-["ㅤ_Create"]'><TiPlus /></button>
                <div className='flex items-center space-x-1'>
                    <button className='h-6 px-1 rounded-sm text-orange-300 ring-1 ring-orange-300 hover:ring-0 hover:text-black hover:bg-orange-300'>Filtern't</button>
                    <button className='h-6 min-w-[24px] text-orange-300 ring-1 ring-orange-300 flex items-center justify-center rounded-sm hover:ring-0 hover:text-black hover:bg-orange-300 md:before:content-["Filter__ㅤ"] md:px-2'><FaFilter /></button>
                </div>
            </div>
        </div>
        </div>

        {/* Operations */}
        <div className='h-5/6'>
            <div className='h-full bg-white'>

            </div>
        </div>
    </div>
  )
}

export default AbmPage