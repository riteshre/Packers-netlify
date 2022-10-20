import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from "../components/navbar"
import Footer from "../components/footer"
import Slot from "../components/slot"

const home2 = () => {
  return (
    <div>
      <Navigation/>
      <Container className="display">
      <div>
      <div class="logform">
        <div>
            <img class="image1" src="https://i.pinimg.com/originals/ab/4e/74/ab4e74dac8eb5eabd99a7f18ab75c942.gif" height="55%" width="85%"></img>
        </div>
        <Slot/>
      </div>
    </div>
    </Container>
    <Footer/>
    </div>
  )
}

export default home2
