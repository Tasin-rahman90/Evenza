import React from 'react'
import img from "../assets/featureaBg.png"
import Container from './Container'
import Flex from './Flex'
import Card from './Card'
import ImgOne from "../assets/cardicon1.png"
import ImgTow from "../assets/icontow.png"
import ImgThree from "../assets/iconthree.png"
import ImgFour from "../assets/iconfour.png"

const Features = () => {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className="py-25 px-50 bg-cover bg-center bg-no-repeat "
        >
            <Container>
                <Flex className="items-center gap-1.5 justify-center">
                    <div className='w-2 h-2 rounded-full bg-white'>
                    </div>
                    <p className='font-semibold text-white' >Core Feature</p>
                </Flex>
                <div>
                    <h2 className='text-[48px] font-semibold text-white w-160 text-center mx-auto mb-18.75'>Core features that power our
                        exceptional services</h2>
                </div>
            </Container>

            <Flex className="justify-between">
                <Card
                    ImgSrc={ImgOne} />
                <Card
                    ImgSrc={ImgTow}
                />
                <Card
                    ImgSrc={ImgThree}
                />
                <Card
                    ImgSrc={ImgFour}
                />
            </Flex>

            <p className='mt-15.5 text-white text-center'>Join our team and help weave innovation, quality, and success together worldwide.</p>


            <Flex className="gap-3.25 text-[20px] font-bold text-white mt-5.5 justify-center">
                <p>4.9/5</p>
                <div className="text-primary">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>Our 4200 Review</p>
            </Flex>


        </div>
    )
}

export default Features