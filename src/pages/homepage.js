import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Homepage = () => {

    return (
    <Container className='pt-5 mt-4 h-100'>
        <Row >
            <Col className='d-flex justify-content-start flex-column p-0'>
                <div className='d-flex flex-column'>
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
                    <div className='mt-4'>
                        <Button className='rounded-pill bg-green-200 fw-bold-5 px-4 py-2 border border-0' >Get started</Button>
                    </div>
                </div>
                <div className="mt-5">
                    <p className='text-muted fw-bold-5'>Trusted by</p>
                    <Row>
                        <Col>   
                            <figure>
                                <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" data-qa="microsoft" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" alt="Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise." className="logo microsoft first-image ls-is-cached lazyloaded" />
                            </figure>
                        </Col>
                        <Col>
                            <figure>
                                
                            </figure>
                        </Col>
                        <Col>
                            <figure>
                                
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col className='d-flex  justify-content-end '>
                <img loading="" srcset="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@1x.jpg 1x,https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg 2x" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg" width="480" height="480" alt="Global talent illustration" data-qa="hero-image-desktop" className="cld-responsive vs-width-100 d-none d-md-block"/>
            </Col>
        </Row>
    </Container>
    )
}

export default Homepage