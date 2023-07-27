import React, { useState } from 'react';
import { Container, Row, Col, Image, Button , Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../components/LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';
import data from "./rooms.json"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import bedImage from '../assets/bedroom2.jpg';
import './Booking.css';



// import { selectedDate } from './room1';

function BookingRoom() {



  const [mm, setMM] = useState(data);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.index == params.id);



  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [selectedDate2, setSelectedDate2] = useState(getCurrentDate2());

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function getCurrentDate2() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function arrivalDateChange(events) {
    setSelectedDate(events.target.value);
  }

  function departureDateChange(events) {
    setSelectedDate2(events.target.value);
  }

  const [adults, setAdults] = useState(1);

  function Increment() {
    if (adults < 2 ) {
      setAdults(adults + 1);
    }
  }

  function Decrement() {
    if (adults > 1 ) {
      setAdults(adults - 1);
    }
  }

  const [children, setChildren] = useState(0);

  function Increment1() {
    if (children < 2 ) {
      setChildren(children + 1);
    }
  }

  function Decrement1() {
    if (children > 0 ) {
      setChildren(children - 1);
    }
  }

 
  


  return (
    <>
      <Header />
      
      {
        mm1.map((data) => {
          return (
            <>
            <div className="backgroundImage" style={{backgroundImage:`url(${bedImage})` , height:'100vh' ,width:'99vw', backgroundSize:'cover' , backgroundRepeat:'no-repeat' , backgroundPosition:'center'}}>
              <Container className='imageHotel'>
                
                <Row>


                <Col md={8} className="mt-5"  >
                  <div className="textheading mt-5" style={{color:'#fff' , width:'800px'}}>
                    <h1 style={{fontSize:'70px' ,  width:'650px'}} className="mb-4">Lake A Luxury Hotel</h1>

                    <text style={{fontWeight:'bold',fontSize:'17px'}}>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.Focus on something that makes the place special–either for you, or for the guests. It can be an amazing location (a place where you always wanted to work, and guests love to come)</text>
                    </div>
                </Col>



                  <Col md={4}>
                  <div className="form d-flex justify-content-center mt-5 " style={{width:'350px' , height:'500px' , background:'rgba(0,0,0,0.6)' ,color:'#fff',fontWeight:'bold',border:'1px solid teal', borderRadius:'30px'}}>
                    <form className="mt-3" >
                    <h2>Book Your Hotel</h2>
                      <div className="mt-4">
                      
                      <label htmlFor='CheckIn' className="mb-3">Check In:</label><br />
                        <input type="date" placeholder="asdf" name="CheckIn" value={selectedDate} onChange={arrivalDateChange} style={{width:'100%' , padding:'10px'}}/>
                       </div>

                       <div>
                      
                      <label htmlFor='CheckOut' className="mt-3 mb-3">Check Out:</label><br />
                        <input type="date" placeholder="asdf" name="CheckOut" value={selectedDate2} onChange={departureDateChange} style={{width:'100%' , padding:'10px'}}/>
                       </div>


                       
                       <div className="mt-3">
                      
                       
                       <label>Adults</label><br />
                            {/* <Button style={{ marginRight: '4%' }} onClick={Decrement}>
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{adults}</span>
                            <Button style={{ marginRight: '4%' }} onClick={Increment}>
                              +
                            </Button>
                             */}

                      <span>

                          {/* <Button style={{ marginRight: '4%' }} onClick={Decrement}>
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{adults}</span>
                            <Button style={{ marginRight: '4%' }} onClick={Increment}>
                              +
                            </Button> */}


                        <div style={{display:'flex' , gap:'3rem'}} className="mt-2">
                        <Button style={{ marginRight: '4%' , border:'none' , fontWeight:'600' }} onClick={Decrement} className="bg-primary" >
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{adults}</span>
                            <Button style={{ marginRight: '4%' , border:'none' , fontWeight:'600' }} onClick={Increment} className="bg-primary">
                              +
                            </Button>
                              </div>


                              
                            
                          </span>




                          <label className="mt-3">Children (Age 0 - 12)</label><br />

                      <span>


                        <div style={{display:'flex' , gap:'3rem'}} className="mt-2">
                        <Button style={{ marginRight: '4%' , border:'none' , fontWeight:'600' }} onClick={Decrement1} className="bg-primary" >
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{children}</span>
                            <Button style={{ marginRight: '4%' , border:'none' , fontWeight:'600' }} onClick={Increment1} className="bg-primary">
                              +
                            </Button>
                              </div>


                              
                            
                          </span>

                         

                       </div>



                    </form>
                  </div>
                  </Col>

                  </Row>
                    {/* <p>Check In Date: {selectedDate}</p>
                    <p>Check Out Date: {selectedDate2}</p>
                    <p>Adults : {adults}</p>
                    <p>Total Price</p>


                    <Container>
                      <Button>Add To Cart</Button>
                    </Container> */}

                    


{/* <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="@John" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="@deol" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="97xxxxxxx" maxLength={15} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
 */}
                  

                
                

                {/* <Col md={4}>
                  <Card>
                    <Card.Header as="h5">{data.charges}</Card.Header>
                    <Card.Body>
                      <Card.Title>Booking</Card.Title>
                      <Card.Text>
                        <form>
                          <Row>
                            <Col md={12}>
                          <label htmlFor="check-in" className="mt-4" style={{ marginRight: '5%', fontSize: '1.2rem' }}>
                            Check-in
                          </label>
                          
                          <input type="date" name="check-in" value={selectedDate} onChange={arrivalDateChange} />
                          </Col>
                          </Row>

                          <Row>
                            <Col md={12}>
                          <label htmlFor="check-out" className="mt-4" style={{ fontSize: '1.2rem', marginRight: '4%' }}>
                            Check-out
                          </label>
                          <input type="date" name="check-out" value={selectedDate2} onChange={departureDateChange} />
                          </Col>
                          </Row>
                          
                          <div className="Container mt-3">
                            <span style={{ marginRight: '4%', fontSize: '1.2rem' }}>Adults</span>
                            <Button style={{ marginRight: '4%' }} onClick={Decrement}>
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{adults}</span>
                            <Button style={{ marginRight: '4%' }} onClick={Increment}>
                              +
                            </Button>
                          </div>
                        </form>
                      </Card.Text>

                    </Card.Body>
                  </Card>
                </Col> */}
                

                 

              </Container>

                 

              </div>

              <div className="details">
                <Row style={{marginLeft:'5rem'}} className="mt-5 mb-5">
                  
                  
                  <text className="Heading-1 col-12 mb-3" style={{fontSize:'2.5rem'}}>Details</text>

                  <Col md={6}>
                  <Card style={{ height: "21rem" }}>
            <div className="card-wrapper" style={{ height: "100%" }}>
              <Card.Img
                className="img-fluid"
                src={data.imageSrc}
                style={{ height: "100%" }}
              />
              <div className="overlay">
                {/* <div className="content">
                  <Card.Title className="title">Food & Drinks</Card.Title>
                  <Card.Text className="text">
                    Indulge in a delectable journey of freshness and culinary
                    diversity.
                  </Card.Text>
                </div> */}
              </div>
            </div>
          </Card>
                  </Col>

                  <Col md={6}>
                  <div className="Booking_details mt-3" style={{height:'400px' , width:'100%'}}>
                  
                  {/* <text className="Heading-1 col-12 mb-3" style={{fontSize:'1rem'}}>Check In  &nbsp;---------------  {selectedDate} </text> <br />
                  <text className="Heading-1 col-12 mb-3" style={{fontSize:'1rem'}}>Check Out  &nbsp;---------------  {selectedDate2} </text> */}

                   <table className="table table-borderless">
                   <thead>
                   
                   </thead>

                      
                   <tbody>
                   <tr>
                      <th>Check In:-</th>
                      <th>{selectedDate}</th>
                    </tr>

                  <tr>
                    <th>Check Out:-</th>
                    <th>{selectedDate2}</th>
                    </tr>


                    
                  <tr>
                    <th>Adults:-</th>
                    <th>{adults}</th>
                    </tr>


                    <tr>
                    <th>Children:-</th>
                    <th>{children}</th>
                    </tr>


                    <tr>
                    <th>Room Type:- </th>
                    <th>{data.heading}</th>
                    </tr>

                    
                    <tr>
                    <th>Price Of Room:-</th>
                    <th>₹ {data.price} per Night</th>
                    </tr>

                    <tr>
                    <th>GST:-</th>
                    <th>18%</th>
                    </tr>

                    <tr>
                    <th>Total Price:- </th>
                    <th>₹ {Math.round(data.price * 118/100)} per Night</th>
                    </tr>

                   </tbody>
                   </table>

                  </div>
                  <Link to="/bookingform"><Button>Book Now</Button></Link>
                  </Col>
                </Row>
                  
                      
                   
              </div>
            </>
          )
        })
      }


      <Footer />
    </>
  )
}

export default BookingRoom;
































