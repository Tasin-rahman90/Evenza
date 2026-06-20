import React from 'react'
import Container from './Container'
import Button from './Button'
import PlayBtn from "../assets/play.png"
import Flex from './Flex'
import Ideas from './Ideas'
import CounDown from './CounDown'
import Dot from './Dot'

const Banner = () => {
    return (
        <>
            <section>
                <div className="bg-[url('./assets/banner.png')] bg-cover bg-center bg-no-repeat py-33">
                    <Container>
                        <Ideas/>
                        <div className='text-white text-center '>
                            <h1 className='font-extrabold text-[76px] leading-20.75 max-w-300 mx-auto'>Connecting Minds to Shape Tomorrow's Big Ideas</h1>

                            <p className='pt-3.75 pb-13 max-w-183.25 mx-auto'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
                                exchanging ideas that spark growth, innovation, and meaningful change.</p>
                                <Flex className="justify-center gap-4 mb-12.5">
                            <Button>Explore Schedule</Button>
                            <Flex className="gap-4 items-center justify-center">
                                <img src={PlayBtn} alt="" />
                                <a href="#">Watch Video</a>
                            </Flex>
                                </Flex>
                            <p className='text-[20px] font-bold'>Upcoming Speaker Reveal - Don't Miss Out</p>
                        </div>
                        <CounDown/>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Banner
