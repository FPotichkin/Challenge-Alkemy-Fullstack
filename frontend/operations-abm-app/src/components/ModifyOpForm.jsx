import React from 'react'
import { OPERATIONS_URL } from '../Routes'
import FormInput from './FormInput'

const ModifyOpForm = ({categories, opId, TriggerFetch, setError}) => {

    // opId = operation id

    const modifyOperation = async (event, id)=>{
        event.preventDefault()
    
        const formData = new FormData(event.target)
    
        for(const pair of formData.entries()) {
          if(!pair[1]){
            formData.delete(pair[0])
          }
        }
        // for some reason, date or quantity doesn't want to be eliminated 
        for(const pair of formData.entries()) {
            if(!pair[1]){
              formData.delete(pair[0])
            }
          }

        // for some reason, date doesn't want to be eliminated 
        const objectData = Object.fromEntries(formData)
        try {
            const resp = await fetch(`${OPERATIONS_URL}`,{
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('Bearer')}`
                },
                body: JSON.stringify(objectData)
            })
            if(!resp.ok){
                setError(resp.message)
            }
            TriggerFetch[1](!TriggerFetch[0])
        } catch (err) {
            alert()
        }
    }
    const categoriesOptions = () => {
        return(
            categories.map((category, index)=>{
                return(
                    <option key={index} value={`${category.id}`}>{category.name}</option>
                )
            })
        )
    }
  return (
      
    <div className='offcanvas offcanvas-end bg-gray-900 fixed bottom-0 flex flex-col w-full max-w-md  md:left-[50%]  md:ml-[-224px]  invisible bg-clip-padding  outline-none transition duration-300 ease-in-out  top-0 left-0 right-0 border-none h-fit max-h-full shadow-2xl shadow-black' id="offcanvasModify">
        <button className='bg-orange-300 w-6 h-6 rounded-b-sm' data-bs-toggle="offcanvas" data-bs-target="#offcanvasModify"> X </button>
        <h4 className='text-white mx-auto text-center font-semibold tracking-widest'>Modify Operation</h4>
        <form onSubmit={modifyOperation} className='p-3 flex flex-col space-y-2'>
            <label htmlFor='concept' className='text-white ml-5 mb-1'>Concept</label>
            <FormInput name='concept' type='text'/>
            <label htmlFor='date' className='text-white ml-5 mb-1'>Date</label>
            <FormInput name='date' type='date'/>
            <label htmlFor='quantity' className='text-white ml-5 mb-1'>Quantity</label>
            <FormInput name='quantity' type='number'/>
            <label htmlFor='categoryId' className='text-white ml-5 mb-1'>Category</label>
            <select name='categoryId' className='text-white bg-cyan-900 outline-none tracking-wide w-11/12 mx-auto py-2 placeholder:text-slate-300 rounded indent-2 focus:ring-slate-300 focus:ring-2'>
                { categoriesOptions() }
            </select>
            <input type="hidden" name='userId' value={parseInt(localStorage.getItem('UserId'))}/>
            <input type="hidden" name='id' value={opId}/>
            <button className='bg-orange-300 font-bold rounded-lg'> Modify </button>
        </form>
    </div>
  )
}

export default ModifyOpForm