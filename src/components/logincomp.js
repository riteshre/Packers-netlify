import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useFormik} from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { HashRouter, useNavigate } from 'react-router-dom';
import Alreadylogin from "./alreadylogin"
import { store } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const taskSchema= yup.object({
  email:yup
  .string().email("Invalid format").required("Email is required"),
  password:yup
  .string().required("Password is required")
})
const url="https://63521fd79d64d7c7130f201b.mockapi.io/packers";


const Logincomp = () => {
  const [islogged,setIslogged]=useContext(store)
  const [ispass,setIspass]=useState(false)
  const [user,setUser]=useContext(store)
const navigate = useNavigate();
const notifypassword=()=>{
  toast.warn("Password is incorrect",{position:toast.POSITION.TOP_CENTER,
  theme:"colored",
autoClose:3000})
  }
  const notifyemail=()=>{
    toast.error("Email Doesn't Exists go and signup",{position:toast.POSITION.TOP_CENTER,
    theme:"colored",
  autoClose:3000})
    }
const notifysignup=()=>{
  toast.success("Successfully Registered",{postion:toast.POSITION.TOP_CENTER,
    theme:"colored",
    autoClose:3000})
} 

const checkem=(getdata,values)=>{
  const arr=(getdata.filter((user)=>user.email==values.email))
  if(arr.length == 1){
    if(arr[0].password == values.password){
      setIslogged(true)
      setUser(arr[0].name)
    }
    else{
      setIspass(true)
      notifypassword()
    }
  }
  else{
    notifyemail()
  }
}

  
  const formik = useFormik({
    initialValues:{
        email:"",
        password:""
    },
    onSubmit:(values)=>{
      Axios
      .get(url)
      .then((res) => checkem(res.data,values));
    },
    validationSchema:taskSchema
})

  return (
    <div>
      {islogged ? <Alreadylogin/>: 
      <div>
        <div class="logform">
      <Form className="form" onSubmit={formik.handleSubmit}>
       <h1>Log In</h1>
       <Row className="mb-3">
         <Form.Group>
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" placeholder="Enter email"
           id='email'
           name='email'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email} />
         </Form.Group>
         {formik.touched.email && formik.errors.email ? <p class="error">{formik.errors.email}</p> : null}
 
         <Form.Group>
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" 
           id='password'
           name='password'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.password}/>
         </Form.Group>
         {formik.touched.password && formik.errors.password ? <p class="error">{formik.errors.password}</p> : null}
       </Row>
       {ispass ? <p class="para">Password is incorrect</p>:null}
 
 
 
       <Button variant="primary" type="submit">
         Submit
       </Button>
       <p>Didnt have a account ? <a class="underline"onClick={()=>{navigate('/signup');}}>ClickHere</a> to signup</p>
     </Form>
     </div>
     <ToastContainer/>
     </div>}
     </div>
    
  )
}

export default Logincomp;
