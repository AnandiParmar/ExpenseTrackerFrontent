import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({toggle,setToggle}) {
    const items = [
        {
          title:'Home',
          url:"/",
          icon:'fa-solid fa-house pr-2',
        },
        {
          title:'Income Sorce',
          url:"/income",
          icon:'fa-solid fa-wallet pr-2'
        },
        {
          title:"All Expenses",
          url:'all-expenses',
          icon:'fa-solid fa-coins text-grey-400 pr-2' 
        }
       
      ]
  return (
    <>
    <div className={`bg-gray-200 ${ toggle ? 'hidden' : ''}` }>
    <div className='float-end m-5'>
      <button className=' fa-solid fa-greater-than' onClick={()=>setToggle(true)}></button>
    </div>
    <div className={`mt-[50%]`}>
     
    {items.map((elem,i)=>(
       <div className='ml-10 my-3' key={i}>
        <i className={elem.icon} ></i>
        <Link to={elem.url} className='font-medium text-black-600 dark:text-black-500 no-underline' >{elem.title}</Link>
        </div>
    ))}
    </div>
  </div>  
  <button className={`${toggle ? 'flex align-middle justify-center mt-4 text-[23px] bg-grey-200' : 'hidden'}`} onClick={()=>setToggle(false)}>
    <i className={`flex fa-solid fa-bars bg-grey-200`}></i>
  </button>
  </>
  )
}

export default SideBar