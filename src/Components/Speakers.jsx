import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SpeakersCard from './SpeakersCard'
import card1 from "../assets/speakerCrad1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"


const Speakers = () => {
    return (
        <>
            <section className='py-25'>
                <Container>
                    <Flex className="items-center gap-2.5 justify-center">
                        <div className='w-2 h-2 rounded-full bg-primary'>
                        </div>
                        <p className='text-[#161A2D] font-semibold'>Our Speakers</p>
                    </Flex>

                    <h2 className=' pb-20 text-[48px] font-semibold text-[#161A2D] text-center'> Introducing the expert speakers
                    </h2>
                    <Flex className="justify-between">
                    <SpeakersCard ImgSrc={card1}  cardText="Sophia Rodrigues" CardP="Global Marketing Director"/>
                    <SpeakersCard ImgSrc={card2}  cardText="Jacob Jones" CardP="Lead AI Research Scientist"/>
                    <SpeakersCard ImgSrc={card3}  cardText="Arlene McCoy" CardP="Innovation Strategy Expert"/>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Speakers
