import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useFormik} from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { store } from '../App';


const bh=[
  {key:"1BHK",value:100},
  {key:"2BHK",value:150},
  {key:"3BHK",value:200},
  {key:"4BHK",value:250}
]

const taskSchema= yup.object({
    From:yup
    .string().required("From is required"),
    To:yup
    .string().required("To is required"),
    email:yup
    .string().email("Invalid format").required("Email is required"),
    Phone:yup
    .number().required("Phone number is required"),
    distance:yup
    .string().required("Enter distance")
  })
  const url2="http://localhost:4000/slot";
  const url1="http://localhost:4000/users";

  var doct=null;

const Slot = () => {
  const[selec,setSelec]=useState('')
  const[tru,setTru]=useState(false)
  const [user,setUser]=useContext(store)
  const [islogged,setIslogged]=useContext(store)
  const [to,setTo]=useState(false)
  const notifyemail=()=>{
    toast.error("Email Doesn't Exists go and signup",{position:toast.POSITION.TOP_CENTER,
    theme:"colored",
  autoClose:3000})
    }
    const notify=()=>{
      toast.error("Please Login",{position:toast.POSITION.TOP_CENTER,
      theme:"colored",
    autoClose:3000})
      }

 

    
  const checkem=(getdata,values)=>{
    const arr=(getdata.filter((user)=>user.email==values.email))
    if(islogged){
      if(arr.length == 1){
        Axios.post(url2,{...values})
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        setTo(true)
      }
      else{
        notifyemail()
        setTo(true)
      }
    }
    else{
      notify()
    }
  
}

    const formik = useFormik({
        initialValues:{
            From:"",
            To:"",
            email:"",
            Phone:"",
            distance:""
        },
        onSubmit:(values)=>{
          values=({...values,selec})
          const dist = values.distance
          console.log(dist)
          for(let i=0;i<bh.length;i++){
            if(bh[i].key === values.selec ){
             var doc = bh[i].value*dist
             doct=doc
            }
          }
          values=({...values,rate:doc})
          console.log(values)
          Axios
          .get(url1)
          .then((res) => checkem(res.data,values));
          setTru(true)
        },
        validationSchema:taskSchema
    })
  return (
    <div>
       <Form className="sloteform" onSubmit={formik.handleSubmit}>
      <h1>Slot Booking</h1>
      {islogged ? <h5 class="error">Welcome <span>{user}</span></h5>: null}
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Moving From</Form.Label>
          <Form.Control type="text" placeholder="Moving From:" 
           id='From'
           name='From'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.From}/>
        </Form.Group>
        {formik.touched.From && formik.errors.From ? <p class="error">{formik.errors.From}</p> : null}

        <Form.Group as={Col} >
          <Form.Label>Moving To</Form.Label>
          <Form.Control type="text" placeholder="Moving To:"
           id='To'
           name='To'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.To} />
        </Form.Group>
        {formik.touched.To && formik.errors.To ? <p class="error">{formik.errors.To}</p> : null}
      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} >
          <Form.Label>Shifting type</Form.Label>
          <Form.Select onChange={(e)=>{
            const selectedb=e.target.value;
            setSelec(selectedb)
          }}>
           <option value=''>Select</option>
            <option value='1BHK'>1BHK</option>
            <option value='2BHK'>2BHK</option>
            <option value='3BHK'>3BHK</option>
            <option value='4BHK'>4BHK</option>
          </Form.Select>
        </Form.Group>
        
        </Row>
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

        <Form.Group as={Col} >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" 
           id='Phone'
           name='Phone'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.Phone}/>
        </Form.Group>
        {formik.touched.Phone && formik.errors.Phone ? <p class="error">{formik.errors.Phone}</p> : null}

        <Form.Group as={Col} >
          <Form.Label>Distance</Form.Label>
          <Form.Control type="text" placeholder="distance in km" 
           id='distance'
           name='distance'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.distance}/>
        </Form.Group>
        {formik.touched.distance && formik.errors.distance ? <p class="error">{formik.errors.distance}</p> : null}
        <br/>
        {/* { ?<h6>The price for the above given details is {doct} Rupees</h6>: ""} */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <ToastContainer/>
    {to?<h5 class="error">Thank you for Booking Slot Our Team will contact You</h5>:null}
    
    
    </div>
  )
}

export default Slot
