import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
 const { register, handleSubmit, formState: { errors }} = useForm()
 const userData = useSelector((state)=>state.user.user)
 const navigate = useNavigate()
 let isEmailExist = false;

    const onSubmit = data => {     
       
       
        userData.map((user)=>{
           if(user.email == data.email && user.password == data.password ){
               isEmailExist = true 
            const token = btoa({
                email: data.email,
                password: data.password
            },  );
            localStorage.setItem("token",token)
            toast.success("Login Succesully")
            navigate("/")
           }else{
            if(user.email == data.email){
                isEmailExist = true
                if(user.password !== data.password){
                 toast.error("Password is Invalid")
                }
            }
           }
        })
        
        if(!isEmailExist ){
            toast.error("Email is Not Exist")
            isEmailExist = false
        }
    }
  return (
    
    <form className="flex flex-col gap-4 py-[10%] px-4 card" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium" >Email</label>
            <input type="email" id="email" className="border rounded p-2" {...register("email",{required:"Email is Required",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,message:"Enter Valid Email Address"}})} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input type="password" id="password" className="border rounded p-2" {...register("password",{required:"Password is Required",minLength:{value:6,message:"Password Must be Atleast 6 Chacater"},maxLength:{value:20,message:"Password Must be less then 20 Character"}})}  />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button type="submit" className="bg-purple-900 text-white  py-2 rounded">Login</button>
    </form>
  )
}

export default Login