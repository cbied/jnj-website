import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contacts from './Components/Contacts'

export default (
    <Switch>
        <Route exact path='/' component={Home} />>
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contacts} />
    </Switch>
)
