import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jenni from '../jenniPic.PNG'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons/' 
library.add(faFacebook, faInstagram); 

export class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className='background'>
                    <Container fluid>
                    <h1 className="display-3">JnJ Equine Massage</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
                {/* Services */}
                <Container fluid id='service'>

                    <Row>
                        <Col xs>
                            <h2>Services</h2>
                        </Col>
                    </Row>

                    <Row className='services'>
                        <Col xs className='serviceHover'>
                        <Link to='/services' className='noDecLink'>
                            
                            <h5 className='linkServices'>Equine Sports Massage</h5>
                        
                            <p>Equine massage is the use of hands, arms, elbows and/or tools to rub and knead the muscles of the horse's body to decrease tension and/or pain.  Equine massage utilizes modified human massage techniques on horses to help them perform better and decrease pain associated with training, an ill fitting saddle, an unbalanced rider or injury.</p>
                            {/* <img src={equineMassage} alt="" id='firstService'/> */}
                        </Link>
                        </Col>

                        <Col xs className='serviceHover'>
                        <Link to='/services' className='noDecLink'>
                            
                            <h5>Red light Therapy</h5>
                        
                            <p>Reduces pain and swelling, increases lymphatic activity,accelerates cell regeneration, increases circulation, relaxes muscles and encourages collagen production. Regulates serotonin levels. Serotonin mediates inflammation, allergic reactions, aids in blood clotting, initiating sleep, and fighting depression</p>
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
                <footer className='contactUs'>
                    <div className='contactSection'>
                        <h3>Phone: 410-903-0400</h3>
                        <h3>Email: <a href='mailto:jennibiediger@gmail.com'>Jenni@gmail.com</a></h3>
                    <div className="icons">
                        <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon size='3x' color="#000" icon={['fab', 'facebook']} /></a>
                        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon size='3x' color="#000" icon={['fab', 'instagram']} /></a>
                    </div>
                    </div>
                    
                </footer>
            </div>
        )
    }
}

export default Home
