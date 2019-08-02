import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jenni from '../jenniPic.PNG'
import { Jumbotron, Container, Row, Col } from 'reactstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">JnJ Equine Massage</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
                {/* Services */}
                <Container fluid>

                    <Row>
                        <Col xs>
                            <h2>Services</h2>
                        </Col>
                    </Row>

                    <Row className='services'>
                        <Col xs>
                        <Link to='/services'>
                            
                            <h5>Equine Sports Massage</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, quaerat?</p>
                            {/* <img src={equineMassage} alt="" id='firstService'/> */}
                        </Link>
                        </Col>

                        <Col xs>
                        <Link to='/services'>
                            
                            <h5>Red light therapy</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, quaerat?</p>
                            {/* <img src={redLight} alt="" id='secondService'/> */}
                        </Link>
                        </Col>
                       
                    </Row>
                    
                </Container>
                {/* About */}
                <Container className='aboutSection'>
                <div className='about'>
                    <div>
                        <img src={jenni} alt='Jenni, equine message therapist'/>
                    </div>
                    <aside>
                        <h4>Jennifer Biediger</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem repudiandae, ut deleniti rem fugiat? Rerum illum corporis sequi ea quam necessitatibus maxime culpa ducimus!</p>
                    </aside>
                </div>
                </Container>
                {/* Contact us */}
                <div className='contactSection'>
                    <h3>Phone: 410-903-0400</h3>
                    <h3>Email: <a href='mailto:jennibiediger@gmail.com'>Jenni@gmail.com</a></h3>
                </div>
            </div>
        )
    }
}

export default Home
