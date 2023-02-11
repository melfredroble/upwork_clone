import React from 'react'
import {Row, Container, Col} from 'react-bootstrap'

const NavItemThree = ({setHoverNavItem}) => {
    return (
        <Container onMouseLeave={() => setHoverNavItem(0)} fluid className='mt-5 pt-3 bg-white shadow h-100 position-relative'>
            <Row className='p-1 py-4 position-absolute bg-white shadow w-100'>
                <Col>
                    Item Three
                </Col>
                <Col>
                    Item Three
                </Col>
            </Row>
        </Container>
    )
}

export default NavItemThree