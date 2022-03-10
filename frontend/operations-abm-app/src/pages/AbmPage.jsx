import React, { useEffect, useState } from 'react'
import SideNav from '../components/SideNav'
import {GiTakeMyMoney} from 'react-icons/gi'
import { CATEGORIES_URL, OPERATIONS_URL } from '../Routes'
import { useNavigate } from 'react-router-dom'
import ListOperationsGrid from '../components/ListOperationsGrid'
import CreateOpForm from '../components/CreateOpForm'
import FilterSelect from '../components/FilterSelect'
import NavBar from '../components/NavBar'

const AbmPage = () => {
    
    const [categoriesList, setCategoriesList ]= useState([])
    const [depositList, setDepositList] = useState([])
    const [withdrawList, setWithdrawList] = useState([])
    
    // this saves are for change the list of operations without the necessitie of another fetch
    const [depositListSave, setDepositListSave] = useState([])
    const [withdrawListSave, setWithdrawListSave] = useState([])

    const [error, setError] = useState('')

    // this set what operation will suffer an action
    const [operationId, setOpId ]= useState(0)

    // this say which element is render
    const [isRender, setIsRender] = useState('')


    // this trigger a fetch of operations after create/modify/delete a operation
    // bad practice TriggerFetch[0] is the variable and TriggerFetch[1] is the set function -- its to send to a children at once
    const TriggerFetch = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
        const userId = localStorage.getItem('UserId')
        const token = localStorage.getItem('Bearer')


        const getCategories = async ()=>{
            const resp = await fetch (`${CATEGORIES_URL}/?userId=${userId}`,{
                method: 'GET',
                headers:{
                    'Authorization' : `Bearer ${token}`
                }
            })
            if(!resp.ok){
                setError('There was an error try again later')
                return
            }
            const { data } = await resp.json()
            setCategoriesList(data.categoriesList)
        }
        getCategories()
    },[])
    useEffect(()=>{
        const userId = localStorage.getItem('UserId')
        const token = localStorage.getItem('Bearer')

        const getOperations = async ()=>{
            const resp = await fetch(`${OPERATIONS_URL}?userId=${userId}`,{
                method: 'GET',
                headers: {
                    'Authorization':`Bearer ${token}`
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
            console.log(data)
            const depositArray = data.operationsList.filter((operation)=>{return(operation.type === 'Deposit')})
            const withdrawArray = data.operationsList.filter((operation)=>{return(operation.type === 'Withdraw')})
        
            setDepositList(depositArray)
            setDepositListSave(depositArray)

            setWithdrawList(withdrawArray)
            setWithdrawListSave(withdrawArray)
        }
        getOperations()
    },[TriggerFetch[0]])

    const reset = ()=>{
        setDepositList(depositListSave)
        setWithdrawList(withdrawListSave)
    }

    const errorAlert = ()=>{
        return(
        <div class="alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
            <p>{error}</p>
            <button type="button" class="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setError('')}}></button>
        </div>
        )
    }

  return (
    <>
        <div className='h-screen lg:h-full min-h-screen bg-gray-200 flex flex-col'>
            <div className='h-1/6 w-full bg-gray-900'>
                <div className='w-full h-1/3 flex justify-between pt-4 px-4 lg:mb-11'>
                    {/* Navs */}
                    <div>
                        <NavBar />
                        <SideNav />
                    </div>
                    <h3 className='fixed left-[50%] ml-[-25px] text-white text-xl font-bold tracking-widest'>ABM</h3>
                    <h2 className='text-3xl text-white text-center w-fit'><GiTakeMyMoney /></h2>
                </div>
                <div className='w-11/12 max-w-[630px] h-2/3 mx-auto flex items-end pb-1'>
                    <div className='flex w-full items-center justify-between text-white'>
                        <CreateOpForm categoriesList={categoriesList} TriggerFetch={TriggerFetch} setError={setError}/>
                        <FilterSelect categories={categoriesList} setOperationsDeposit={setDepositList} setOperationsWithdraw={setWithdrawList} reset={reset} setError={setError}/>
                    </div>
                </div>
            </div>
            {error && errorAlert()}
            {/* Operations */}
            <div className=' h-5/6 w-full max-w-[700px] flex flex-col lg:flex-row lg:max-w-[70%] lg:space-y-0 space-y-3 mx-auto my-2'>        
                <div className='flex-grow overflow-auto'>
                    <ListOperationsGrid operationsArray={depositList} areButton={true} categories={categoriesList} TriggerFetch={TriggerFetch} setOpId={setOpId} operationId={operationId}/>
                </div>
                <div className='flex-grow overflow-auto'>
                    <ListOperationsGrid operationsArray={withdrawList} areButton={true} categories={categoriesList} TriggerFetch={TriggerFetch} setOpId={setOpId} operation={operationId}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AbmPage