import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/navbar'
import {useFormik} from 'formik'
import * as yup from 'yup'
import Footer from '../components/footer'

const bh=[
  {key:"1BHK",value:100},
  {key:"2BHK",value:150},
  {key:"3BHK",value:200},
  {key:"4BHK",value:250}
]

var doct=null;

const taskSchema= yup.object({
    From:yup
    .string().required("From Address is required"),
    To:yup
    .string().required("To address is required"),
    distance:yup
    .number().required("enter distance")
  })

const Costcalculator = () => {
  const[selec,setSelec]=useState('')
  const[tru,setTru]=useState(false)
    const formik = useFormik({
        initialValues:{
            From:"",
            To:"",
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
             console.log(values)
            }
          }
          setTru(true)
        },
        validationSchema:taskSchema
    })
  return (
    <div>
        <Navbar/>
      <Form className="form" onSubmit={formik.handleSubmit}>
        <h1>Cost Calculator</h1>
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
{tru ?<h6>The price for the above given details is {doct} Rupees</h6>: ""}

<Button variant="primary" type="submit">
        View Cost
      </Button>
    </Form>
    <Footer/>
    </div>
  )
}

export default Costcalculator
