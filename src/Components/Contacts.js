import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons/' 
library.add(faFacebook, faInstagram); 

    export class Contacts extends Component {
    render() {
    return (
        <div>
        <Jumbotron fluid className="background contactUs">
            <Container fluid>
            <h1 className="display-3">Contact Us</h1>
            <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
            </p>
            <div className="contact">
                <div>
                <h3>Email:</h3>
                <h5>jenni@gmail.com</h5>
                </div>
                <div>
                <h3>Phone:</h3>
                <h5>410-903-0400</h5>
                </div>
               
            </div>
            <div className="icons contactIcons">
                    <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon size='3x' color="#000" icon={['fab', 'facebook']} /></a>
                    <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon size='3x' color="#000" icon={['fab', 'instagram']} /></a>
            </div>
            </Container>
        </Jumbotron>

        <footer />
        </div>
    );
    }
    }

    export default Contacts;
