import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'reactstrap'

//CSS
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact">Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </Router>
    )
}

export default App