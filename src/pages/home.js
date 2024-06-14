import React from 'react'
import country from '../ma.json'
import { NavLink } from 'react-router-dom'

export default function Home({derection}) {
  return (
    <div>
      <section className='sec1'>
        <div className='formeler'>
          <h1 className='mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>WELCOME TO <span className='text-purple-400 '>TRAVELHUB</span></h1>
          <p className='mb-5 text-4xl leading-none md:text-2xl lg:text-2xl text-slate-300'>Welcome to your ultimate bus travel destination! Discover convenient bookings and seamless journeys with us </p>
          <form >
            <input type='text' placeholder='Location' onKeyUp={(e)=>derection(e)}  name='location' className=' bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-purple-400 dark:placeholder-purple-400 text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400'/>
            <select type='text' onChange={(e)=>derection(e)}  name='destenation' className=' bg-green-50 border border-purple-400 text-purple-400 dark:text-purple-400 placeholder-purple-400 dark:placeholder-purple-400 text-sm rounded-lg  focus:border-purple-400 block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-purple-300  mb-5 dark:border-purple-400 '>
              <option >Destenation</option>
              {country.map((e)=><option value={e.city}>{e.city}</option>)}
            </select>
            <NavLink to={'/sign'} className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-0.4 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>DONE </NavLink>
          </form>
        </div>
        <div className='imgSec1'>
          <img src={require('../image/home1.jpg')} className='imgHome1'/>
        </div>
      </section>
      {/* --------------------------------- */}

      <section className='sec2'>
        <div className='imgSec2'>
          <img src={require('../image/home2.jpg')} className='imgHome2'/>
        </div>
        <div className='textSec2'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-5xl dark:gray-900'><span className='text-purple-400 '>Safeguarded</span> Journeys: Your Safety<span className='text-purple-400 '> Our Priority</span></h1>
          <p className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:gray-900'>Rest assured, our travel services prioritize your safety with rigorous protocols, ensuring secure and worry-free journeys for every passenger</p>
        </div>
      </section>
      {/* --------------------------------- */}

      <section className='sec3'>
        <div className='textSec3'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-5xl dark:gray-900'>Precise Arrivals: <span className='text-purple-400 '>Your Time</span> Our Commitment</h1>
          <p className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:gray-900'>Experience our punctuality firsthand – where every journey unfolds seamlessly, ensuring timely arrivals without compromise</p>
        </div>
        <div className='imgSec3'>
          <img src={require('../image/home3.jpg')} className='imgHome3'/>
        </div>
      </section>
      {/* --------------------------------- */}

      <footer>
        <div className='logo'>
          <img src={require('../image/logo.png')}/>
          <h1 className=' text-4xl font-extrabold leading-none tracking-tight text-purple-400 md:text-3xl lg:text-3xl'>TRAVELHUB</h1>
        </div>
        <div className='infomedia'>
          <div className='info'>
            <div className='contactAboutus'>
            <NavLink to={'/contact'} className='contactAboutus2'>Contact</NavLink>
            <NavLink to={'/aboutus'} className='contactAboutus2'>AboutUs</NavLink>
            </div>
            <div className='media'>
              <img src={require('../image/media/fb.png')}/>
              <img src={require('../image/media/insta.png')}/>
              <img src={require('../image/media/whatsapp.png')}/>
              <img src={require('../image/media/google.png')}/>
            </div>
          </div>
          <div className='pro'>
            <h3 >Design and programming Hamza Wahmane</h3>
          </div>
        </div>
      </footer>

    </div>
  )
}
