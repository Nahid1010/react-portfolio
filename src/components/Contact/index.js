import React from "react";

import { Row, Col, Container, Form, Card, Button } from "react-bootstrap";
const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const msg = document.getElementById("msg");
    if (value === '') {
      msg.style.color = "red";
      msg.textContent = name + ' must be entered';
    }
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    const msg = document.getElementById("msg");
    const name_value = document.getElementsByName("Name").value;
    const email_value = document.getElementsByName("Email").value;
    const message_value = document.getElementsByName("Message").value;
  
    alert(name_value);
    if (name_value === '' || name_value === undefined) {
      msg.textContent = 'Name must be entered';
    }
    else if (email_value === '' || email_value === undefined) {
      msg.textContent = 'Email must be entered'; 
    }
    else if (message_value === '' || message_value === undefined) {
      msg.textContent = 'Message must be entered';
    }
    else {
      msg.textContent = 'Message Sent!';
      msg.style.color = "green";
    }    
    return false;
  }
  
  const ContactForm = () => {
    return (
      <Container className="my-3 py-3" id="Contact">
        <Card>
          <Card.Header as="h3" className="text-center" style={{color:'green'}}>Contact Me</Card.Header>
          <Row>
            <Col>
              <Card.Body>
                <Card.Text>
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label as="h6">Name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="Name" onBlur={changeHandler}/>
                  </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label as="h6">Email Address:</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="Email" onBlur={changeHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label as="h6">Message:</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Enter your message here" name="Message" onBlur={changeHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={submitHandler}>
                      Submit
                    </Button>
                  </Form>
                  <div id="msg" style={{color:'red'}}></div>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
  
  export default ContactForm;