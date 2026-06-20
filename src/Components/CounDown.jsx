import React from 'react'
import Counter from './Counter'
import Flex from './Flex'

const CounDown = () => {
  return (
    <>
    <Flex className='gap-7.5 justify-center mt-10'>
      <Counter boxTime='202' boxDays='Days'
      />
      <Counter boxTime='08' boxDays='Hours'
      />
      <Counter boxTime='13' boxDays='Minutes'
      />
      <Counter boxTime='14' boxDays='Seconds'
      />
    </Flex>
    </>
  )
}

export default CounDown
