import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLightbulb, faVolleyballBall } from '@fortawesome/free-solid-svg-icons';

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="text-center position-relative" style={{ width: "100%" }}>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682140999442-e9e2a5f55be6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="1800" height="500" alt="Ishwarya-bi" className="img-fluid"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}>
                       <div style={{  borderBottom:"4px solid orange",marginBottom:"40px", padding:"40px"}}> <h1 >Well Equipped Classes <br /> Great Community Students</h1> </div>
                       
                        <button>
                            Join Us Now
                        </button>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 style={{ color: "purple", textDecoration: "underline", textDecorationColor: "orange" }}>
                        Unlimited Possibilities
                    </h2>
                </div>
                <section className='mt-5'>
                    <div className='container '>
                        <div className='row row-cols-1 row-cols-md-3 g-4 p-4' >
                            <div className='col-md-4 d-flex align-items-stretch'>
                                <div className='card border border-black rounded-1' style={{ width: '85', height: '13rem' }}>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className='card-title text-center'>
                                            <FontAwesomeIcon icon={faBook} size='2x' style={{ color: "purple" }} />
                                            <br /> <strong>Online Courses</strong>
                                        </h5>
                                        <p className="card-text">Choose from hundreds of free training courses or pay to get certified to complete a course or specialization.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 d-flex align-items-stretch'>
                                <div className='card border border-black rounded-1' style={{ width: '85', height: '13rem' }}>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className='card-title text-center'>
                                            <FontAwesomeIcon icon={faLightbulb} size='2x' style={{ color: "purple" }} />
                                            <br /> <strong>Our Mission</strong>
                                        </h5>
                                        <p className="card-text">Developing strong vision and mission statements can help stakeholders reach a common understanding.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 d-flex align-items-stretch'>
                                <div className='card border border-black rounded-1' style={{ width: '60', height: '13rem' }}>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className='card-title text-center'>
                                            <FontAwesomeIcon icon={faVolleyballBall} size='2x' style={{ color: "purple" }} />
                                            <br /> <strong>Professional Certificate</strong>
                                        </h5>
                                        <p className="card-text">Join the millions of students around the world who are already learning. Find an experienced and suitable instructor just for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
