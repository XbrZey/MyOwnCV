import React from 'react'
import SirenCss from './SirenCss'
import SirenBlips from './SirenBlips'
function MainText() {
  return (
    <section>
      
      <SirenBlips/>
      <div className="flex items-center min-h-screen px-5 pb-35 md:pb-3">
      <h1 className="text-7xl pb-38 sm:text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-gray-600 to-pink-200 text-transparent bg-clip-text">
        Welcome to <br /> My CV
      </h1>
    </div>
    </section>
    
  )
}

export default MainText