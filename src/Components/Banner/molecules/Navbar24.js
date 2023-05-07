
import React, { useState } from 'react'
import Burger1 from './Burger1'

const Navbar24 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="z-30 absolute top-0 left-0 w-full h-full sm:w-2/3 bg-transparent text-gray-100 body-font mb-4">

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-2 px-5">
        {/* ::Site logo and Name */}
        <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          <span className="ml-3 text-lg text-gray-400 font-light antialiased">Hero 1 Navbar</span>
        </a>
        {/* ::Burger icon standard */}
        <div className="inline-flex items-center">
          <span className="mr-4 text-lg text-gray-500 uppercase">Menu</span>
          <Burger1 isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
      </div>

      {/* :OPENED MENU */}
      { isOpen &&
        <div className="w-full h-full flex flex-col md:justify-center py-4 px-3 bg-gray-200 bg-opacity-95 text-base uppercase text-center font-semibold">
          <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-gray-700 hover:text-white hover:bg-yellow-600">Solutions</a>
          <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-gray-700 hover:text-white hover:bg-yellow-600">Prices</a>
          <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-gray-700 hover:text-white hover:bg-yellow-600">About</a>
          <a href="#link" className="block my-5 px-3 py-2 rounded-md md:text-2xl text-gray-700 hover:text-white hover:bg-yellow-600">Contact</a>
        </div>
      }

    </header>
  )
}

export default Navbar24
