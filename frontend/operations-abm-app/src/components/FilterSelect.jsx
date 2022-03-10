import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { CATEGORIES_URL } from '../Routes'

const FilterSelect = ({categories, setOperationsDeposit, setOperationsWithdraw, reset, setError}) => {

    const [isSorted, setIsSorted ] = useState(false)

    const handleSort = async (event)=>{
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const categoryId = formData.get('category')
        
        try {
            const resp = await fetch(`${CATEGORIES_URL}/${categoryId}?userId=${localStorage.getItem('UserId')}`,{
              method: 'GET',
              headers: {
                'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`
              }
            })
            const {data} = await resp.json()

            if(!data.categoryOperations.operations){
                setError('There are not operations in this category')
                return
            }

            setOperationsDeposit(data.categoryOperations.operations.filter((operation)=>{return(operation.type === 'Deposit')}))
            setOperationsWithdraw(data.categoryOperations.operations.filter((operation)=>{return(operation.type === 'Withdraw')}))
            setIsSorted(true)

        } catch (err) {
            setError(err)
        }
    }


  return (
    <>
        <div className='flex items-center space-x-1'>
            {isSorted && <button className='h-6 px-1 rounded-sm text-orange-300 ring-1 ring-orange-300 hover:ring-0 hover:text-black hover:bg-orange-300' onClick={()=>{
                setIsSorted(false)
                reset()
                } }>Filtern't</button>}
            <button className='h-6 min-w-[24px] text-orange-300 ring-1 ring-orange-300 flex items-center justify-center rounded-sm hover:ring-0 hover:text-black hover:bg-orange-300 md:before:content-["Filter__ㅤ"] md:px-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"><FaFilter /></button>
        </div>

        <div className='bg-gray-900 offcanvas offcanvas-top fixed bottom-0 flex flex-col w-full max-w-md  md:left-[50%]  md:ml-[-224px]  invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out  top-0 left-0 right-0 border-none h-1/6 max-h-full justify-around shadow-black' id='offcanvasFilter'>
            <button className='bg-orange-300 rounded-b-sm  h-6 w-6' data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"> X </button>
            <form className='flex flex-col  px-4 pb-3 space-y-3' onSubmit={handleSort}>
                <select name='category' className='text-white bg-cyan-900 outline-none tracking-wide w-11/12 mx-auto py-2 placeholder:text-slate-300 rounded indent-2 focus:ring-slate-300 focus:ring-2'>
                    {categories.map((category)=>{return(
                    <option key={category.id} value={`${category.id}`}>{category.name}</option>
                    )})}
                </select>               
                <button className='bg-orange-300 font-bold rounded-lg text-black' data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"> Filter </button>
            </form>
    </div>        
    </>
  )
}

export default FilterSelect