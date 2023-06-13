"use client"
import React, { useRef, useState } from 'react'

const Hero = () => {
const [bg,setbg] = useState("Anggur")
const Anggurtulis = useRef<HTMLDivElement>(null)
const Appletulis = useRef<HTMLDivElement>(null)
const Jeruktulis = useRef<HTMLDivElement>(null)

bg === "Jeruk" ?  Jeruktulis.current?.scrollIntoView({ block: "start", behavior: "smooth" }) : (bg === "Apple" ? Appletulis.current?.scrollIntoView({ block: "start", behavior: "smooth" }) : Anggurtulis.current?.scrollIntoView({ block: "start", behavior: "smooth" }))
  return (
    <>

    <div style={bg === "Apple" ? {background:"radial-gradient(circle at 24.19% 45.92%, #F96270, transparent 24%),radial-gradient(circle at 50% 50%, #A62B38, #A62B38 100%)"} : (bg === "Jeruk" ? {background:"radial-gradient(circle at 28.19% 41.92%, #FF8C61, transparent 26%),radial-gradient(circle at 50% 50%, #E85D25, #E85D25 100%)"} : {background:"radial-gradient(circle at 24.19% 45.92%, #C874F4, transparent 24%),radial-gradient(circle at 50% 50%, #65347E, #65347E 100%)"}) } className='h-screen w-screen cuy flex flex-col justify-center  -z-20 absolute'>
        <div className='absolute -z-10 blur-sm'>
            <img className={bg === "Anggur" ?'h-screen scale-100 duration-100' :"hidden"} src='./anggur.png'/>
            <img className={bg === "Apple" ?'h-screen scale-100 duration-100' :"hidden "} src='./apple.png'/>
            <img className={bg === "Jeruk" ?'h-screen scale-100 duration-100' :"hidden "} src='./jeruk.png'/>
           
        </div>
        <div className=' pl-32 w-1/3 max-lg:w-7/12 max-xl:w-1/2  max-md:w-10/12 max-sm:w-full max-sm:pl-0 h-72 overflow-y-scroll c'>
            <div ref={Jeruktulis} className={ 'flex flex-col max-lg:my-5 justify-start text-start text-white gap-5 my-3 '}>
            <h1 className='text-6xl font-bold'>Fanta Soda</h1>
            <h1 className='text-3xl font-thin'>Rasa Jeruk</h1>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consecte adipisicing elit. Ad, illum. Voluptatum inventore molestiae eum dolores, quo voluptatibus nesciunt laudantium doloribus molestias officiis quasi?</p>
            </div>
            <div ref={Anggurtulis}  className={'flex flex-col max-lg:my-5 justify-start text-start text-white gap-5 my-3'}>
            <h1 className='text-6xl font-bold'>Fanta Soda</h1>
            <h1 className='text-3xl font-thin'>Rasa Anggur</h1>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consecte adipisicing elit. Ad, illum. Voluptatum inventore molestiae eum dolores, quo voluptatibus nesciunt laudantium doloribus molestias officiis quasi?</p>
            </div>
            <div ref={Appletulis} className={ 'flex flex-col max-lg:my-5 justify-start text-start text-white gap-5 my-3'}>
            <h1 className='text-6xl font-bold'>Fanta Soda</h1>
            <h1 className='text-3xl font-thin'>Rasa Apple</h1>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consecte adipisicing elit. Ad, illum. Voluptatum inventore molestiae eum dolores, quo voluptatibus nesciunt laudantium doloribus molestias officiis quasi?</p>
            </div>
        </div>
        <div className='ml-32 pt-20 max-sm:ml-0 '>
            <div className='flex gap-16 absolute'>

            <img onClick={() => setbg("Jeruk")} className={bg === "Jeruk" ?'w-16 scale-125 duration-500' :'w-16 duration-500'} src="./kalenngJeruk.png"/>
            <img onClick={() => {setbg("Anggur")}} className={bg === "Anggur" ?'w-16 scale-125 duration-500' :'w-16  duration-500'}  src="./kalengAnggur.png"/>
            <img onClick={() => {setbg("Apple")}} className={bg === "Apple" ?'w-16 scale-125 duration-500' :'w-16  duration-500'}  src="./kalengApple.png"/>
            </div>
        </div>
        <div className='flex flex-col overflow-hidden absolute right-0 w-1/2 items-center justify-center h-screen  max-lg:hidden'>
            <img onClick={() => {setbg("Jeruk")}} className={bg === "Anggur" ? 'w-48 absolute rotate-12 scale-50  duration-500 translate-x-60 blur-sm translate-y-64':(bg === "Jeruk" ? 'w-48 absolute duration-500 scale-95' : 'w-48 absolute rotate-12 blur-sm duration-500 scale-50 translate-x-96 translate-y-96 opacity-0')} src="./kalenngJeruk.png"/>
            <img onClick={() => {setbg("Anggur")}} className={bg === "Anggur" ? 'w-48 absolute duration-500 scale-95 ' : (bg === "Jeruk" ? 'w-48 absolute -rotate-12 scale-50 blur-sm translate-x-60 duration-500 -translate-y-64' :  'w-48 duration-500 absolute blur-sm rotate-12 scale-50 translate-x-60 translate-y-64') } src="./kalengAnggur.png"/>
            <img onClick={() => {setbg("Apple")}} className={bg === "Anggur" ? 'w-48 absolute -rotate-12 scale-50 duration-500 translate-x-60 blur-sm -translate-y-64' : (bg === "Apple" ? 'w-48  duration-500 absolute scale-95' : "w-48 absolute duration-500 blur-sm rotate-12 scale-50 translate-x-96 -translate-y-96 opacity-0")} src="./kalengApple.png"/>
        </div>
    </div>







{/* 
    <div style={{background:"radial-gradient(circle at 28.19% 41.92%, #F96270, transparent 26%),radial-gradient(circle at 50% 50%, #A62B38, #A62B38 100%)"}} className='h-screen w-screen cuy'>

    </div>
    <div style={{background:"radial-gradient(circle at 28.19% 41.92%, #FF8C61, transparent 26%),radial-gradient(circle at 50% 50%, #E85D25, #E85D25 100%)"}} className='h-screen w-screen cuy'>
  
    </div> */}
   
    </>
  )
}

export default Hero