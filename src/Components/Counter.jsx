import React from 'react'

const Counter = ( {boxTime,boxDays} ) => {
  return (
    <>
      <div className='px-6.5 pt-5.25 pb-6.75 text-white rounded-[20px] backdrop-blur-xl w-31.25 text-center'>
        <h2 className='text-[40px] font-bold'>{boxTime}</h2>
        <p>{boxDays}</p>
      </div>
    </>
  )
}

export default Counter
