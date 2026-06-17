import React from 'react'
import logo from "../assets/logo.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

const NavBar = () => {
  return (
    <>
      <nav className=' absolute top-0 left-0 w-full backdrop-blur-sm text-white py-6.25'>
        <Container>
            <Flex className="justify-between items-center"> 
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>About Us</li>
            <li>Schedule</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact Us</li>
        </ul>
        <Button>Join the Conference</Button>
            </Flex>
        </Container>
      </nav>
    </>
  )
}

export default NavBar


