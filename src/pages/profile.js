import React from 'react'
import { useParams } from 'react-router-dom';

export default function Profile(info) {
    const { time } = useParams()
    console.log(info.data.name)
    return (
        <div>
            <nav className='emptyNav'>
            <img className='logonav' src={require('../image/logo.png')}/>
            </nav>

            <div className='profilecart'>                
                <h1 className='titleticket font-extrabold leading-none tracking-tight text-gray-900dark:text-white'>Your <span className='text-purple-400 '>Ticket</span></h1>
                <div className='ticket'>
                    <div className='infocart'>
                        <h1 className='nameinfo'>{info.data.fname} <span className='text-purple-400 '>{info.data.lname}</span></h1>
                        <h1>Phone <span className='text-purple-400 '>{info.data.phone}</span></h1>
                        <h1>Email <span className='text-purple-400 '>{info.data.email}</span></h1>
                        <h1>Location <span className='text-purple-400 '>{info.data.location}</span></h1>
                        <h1>Destenation <span className='text-purple-400 '>{info.data.destenation}</span></h1>
                        <h1>Time of Travel <span className='text-purple-400 '>{time}</span></h1>
                    </div>
                    <div className='imgprofile'>
                        <img src={require('../image/ticket.jpeg')}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
