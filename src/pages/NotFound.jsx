import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate= useNavigate()
  return (
    <center>
        <img src="./NotFoundImage.jpg" alt=""  className='h-[200px] w-[400px] mt-[10%]'/>
        <h4 className='py-8'>
            Page Not Fount  <button onClick={()=>navigate("/")} className='text-purple-600 underline pl-2' >Go to Home Page</button>
            </h4>
    </center>
  )
}

export default NotFound