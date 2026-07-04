import React from 'react'

function NavBar() {
  return (
    <nav className='fixed top-6 rounded-3xl w-full z-50 flex px-6 py-4 justify-between items-center backdrop-blur-md bg-white/10 border-b border-white/20 shadow-sm'>
        <div className='font-bold text-2xl md:text-3xl'>
            Paritosh Dahal
        </div>

        <div className='hidden md:flex gap-8 font-bold text-xl'>
            <button className='cursor-pointer bg-gray-700/20 rounded-full px-3 py-3  '>
                About
            </button>

            <button className='cursor-pointer bg-gray-700/20 rounded-full px-3 py-3  '>
                Projects
            </button>

            <button className='cursor-pointer bg-gray-700/20 rounded-full px-3 py-3  '>
                 Contact           
            </button>
        </div>
    </nav>
  )
}

export default NavBar