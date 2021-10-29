import React from "react";
import { Card, Container, Row, Col, Image, ListGroup } from "react-bootstrap";
// images and pdf
import me from "../../assets/images/IMG_5446.png";

const About = () => {
  return (
    <Container className="my-3 py-3" id="About" fluid>
      <Card>
        <Card.Header as="h3" className="text-center" style={{color:'green'}}>About Me</Card.Header>
        <Row>
          <Col>
            <Image src={ me } rounded />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Currently attending Columbia Engineering Coding Boot Camp (Mar 2021 – Sep 2021).</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;