import React from 'react'
import Signup from '../components/signup'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const signup = () => {
  return (
    <div>
        <Navbar/>
        <div class="logform">
        <Signup/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default signup
