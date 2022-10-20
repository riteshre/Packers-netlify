import React, { useState } from "react";
import Slot from '../components/slot'
import Signup from "../components/signup"
import Loginform from "../components/loginform"
import {usercontext} from "../components/logcontext"

const Contextu = () => {
    const [ren,setRen]=useState(true);
  return (
    <div>
        <usercontext.Provider value={{ren,setRen}}>
            <Slot/>
            <Signup/>
            <Loginform/>
        </usercontext.Provider>
      </div>
  )
}

export default Contextu
