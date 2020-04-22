import React, { Component } from 'react';
import {Link} from 'react-router-dom';


 class Header extends Component {
     
    render() {
        return (

            <React.Fragment>
            <header className="header">
                <nav className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/giphy">Giphy</Link>
                </nav>
            </header>
            <div className="footer-bottom ">
                <div className="container">
                    <p className="pull-left"> 2020 Copyright © Giphs </p>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Header;
