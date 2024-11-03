import React from 'react'

function Card1({title ,Numb}) {
  return (
   
    <div className='h-36 w-36 bg-slate-50 border border-black flex flex-col justify-center items-center text-center'>
    <h1 className='text-2xl font-bold mb-2'>{Numb}<span className='size-3'>+</span> </h1>
    <h2 className='text-lg'>{title}</h2>
  </div>
  
  )
}

export default Card1
