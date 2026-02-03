import React from 'react'

import img1 from '../assets/me.png'
const Project: React.FC = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold'>Project</h1>
        <p className='text-xl'>Project Description</p>
        <div className='flex gap-4'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Project</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Source</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Demo</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Video</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View GitHub</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Live</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View More</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Less</button>
        </div>
        <div className='flex gap-4'>
            <img className='w-1/2 h-1/2' src={img1} alt="" />
        </div>
        <div className='flex gap-4'>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>  
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>

    </div>
    
  )
}

export default Project
