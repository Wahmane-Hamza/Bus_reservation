import React from 'react'
import { NavLink } from 'react-router-dom'

export default function sign({perinfo}) {
  return (
    <div className='sign'>
      <nav className='emptyNav'>
        <img className='logonav' src={require('../image/logo.png')}/>
      </nav>
      <div>
        <form>      
          <h1 className='mb-5 text-3xl font-extrabold leading-none tracking-tight text-purple-400 md:text-5xl lg:text-5xl'>Complete <span className="text-white">Profile</span></h1>
          <input type='text' placeholder='First name' onKeyUp={(e)=>perinfo(e)}  name='fname' className=' bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-purple-400 dark:placeholder-purple-400 text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
          <input type='text' placeholder='Last name' onKeyUp={(e)=>perinfo(e)}  name='lname' className=' bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-purple-400 dark:placeholder-purple-400 text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
          <input type='number' placeholder='Phone' onKeyUp={(e)=>perinfo(e)}  name='phone' className=' bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-purple-400 dark:placeholder-purple-400 text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
          <input type='email' placeholder='Email' onKeyUp={(e)=>perinfo(e)}  name='email' className=' bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-purple-400 dark:placeholder-purple-400 text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
          <NavLink to={'/time'} className='singBut text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-0.4 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>DONE </NavLink>
        
        </form>
      </div>
    </div>
  )
}
