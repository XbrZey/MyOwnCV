import React from 'react'
import SirenCss from './SirenCss'
import SirenBlips from './SirenBlips'

function MainText() {
  return (
    <section className="relative overflow-hidden">
      <SirenBlips />
      <div className="flex items-center justify-center min-h-dvh px-4">
        <h1 className="text-center font-bold bg-gradient-to-r from-gray-600 to-pink-200 text-transparent bg-clip-text select-none text-4xl sm:text-6xl tracking-tight md:text-8xl md:pb-20 lg:text-[10rem] xl:text-[12rem]">
          Under Renovation
        </h1>
      </div>
    </section>
  )
}

export default MainText