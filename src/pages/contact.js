import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from "../components/footer"

const contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-5 p-4">
        <Container>
            <div>
            <h2>Contact Us</h2>
            <p>77-3-6, Gandipuram-3,Jagruthi Lab Street, Rajahmundry</p>
            <h4>Mobile no :</h4> <span>6302156642</span>
            <h4>Email id :</h4> <span>riteshreddymedapati@gmail.com</span>
            </div>
            <img src="https://pbs.twimg.com/media/DErrFgOUQAA8T9P?format=jpg&name=4096x4096" height="40%" width="40%"></img>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default contact
