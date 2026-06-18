import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Day from './Day'
import Time from './Time'


const Explore = () => {
    return (
        <>
            <div className="bg-[url('./assets/exploreBG.jpg')] py-25 px-51.5 h-305">
                <Container>
                    <Flex className='items-center gap-2.5 justify-center'>
                        <div className='w-2 h-2 rounded-full bg-white  pb-[10x]'>
                        </div>
                        <p className='font-semibold text-white'>Our Event Schedule</p>
                    </Flex>
                    <h2 className='text-[48px] font-semibold text-white w-187.5 text-center mx-auto'>Explore the complete schedule for
                        our event</h2>
                        <Day/>

                        <Time/>
                </Container>
            </div>
        </>
    )
}

export default Explore
