import React from 'react'

const Swipper = () => {
  return (
    <div>
         <div className=' pl-32 w-1/3 overflow-y-hidden'>
            <div className={ bg === "Anggur" ? 'flex flex-col justify-start text-start text-white gap-5' : "hidden"}>
            <h1 className='text-6xl font-bold'>Fanta Soda</h1>
            <h1 className='text-3xl font-thin'>Rasa Anggur</h1>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consecte adipisicing elit. Ad, illum. Voluptatum inventore molestiae eum dolores, quo voluptatibus nesciunt laudantium doloribus molestias officiis quasi?</p>
            </div>
            <div className={ bg === "Apple" ? 'flex flex-col justify-start text-start text-white gap-5' : "hidden"}>
            <h1 className='text-6xl font-bold'>Fanta Soda</h1>
            <h1 className='text-3xl font-thin'>Rasa Apple</h1>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consecte adipisicing elit. Ad, illum. Voluptatum inventore molestiae eum dolores, quo voluptatibus nesciunt laudantium doloribus molestias officiis quasi?</p>
            </div>
            <div className={ bg === "Jeruk" ? 'flex flex-col justify-start text-start text-white gap-5' : "hidden"}>
            <h1 className='text-6xl font-bold'>Fanta Soda</h1>
            <h1 className='text-3xl font-thin'>Rasa Jeruk</h1>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consecte adipisicing elit. Ad, illum. Voluptatum inventore molestiae eum dolores, quo voluptatibus nesciunt laudantium doloribus molestias officiis quasi?</p>
            </div>
        </div>
        <div className='ml-32 pt-20  '>
            <div className='flex gap-16 absolute'>

            <img onClick={() => {setbg("Jeruk")}} className='w-16 hover:scale-125 duration-500' src="./kalenngJeruk.png"/>
            <img onClick={() => {setbg("Anggur")}} className='w-16  hover:scale-125 duration-500 ' src="./kalengAnggur.png"/>
            <img onClick={() => {setbg("Apple")}} className='w-16  hover:scale-125 duration-500 ' src="./kalengApple.png"/>
            </div>
        </div>
    </div>
  )
}

export default Swipper