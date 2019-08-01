import React, { Component } from 'react'

export class Contacts extends Component {
    render() {
        return (
            <div>
                {/* Jumbotron -- reactstrap */}
                <header>
                    <h2>Contact Us</h2>
                </header>
                <div className='contact'>
                    <h3>Email:</h3>
                    <h5>jenni@gmail.com</h5>
                    <h3>Phone:</h3>
                    <h5>410-903-0400</h5>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Contacts
