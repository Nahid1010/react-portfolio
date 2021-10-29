import React from "react";

// import bootstrap components
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
// resume pdf
import me_resume from "../../assets/Nahid-Mahmud-Resume.png";

const Resume = () => {
  return (
    <Container className="my-3 py-3" id="Resume">
      <Card>
        <Card.Header as="h3" className="text-center" style={{color:'green'}}>Skills and Proficiencies</Card.Header>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Advanced Programming (Python, PHP, Shell Scripts, Perl, C, Javascript, MySql, Ansible) and version control using Github, plan and track development projects with Jira.</ListGroup.Item>
                  <ListGroup.Item><Card.Link href={me_resume} target="_blank">Downloadable Resume</Card.Link></ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Resume;