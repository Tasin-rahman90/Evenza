import React from 'react'
import Container from './Container'
import eventImg from "../assets/event.png"
import Flex from './Flex'
import scndImg from "../assets/eventScndImg.png"
import ThrdImg from "../assets/eventThrdImg.png"
import Button from './Button'
import callBtn from "../assets/call.png"

const AboutEvent = () => {
    return (
        <>
            <section className='py-25'>
                <Container>
                    <Flex>


                        <div>
                            <img src={eventImg} alt="" />
                        </div>


                        <div>

                            <Flex className="items-center gap-1.5">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <p className='font-semibold'>About Us</p>
                            </Flex>

                            <h2 className='font-semibold text-[48px] leading-13 text-[#161A2D] pt-4.25 pb-10.5'>Behind this event</h2>

                            <p className='text-[#737681] w-165.75'>Discover the vision that drives this event—a commitment to bringing together innovators,
                                leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                                connections.</p>



                            <div className='bg-[#F6F6F7] w-180.25 rounded-[20px] p-2.5 my-10.5'>
                                <Flex className="justify-between font-bold ">

                                    <div className='py-4.75 px-15.5 hover:bg-white rounded-[10px]  transition duration-300  '>
                                        <h3>Our Mission</h3>
                                    </div>
                                    <div className='py-4.75 px-15.5 hover:bg-white rounded-[10px]  transition duration-300'>
                                        <h3>Our Vision</h3>
                                    </div>
                                    <div className='py-4.75 px-15.5 hover:bg-white rounded-[10px]  transition duration-300'>
                                        <h3>Our Goal</h3>
                                    </div>
                                </Flex>
                            </div>


                            <p className='text-[#737681] w-178.75'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                                fresh thinking, spark inspiring dialogues, and create a space.</p>


                            <div className='mt-14.5 mb-6'>
                                <Flex>

                                    <Flex className="items-center gap-3.75">
                                        <img src={scndImg} alt="" />
                                        <h3 className='text-[20px] font-bold text-[#161A2D]'>Receive real-time event
                                            updates.</h3>
                                    </Flex>

                                    <Flex className="items-center gap-3.75">
                                        <img src={ThrdImg} alt="" />
                                        <h3 className='text-[20px] font-bold text-[#161A2D]'>Receive real-time event
                                            updates.</h3>
                                    </Flex>

                                </Flex>


                                <Flex className="gap-7.5 mt-16.5">
                                    <Button>
                                        Learn More About
                                    </Button>
                                    <div>
                                        <Flex className="items-center gap-3.75">
                                            <img src={callBtn} alt="" />

                                            <div>
                                                <h3 className="text-[#161A2D] text-[20px] font-bold">
                                                    Call Now!
                                                </h3>
                                                <p className="text-[#737681]">
                                                    +00 123 456 789
                                                </p>
                                            </div>
                                        </Flex>
                                    </div>
                                </Flex>


                            </div>

                        </div>

                    </Flex>

                </Container>
            </section>
        </>
    )
}

export default AboutEvent