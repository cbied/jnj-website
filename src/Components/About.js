import React, { Component } from 'react'
import jenni from '../jenniPic.jpg'
import james from '../jamesPic.jpg'
import { Container, Row, Col } from 'reactstrap'


export class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='aboutRow'>
                        <Col sm={{ size: 12, order: 2}} className='aboutInfo'>
                            <div >
                                <img src={jenni} alt="jenni"/>
                            </div>
                            <div>
                                <h3>Jenni Biediger</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas reprehenderit animi quaerat provident dicta accusamus reiciendis. Amet laborum fugit ipsam atque distinctio similique et officia expedita cum asperiores. Consequatur doloremque corporis excepturi odit vero error ab, voluptate ipsum quo illum sunt iste eveniet neque, corrupti ratione saepe et. Asperiores.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='aboutRow bottom'>
                    <Col  sm="12" md={{ size: 12}} className='aboutInfo'>
                            <div>
                                <h3>James Meeks</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas reprehenderit animi quaerat provident dicta accusamus reiciendis. Amet laborum fugit ipsam atque distinctio similique et officia expedita cum asperiores. Consequatur doloremque corporis excepturi odit vero error ab, voluptate ipsum quo illum sunt iste eveniet neque, corrupti ratione saepe et. Asperiores.</p>
                            </div>
                            <div >
                                <img src={james} alt="james"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About
