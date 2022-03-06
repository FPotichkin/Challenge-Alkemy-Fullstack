import React from 'react'
import {AiFillDelete, AiFillEdit, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const ListOperationsGrid = ({ operationsArray, setAnAction , setOpId, areButton, categories}) => {
  const categoryNameSetter = (categoryId)=>{
    const regex = /"/ig
    const correctCategory = categories.find((category)=>categoryId === category.id)
    if(!correctCategory){
      return ''
    }
    let categoryName = JSON.stringify(correctCategory.name) || ''
    categoryName = categoryName.replaceAll(regex,'')

    return categoryName
  }
  const dateSetter = (date) =>{
    const formatedDate = new Date(date)
    return formatedDate.toLocaleDateString(undefined)
  }

  const quantitySetter = (operation)=>{
    if(operation.type === 'Deposit'){
      return  <div className='flex font-bold m-auto text-base text-Deposit' >{`$${operation.quantity}`}<AiFillCaretUp /></div>
    }else{
      return  <div className='flex font-bold m-auto text-base text-Withdraw items-center' >{`$${operation.quantity}`}<AiFillCaretDown /></div>
    }

  }

  const borderColor = (type)=>{
    if(type === 'Deposit'){
      return <div className='bg-Deposit h-full w-1 mr-2'></div>
    }else{
      return <div className='bg-Withdraw h-full w-1 mr-2'></div>
    }
  }

  return (
    <div className='grid grid-cols-1  w-11/12 mx-auto'>
      {
        operationsArray.map((operation, index)=>{
          return(
          <div key={index} className={`flex bg-gray-100 p-3 border-collapse border-b-2 border-gray-300 `}>
            { borderColor(operation.type) }
            <div className='w-3/4 flex flex-col space-y-[2px] '>
              <div className='flex justify-between'>
                <div className='text-sm'>{categoryNameSetter(operation.categoryId)}</div>
                <div></div>
              </div>
              <div> consectetur adipisii</div>  
              <div className='text-sm tracking-wide'>{dateSetter(operation.date)}</div>
            </div>
            <div className='w-1/4 flex flex-row'>
              <div className='self-end w-full flex flex-col space-y-2 '>
                {quantitySetter(operation)}
                <div className='flex justify-between'>  
                  {areButton && <button className='w-6 h-6 flex items-center justify-center rounded-3xl bg-sky-700 text-white' onClick={()=>{
                    setOpId(operation.id)
                    setAnAction('modify')}
                  }><AiFillEdit /></button>}
                  {/*  */}
                  {areButton && <button className=' w-6 h-6 flex items-center justify-center rounded-3xl bg-red-600 text-white' onClick={()=>{
                    setOpId(operation.id)
                    setAnAction('delete')}
                  }
                  ><AiFillDelete /></button>}
                </div>
              </div>
            </div>

          </div>)
        })
      }
    </div>
    
  )
}

export default ListOperationsGrid