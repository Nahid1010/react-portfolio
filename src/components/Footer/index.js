import React from "react";

// import bootstrap components
import { Card, Container, Image } from "react-bootstrap";
// react
import React from "react";

// import bootstrap components
import { Card, Container, Image } from "react-bootstrap";

// images and pdf
import github from "../../assets/images/github.png";
import lnkd from "../..assets/images/lnkd.png";
import email from "../../assets/images/email.png";
import resume from "../../assets/images/resume.png";
import me_resume from "../../assets/Nahid-Mahmud-Resume.png";

const Footer = () => {
  return (
    <Container className="my-3 py-3" id="Footer">
      <Card border="light">
            <Card.Body className="text-center">
              <Card.Link href="https://www.linkedin.com/in/nahid-mahmud-7287381b7/" target="_blank"><Image src={lnkd} /></Card.Link>
              <Card.Link href="https://github.com/nahid1010" target="_blank"><Image src={github} /></Card.Link>
              <Card.Link href="nahidmahmud14@yahoo.com" target="_blank"><Image src={email} /></Card.Link>
              <Card.Link href={me_resume} target="_blank"><Image src={resume} /></Card.Link>
            </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;