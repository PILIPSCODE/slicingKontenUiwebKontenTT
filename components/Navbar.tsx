import React from 'react'

const navbar = () => {
  return (
    <div className='flex flex-row bg-transparent text-white p-9 items-center absolute w-full'>
        <div className='flex justify-center px-24 text-2xl font-bold max-lg:px-8 max-md:px-2'>
            <h1>Sodaku</h1>
        </div>
        <div className="flex flex-row px-24 gap-10 font-semibold max-lg:px-8 max-md:hidden">
            <h1>Home</h1>
            <h1>Product</h1>
            <h1>About us</h1>
            <h1>Contact Person</h1>
        </div>
    </div>
  )
}

export default navbar