import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const BookingForm = () => {
  const [name,setname] = useState("")
  const[mail,setmail]=useState("")
  const [checkin, setcheckin] = useState(" ")
  const [checkout, setcheckout] = useState(" ")
  const [guest, setguest] = useState("")
  const [text, settext] = useState("")




    


  const handleChange = async() => {
  
    
      let data= await fetch("http://localhost:3000/Reservation",{
        method:'post',
        body : JSON.stringify({name,mail,checkin,checkout,guest,text}),
        headers:{
            'Content-Type':'application/json',
        },
    })
    data= await data.json()
    console.log(data)
    console("done")
  
  
  
  
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server, etc.)
  };

  return (
    <Container className="py-5" style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Book a Hotel Room</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e)=>{
              setname(e.target.value)
            }}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={mail}
            onChange={(e)=>{
              setmail(e.target.value)
            }}            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="checkIn">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control
                type="date"
                value={checkin}
                onChange={(e)=>{
                  setcheckin(e.target.value)
                }}                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="checkOut">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control
                type="date"
                value={checkout}
                onChange={(e)=>{
                  setcheckout(e.target.value)
                }}                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="guests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            as="select"
            value={guest}
            onChange={(e)=>{
              setguest(e.target.value)
            }}          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            value={text}
            onChange={(e)=>{
              settext(e.target.value)
            }}            rows={3}
            placeholder="Optional: Leave a message for the hotel"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleChange}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
