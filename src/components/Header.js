import React, { Component } from 'react';
import {Link} from 'react-router-dom';


 class Header extends Component {
     
    render() {
        return (

            <React.Fragment>
            <header className="header" id="masthead">
                <nav className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/giphy">Giphy</Link>
                </nav>
            </header>
        </React.Fragment>
        )
    }
}

export default Header;
