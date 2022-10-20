import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const taskSchema= yup.object({
  name:yup
  .string().required("Name is required"),
  email:yup
  .string().email("Invalid format").required("Email is required"),
  password:yup
  .string().required("Password is required")
})

const url="http://localhost:4000/users";


const Signup = () => {
const navigate = useNavigate();

const [si,setSi]=useState(true)
const notifyemail=()=>{
  toast.error("This email Already Exists",{position:toast.POSITION.TOP_CENTER,
  theme:"colored",
autoClose:3000})
  }


const checkem=(getdata,values)=>{
  const arr=(getdata.filter((user)=>user.email==values.email))
  if(arr.length==0){
    Axios.post(url,{...values})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    navigate('/login')
  }
  else{
    notifyemail()
  }
}

  const formik = useFormik({
    initialValues:{
      name:"",
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
      <Form className="form" onSubmit={formik.handleSubmit}>
      <h1>Sign up</h1>
      <Row className="mb-3">
      <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" 
          id='name'
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}/>
        </Form.Group>
        {formik.touched.name && formik.errors.name ? <p class="error">{formik.errors.name}</p> : null}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
           id='email'
           name='email'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}/>
        </Form.Group>
        {formik.touched.email && formik.errors.email ? <p class="error">{formik.errors.email}</p> : null}

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
          id='password'
          name='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password} />
        </Form.Group>
        {formik.touched.password && formik.errors.password ? <p class="error">{formik.errors.password}</p> : null}
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>Already have an account ? <a class="underline" onClick={()=>{navigate('/login');}}>Click Here</a> to Log in</p>
    </Form>
    <ToastContainer/>
    </div>
  )
}

export default Signup;
