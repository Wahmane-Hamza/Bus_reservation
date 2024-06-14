import React from 'react'

export default function contact() {
  return (
    <div className='contact'>
      <div className='boxContact'>
        <h1 className='mb-10 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-purple-400 '>Contact Us</h1>
        <form>
        <input type='email' placeholder='Email' className='bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-white dark:placeholder-white text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
        <input type='text' placeholder='Full name' className='bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-white dark:placeholder-white text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
        <textarea rows={7} placeholder='Message' className='bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-white dark:placeholder-white text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
        <button type='submit' className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-0.4 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>Send</button>
        </form>
      </div>
      <div className='imgContact'>
        <img src={require('../image/contact.jpeg')}/>
      </div>
    </div>
  )
}
