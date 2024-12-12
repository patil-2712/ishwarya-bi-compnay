import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark text-light py-4 fs-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="https://www.ishwaryainstitute.in/wp-content/uploads/2024/03/logo_institute-150x150.gif" width="150" height="150" alt="Ishwarya-bi" />
                        <div className='d-flex justify-content-start mt-6'>
                            <button className="btn btn-link "><FaFacebookSquare size={30} /></button>
                            <button className="btn btn-link "><FaInstagram size={30} /></button>
                            <button className="btn btn-link "><FaTwitterSquare size={30} /></button>
                            <button className="btn btn-link "><FaGithubSquare size={30} /></button>
                            
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h6 className='text-light'>Quick Links</h6>
                        <ul className='list-unstyled'>
                            <li>Management Programme</li>
                            <li>IT Programme</li>
                            <li>About Us</li>
                            <li>Enquiry</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h6 className='text-light'>Services</h6>
                        <ul className='list-unstyled'>
                            <li>Consulting & Coaching</li>
                            <li>Training and Competency Development</li>
                            <li>Digital Software Platform</li>
                        </ul>
                    </div>
                    <div className='col-md-2'>
                        <h6 className='text-light'>Profile</h6>
                        <ul className='list-unstyled'>
                            <li>About Ishwarya</li>
                            <li>Ishwarya Group</li>
                            <li>Ishwarya Leadership Team</li>
                            <li>Client List</li>
                        </ul>
                    </div>
                </div>
                <button style={{accentColor:"purple"}}> Sign of for news latter</button>
            </div>
        </div>
    );
};

export default Footer;
