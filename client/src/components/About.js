import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class About extends Component {
  componentDidMount() {
    document.body.className = 'pg1';
  }

  componentWillUnmount() {
    document.body.className = 'body';
  }

  render() {
    return (
      <div className="About">
        <Container>
          <Row>
            <Col>
              <div className="creator">
                <h1>The Creators</h1>
              </div>
            </Col>
          </Row>

          <div className="creator-info">
            <div className="title">
              <Row>
                <Col>
                  <img className="kash" src="../../kash.png" alt="kash" />
                  <div className="contact">
                    <hr />
                    <div className="contact-info">
                      <p>Contact Me</p>
                      <hr />
                      <a
                        href="https://www.linkedin.com/in/kaschief-johnson-56a23a107/"
                        target="_blank"
                      >
                        <p>LinkedIn</p>
                      </a>
                      <p>
                        <a href="mailto:kash@mail.berlin"> kash@mail.berlin</a>
                      </p>
                      <p>+49 177 350 9956</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <h1 className="creator-heading">Kaschief Johnson</h1>
                  <p>
                    It was very fun to build Cerulean, which was my Final
                    Project as part of the Intensive Web Development course with
                    Ironhack, in Berlin.
                    <hr />
                    The complete MERN stack was used. The website's front end
                    was build entirely in ReactJS, HTML5 and CSS. The backend
                    was constructed using NodeJS, Express and MongoDB.
                    <hr />
                    Thanks for visiting!
                    <br />
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
