import React from 'react'
import Flex from './Flex'

const Dot = ({DotText}) => {
    return (
        <>
            <Flex className='items-center gap-2.5'>
                <div className='w-2 h-2 bg-primary rounded-full'>
                </div>
                <p className='text-[#161A2D]'>{DotText}</p>
            </Flex>
        </>
    )
}

export default Dot
