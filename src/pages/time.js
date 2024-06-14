import React from 'react'
import { NavLink } from 'react-router-dom'

export default function time() {
    const time ='8AM'
  return (
    <div>
        <nav className='emptyNav'>
            <img className='logonav' src={require('../image/logo.png')}/>
        </nav>
        <main>
        <h1 className='mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'><span className='text-purple-500 '>Time</span> Planner</h1>
        <div className='carts'>
            <div className="container">
            <div className="parent card2">
                <div className="card">
                    <div className="content-box">
                        <h1 className="card-title">Launching time</h1>
                        <p className="card-content">
                        Please note that if you miss the scheduled departure time, your ticket will automatically be rescheduled for the next available trip
                        </p>
                        <span className="see-more"><NavLink to='/profile/:8AM'>Add</NavLink></span>
                    </div>
                    <div className="date-box">
                        <span className="month">8</span>
                        <span className="date">AM</span>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container">
            <div className="parent card2">
                <div className="card" >
                    <div className="content-box">
                        <h1 className="card-title">Launching time</h1>
                        <p className="card-content">
                        Please note that if you miss the scheduled departure time, your ticket will automatically be rescheduled for the next available trip
                        </p>
                        <span className="see-more"><NavLink to='/profile/:3PM'>Add</NavLink></span>
                    </div>
                    <div className="date-box">
                        <span className="month">3</span>
                        <span className="date">PM</span>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container">
            <div className="parent card2">
                <div className="card ">
                    <div className="content-box">
                        <h1 className="card-title">Launching time</h1>
                        <p className="card-content">
                        Please note that if you miss the scheduled departure time, your ticket will automatically be rescheduled for the next available trip
                        </p>
                        <span className="see-more"><NavLink to='/profile/:10PM'>Add</NavLink></span>
                    </div>
                    <div className="date-box">
                        <span className="month">10</span>
                        <span className="date">PM</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
)
}
