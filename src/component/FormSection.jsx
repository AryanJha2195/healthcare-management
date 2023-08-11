import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormSection = () => {
  return (
    <div>
    <div className='d-flex justify-content-center' style={{backgroundColor: "#9e42f5", color: "white", fontSize: "20px"}}>For Any Query Please Write To Us...</div>

    <div>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Your e-mail ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write Here...</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <div className='d-flex justify-content-center'>
    <Button variant="primary">Submit</Button>
    </div>
    </div>
    </div>
  )
}

export default FormSection