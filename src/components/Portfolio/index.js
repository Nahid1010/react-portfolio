import React from "react";
// import bootstrap components
import { Carousel, Container, Figure } from "react-bootstrap";
// images
import ac from "../../assets/images/abc_crypto.png";
import bt from "../../assets/images/budget_tracker.png";
import tp from "../../assets/images/team-profile-generator.png.png";
import nt from "../../assets/images/note-taker.png";

const Portfolio = () => {
  return (
    <Container id="Portfolio">
      <Carousel variant="dark">
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/Ir-p/ABC_Crypto" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://abc-crypto.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={ac} alt="ABC Crypto"/> 
              <Figure.Caption align="center">ABC Crypto</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/Nahid1010/meme.me.git" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://nahid1010.github.io/meme.me/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={ag} alt="Meme.me"/> 
              <Figure.Caption align="center">Meme.me</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/Nahid1010/Progressive-Budget.git" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://progressive-budget.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={bt} alt="Budget Tracker"/> 
              <Figure.Caption align="center">Budget Tracker</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p>
              <a href="https://github.com/Nahid1010/team-profile-generator.git" target="_blank" rel="noreferrer">Code</a></p>
            <Figure>
              <Figure.Image src={tp} alt="Team Profile Generator" /> 
              <Figure.Caption align="center">Team Profile Generator</Figure.Caption>           
            </Figure>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/Nahid1010/note-taker.git" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://notetakerappli.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={nt} alt="Note Taker" /> 
              <Figure.Caption align="center">Note Taker</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Portfolio;