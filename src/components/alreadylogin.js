import React, { useContext, useEffect, useState } from 'react'
import { store } from '../App';
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alreadylogin = () => {
  const [islogged,setIslogged]=useContext(store)
  const [to,setTo]=useState(true)
  const navigate = useNavigate();
  const notifysignup=()=>{
    toast.success("Successfully LoggedIn",{postion:toast.POSITION.TOP_CENTER,
      theme:"colored",
      autoClose:3000})
  } 
const tuefunc=()=>{
  if(islogged){
    notifysignup()
  }
}

  useEffect(()=>{
    notifysignup()
  },[to])
  return (
    <div>
      <Container className="mt-5 pt-4">
        <div class="cnter">
        <h2>Welcome To Packers & Movers</h2>
        <img src="https://shiftme.in/wp-content/uploads/2021/01/mission-01.png"></img>
        <br/>
        <h5>If you want to know Estimated cost for your apartment</h5>
        <button type="button" class="btn btn-dark" onClick={()=>{navigate('/costcalculator');}}>Cost Calculator</button>
        <h5>You can also book your slot for packing and moving</h5>
        <button type="button" class="btn btn-dark" onClick={()=>{navigate('/');}}>Home</button>
        </div>

      </Container>
      <ToastContainer/>
    </div>
  )
}

export default Alreadylogin
