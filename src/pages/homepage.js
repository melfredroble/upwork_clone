import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';

const Homepage = () => {

    return (
    <>
        <Container className='pt-5 mt-4 h-100 px-5'>
            <Row className=' px-5'>
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
                        <Row className='align-items-center'>
                            <Col xs={3}>   
                                <figure>
                                    <img width={100} src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" data-qa="microsoft" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" alt="Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise." className="logo microsoft first-image ls-is-cached lazyloaded" />
                                </figure>
                            </Col>
                            <Col xs={3}>
                                <figure>
                                    <img width={80}  src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg" data-qa="airbnb" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg" alt="Airbnb works with Upwork to post more than 10000 projects on Upwork." class="logo airbnb lazyloaded" />
                                </figure>
                            </Col>
                            <Col xs={3}>
                                <figure>
                                    <img width={60}  src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg" data-qa="bissell" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg" alt="Bissell works with Upwork as a staffing alternative to their hiring process." class="logo bissell ls-is-cached lazyloaded" />
                                </figure>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className='d-flex  justify-content-end '>
                    <img loading="" srcset="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@1x.jpg 1x,https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg 2x" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg" width="480" height="480" alt="Global talent illustration" data-qa="hero-image-desktop" className="cld-responsive vs-width-100 d-none d-md-block"/>
                </Col>
            </Row>
            <Row className='px-4 mt-5'>
                <div className='px-4 mt-2 mb-4'>
                    <h1 className='ff-nato '>Browse talent by category</h1>
                    <p className='fw-bold-5 text-muted'>Looking for work? <a href='/' className='text-green'>Browse jobs</a></p>
                </div>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Development & IT</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.85/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>1853 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Design & Creative</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.91/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>968 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Sales & Marketing</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.77/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>392 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Writing & Translation</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.92/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>505 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Admin & Customer Support</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.77/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>508 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Finance & Accounting</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.79/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>214 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Engineering & Architecture</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.85/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>650 skills</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={3} className='mb-3'>
                    <Card className='bg-gray category-tile br-10  border-0 px-4 pt-3 pb-5'>
                        <h5>Legal</h5>
                        <div className='mt-2'>
                            <img loading="lazy" srcset="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_12,h_18,q_auto/brontes/general/star.svg" width="12" height="18" alt="Category star rating" class="cld-responsive category-star-rating" />
                            <span className='mx-2 text-muted'>4.85/5</span>
                            <span className='text-muted' style={{paddingLeft: '30px'}}>133 skills</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
{/* 
        <Container className='pt-5 mt-4 h-100 px-5'>
            <h1 className='ff-nato'>Browse talent by category</h1>
            <p>Looking for work? <a href='/'>Browse jobs</a></p>
        </Container> */}
    </>
    )
}

export default Homepage