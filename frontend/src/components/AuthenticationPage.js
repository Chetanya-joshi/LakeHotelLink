import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "./authentication.css"; // Import the CSS file
// import header from "PNG_LH.png";


const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic
  };
  const mystyle = {
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  }

    return (
      <div style={{ backgroundColor: "aliceblue" }}>
        <Container className="auth-form-container" style={mystyle}>
          <Row className="justify-content-center" style={{ width: "100%" }}>
            <Col
              xs={12}
              md={6}
              lg={6}
              style={{
                backgroundColor: "aliceblue",
                display: "flex",
                  justifyContent: "center",
                alignItems:"center"
              }}
            >
              <img
                src="PNG_LH.png"
                alt=""
                style={{ width: "400px", height: "250px" }}
              />
            </Col>
            <Col xs={12} md={6} lg={6} style={{ backgroundColor: "aliceblue" }}>
              <div className="auth-form">
                <h2>Sign In</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email" className="py-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password" className="py-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="my-2"
                    style={{
                      // width: "10rem",
                      borderRadius: "10px",
                      backgroundColor: "teal",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    Sign In
                  </Button>
                  <p className="mt-3">
                    Don't have an account?{" "}
                    <Button variant="link" onClick={toggleForm}>
                      Sign Up
                    </Button>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic
  };
   const mystyle = {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     minHeight: "100vh",
   };

    return (
      <div style={{ backgroundColor: "aliceblue" }}>
        <Container className="auth-form-container" style={mystyle}>
          <Row className="justify-content-center" style={{ width: "100%" }}>
            <Col
              xs={12}
              md={6}
              lg={6}
              style={{
                backgroundColor: "aliceblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <img
                src="PNG_LH.png"
                alt=""
                style={{ width: "400px", height: "250px" }}
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="auth-form">
                <h2>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email" className="py-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password" className="py-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="my-2"
                    style={{
                      // width: "10rem",
                      borderRadius: "10px",
                      backgroundColor: "teal",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    Sign Up
                  </Button>
                  <p className="mt-3">
                    Already have an account?{" "}
                    <Button variant="link" onClick={toggleForm}>
                      Sign In
                    </Button>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

const AuthenticationPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return isSignIn ? (
    <SignIn toggleForm={toggleForm} />
  ) : (
    <SignUp toggleForm={toggleForm} />
  );
};

export default AuthenticationPage;
