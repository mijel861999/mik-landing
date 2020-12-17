// React
import React from 'react';
import { Link } from 'react-router-dom'; 


import './styles/Navbar.css';

import canguro from '../images/logo.png';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav className = "container-fluid">
                    <section className="row">
                            <section className="Logo__section col-1 align-items-center pt-3">
                                <div className = "Logo__container">
                                    <img src={canguro} alt=""/>
                                </div>
                                <p>MIK</p>    
                            </section>
                            <section className="Navigation__section col-6 offset-4">
                                <Link to="/">Portafolio</Link>
                                <Link to="/">Sobre mi</Link>
                                <div className="btn">
                                    <Link to="/">Contáctame</Link> 
                                </div>
                            </section>
                    </section>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;