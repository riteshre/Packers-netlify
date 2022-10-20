import React, { useState } from 'react'
import Logincomp from '../components/logincomp'
import Signup from "../components/signup"

const loginform = () => {
  return (
    <div>
      <div class="logform">
        <div>
            <img src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png"></img>
        </div>
        <Logincomp/>
      </div>
    </div>
  )
}

export default loginform
