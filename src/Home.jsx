import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>

            {/* navbar */}
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >
                        <img
                            alt=""
                            src="https://pro-mfa.com/wp-content/uploads/2024/10/favicon.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <h2 className='text-primary' style={{ float: "right", fontWeight: "bold" }}>Authentication</h2>
                </Container>
            </Navbar>
            {/* Before Login */}
            <div className='container-fluid d-flex justify-content-center align-items-center' id='homepage1'>
                <Link to={'/signup'}><button className='btn btn-lg btn-light rounded text-primary px-4 py-3' style={{ fontWeight: "bold" }}>start </button></Link>
            </div>

            {/* After Login */}
            <div className='container-fluid d-flex justify-content-center align-items-center' id='homepage2'>
                <h2 className='text-primary p-3 bg-light rounded' style={{ fontWeight: "bold" }}>Authentication Successfully completed</h2>
            </div>


        </>
    )
}

export default Home