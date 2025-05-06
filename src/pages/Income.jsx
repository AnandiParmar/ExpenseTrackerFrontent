import Form from '@/components/common/Form'
import { addIncome } from '@/store/features/income/IncomeSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Income() {
    const [income,setIncome] = useState({})
    const [isFormSubmit,setIsFormSubmit] = useState(false)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{
        if(isFormSubmit){
            dispatch(addIncome(income))
            toast.success("Income Added")
            navigate("/")
        }
    },[isFormSubmit])
  const formFields = [
    {
        name:'incometype',
        type:'text',
        id:"incometype",
        label:"Income Type",
        value:''
    },{
        name:'amount',
        type:"number",
        id:'amount',
        label:"Income Amount",
    },
    {
        name:"month",
        type:"number",
        id:"month",
        label:"Add Month",
        min:1,
        max:12,

    },
    {
        type:"button",
        id:'btn',
        value:"Add Income"
    }
  ]
  return (
    <Form formFields={formFields} setFormData={setIncome} setIsFormSubmit={setIsFormSubmit} formData={income}/>
  )
}

export default Income