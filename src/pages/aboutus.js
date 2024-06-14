import React from 'react'

export default function aboutus() {
  return (
    <div className='aboutus'>
      <div className='team'>
        <h1 className='mb-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>Teamwork</h1>
        <div>
          <p className='text-white '>At <span className='text-purple-400 '>TRAVELHUB</span> we embark on a journey to redefine the way you experience travel.<span className='text-purple-400 '>Our commitment</span>  goes beyond mere transportation; it's about creating moments, forging connections, and turning every bus ride <span className='text-purple-400 '>into an adventure</span></p>
          <p className='text-white'><span className='text-purple-400 '>Our vision</span> is rooted in a deep passion for exploration and a belief that travel should be seamless, enjoyable, and filled with discoveries.<span className='text-purple-400 '>We've assembled </span> a team of dedicated professionals, each sharing the same enthusiasm for enhancing <span className='text-purple-400 '>our travel experiences</span>y</p>
        </div>
      </div>
      <div className='boss'>
        <h1 className='mb-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>Administrator</h1>
        <p className='text-white '>we're not just in the business of transportation we're in the business of creating unforgettable journeys. Let's travel together and make every mile a memorable adventure</p>
        
      </div>
      <div className='mediaaboutus'>
        <h1 className='mb-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>Contact</h1>
        <div className='mediaIcon'>
              <img src={require('../image/media/fb.png')}/>
              <img src={require('../image/media/insta.png')}/>
              <img src={require('../image/media/whatsapp.png')}/>
              <img src={require('../image/media/google.png')}/>
          </div>
      </div>
    </div>
  )
}
