import React from 'react'
import { OPERATIONS_URL } from '../Routes'

const DeleteBox = ({TriggerFetch, opId, setError}) => {

    const handleDelete = async ()=>{
        const resp = await fetch(`${OPERATIONS_URL}/${opId}?&userId=${localStorage.getItem('UserId')}`,{
            method: 'DELETE',
            headers:{
              'Authorization':`Bearer ${localStorage.getItem('Bearer')}`
            }
          })
          if(!resp.ok){
            setError(resp.message)
          }else{
            TriggerFetch[1](!TriggerFetch[0])
          }
    }

    return (
        <div className='offcanvas offcanvas-end pb-3 bg-gray-900 fixed bottom-0 flex flex-col w-full max-w-md  md:left-[50%]  md:ml-[-224px]  invisible bg-clip-padding  outline-none transition duration-300 ease-in-out  top-[50%] mt-[-36px] left-0 right-0 border-none h-fit max-h-full shadow-xl shadow-black' id="offcanvasDelete">
            <button className='bg-orange-300 w-6 h-6' data-bs-toggle="offcanvas" data-bs-target="#offcanvasDelete">X</button>
            <p className='text-white w-3/4 mx-auto mb-3 text-center'>This operation will be permanently deleted</p>
            <button className={`bg-red-600 rounded-lg w-2/3 m-auto text-white font-bold`} onClick={handleDelete} data-bs-toggle="offcanvas" data-bs-target="#offcanvasDelete">Confirm delete</button>
        </div>
    )
}

export default DeleteBox