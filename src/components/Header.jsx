import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between items-center text-white mx-4 py-2 font-semibold'>
            <div className='text-2xl '>FASTECH</div>
            <div className=' flex flex-row gap-6 '>
                <a href="">Home</a>
                <a href="">My Profile</a>
                <a href="">Activity</a>
                <a href="">How It Works</a>
            </div>
            <div>
                <button className='rounded px-2 py-1 border mx-2 '>Create</button>
                <button className='rounded px-2 py-1  border mx-2 '>Sign In</button>
            </div>
        </div>
    )
}
