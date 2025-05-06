
import SideBar from '@/layout/SideBar'
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'



function Home() {
  const navigate = useNavigate()
  const [toggle,setToggle] = useState(false)
  function handleLogout(){
    localStorage.removeItem("token")
    navigate("/login-registration")
  }

 

  return (
    <>
      <div className={`grid ${toggle ? 'grid-cols-[50px_calc(100%-50px)] h-[50px]':'grid-cols-[15%_85%] h-[99vh]'}  `}>
       <SideBar toggle={
       toggle} setToggle={setToggle}/>
        <div >
          <header className='bg-purple-900 h-[60px] flex justify-between align-middle'>
            <h4 className='text-white  pl-2 pt-[1.2%]'>Expense Tracker</h4>
            <button className='text-white pr-2 font-bold hover:underline ' onClick={handleLogout}>Logout</button>
          </header>
          <div className='mt-[10%]'>
            <Outlet />
          </div>
          
        </div>
      </div>  
    </>
  )
}

export default Home