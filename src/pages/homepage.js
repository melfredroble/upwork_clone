import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Homepage = () => {

  return (
    <Container>
        <Row >
            <Col className='d-flex flex-column  '>
                <h1 className='homepage-content fw-semibold text-green'>
                    How work
                    <br />
                    should work
                </h1>
                <h4 className='text-muted '>
                    Forget the old rules. You can have the best people. 
                    <br/>
                    Right now. Right here.
                </h4>
            </Col>
            <Col className=''>
            <img loading="" srcset="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@1x.jpg 1x,https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg 2x" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg" width="480" height="480" alt="Global talent illustration" data-qa="hero-image-desktop" class="cld-responsive vs-width-100 d-none d-md-block"/>
            </Col>
        </Row>
    </Container>
  )
}

export default Homepage