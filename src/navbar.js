import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <div className="Widget-container d-flex m--2 p--2" style={{ height: "50px" , overflow:"none" }}> 
                    <a href="https://www.ishwaryainstitute.in/">
                    <img src="https://www.ishwaryainstitute.in/wp-content/uploads/2024/03/logo_institute-150x150.gif" width="150" height="150" alt="Ishwarya-bi" />
                    </a>
                </div>
                <div className="text-center m-0 p-0">
                    <div className='row'>
                        <h2 style={{ color: 'purple' }}>Ishwarya Institute of Management and Technology</h2>
                    </div>
                    <div className="row">
                        <h6>
                            <strong>
                                Center of Excellence from Ishwarya Group of Companies
                            </strong>
                        </h6>
                    </div>
                    <div className="row">
                        <h6 className="text-center">
                            <strong>AN ISO 9001:2015 Institute</strong>
                        </h6>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center mt-2 p-0 mb-5 " id="navbar">
                    <strong> <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link text-dark ">Home</Link>
                            <Link to="/ManagementProgramme" className="nav-item nav-link text-dark">Management Programme</Link>
                            <Link to="/IT Programme" className="nav-item nav-link text-dark" href="#IT Programme">IT Programme</Link>
                            <Link to="/About Us" className="nav-item nav-link text-dark" href="#About Us">About Us</Link>
                            <Link to="/Contact Us" className="nav-item nav-link text-dark" href="#Contact Us">Contact Us</Link>
                             </div> </strong>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
