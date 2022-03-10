import React from 'react'
import { OPERATIONS_URL } from '../Routes'
import FormInput from './FormInputReq'
import { TiPlus } from 'react-icons/ti'
import { GiConsoleController } from 'react-icons/gi'

const CreateOpForm = ({categoriesList , TriggerFetch, setError}) => {

    const handleCreate =  async (event)=>{
        event.preventDefault()
        console.log(1)

        const formData = new FormData(event.target)
        const objectData = Object.fromEntries(formData)
      
        try {
          const resp = await fetch(OPERATIONS_URL,{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${localStorage.getItem('Bearer')}`
            },
            body: JSON.stringify(objectData)
          })
          const data = await resp.json()
          if(!resp.ok){
            console.log(data)
            setError(data.message)
          }else{
            TriggerFetch[1](!TriggerFetch[0])
            return
          }
        } catch (err) {
          console.log(err)
          setError(err.message)
        }

    }

    const categoriesOptions = () => {
        return(
            categoriesList.map((category, index)=>{
                return(
                    <option key={index} value={`${category.id}`}>{category.name}</option>
                )
            })
        )
    }


  return (
        
    <>
        <button className=' h-6 min-w-[24px] text-orange-300 ring-1 ring-orange-300 flex items-center justify-center rounded-sm hover:ring-0 hover:text-black hover:bg-orange-300 md:after:content-["ㅤ_Create"] md:pr-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"><TiPlus /></button>
        <div className="offcanvas offcanvas-top fixed bottom-0 flex flex-col w-full max-w-md  md:left-[50%]  md:ml-[-224px]  invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out  top-0 left-0 right-0 border-none h-1/3 max-h-full" id="offcanvasTop">
            <div className=' bg-gray-900 shadow-2xl shadow-black'>
                <button className='bg-orange-300 rounded-b-sm  w-6 h-6 text-black' data-bs-dismiss="offcanvas" aria-label="Close"> X </button>
                <h4 className='text-white mx-auto text-center font-semibold tracking-widest'>Create Operation</h4>
                <form onSubmit={handleCreate} className='p-3 flex flex-col space-y-2'>
                    <FormInput name='concept'  type="text" placeholder='concept'/>
                    <FormInput name='date'  type="date"/>
                    <FormInput name='quantity'  type="number" placeholder='50'/>
                    <select name='type' className='text-white bg-cyan-900 outline-none tracking-wide w-11/12 mx-auto py-2 placeholder:text-slate-300 rounded indent-2 focus:ring-slate-300 focus:ring-2'>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                    <select name='categoryId' className='overflow-auto text-white bg-cyan-900 outline-none tracking-wide w-11/12 mx-auto py-2 placeholder:text-slate-300 rounded indent-2 focus:ring-slate-300 focus:ring-2'>
                        {categoriesOptions()}
                    </select>
                    <input type="hidden" name='userId' value={localStorage.getItem('UserId')}/>
                    <button className='bg-orange-300 font-bold rounded-lg text-black'> create </button>
                </form>
            </div>
        </div>

    </>
  )
}

export default CreateOpForm