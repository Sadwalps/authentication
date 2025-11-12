import React from 'react'
import { Link } from 'react-router-dom'

function Authentication({ sign }) {
    return (
        <>

            <div className='container-fluid' id='authenticationpage'>
                <div className="row m-2">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <div className='w-100 rounded p-3 d-flex flex-column justify-content-center bg-light'>
                            {sign ? <h2 className='text-center text-info' style={{ fontWeight: "bold" }}>Signup</h2> :
                                <h2 className='text-center text-success' style={{ fontWeight: "bold" }}>Login</h2>}
                            {sign && <input className='form-control rounded bg-secondary text-center mt-3 py-2' type="text" placeholder='Username' style={{ fontWeight: "bold" }} />}
                            <input className='form-control rounded bg-secondary text-center mt-2 py-2' type="email" placeholder='email' style={{ fontWeight: "bold" }} />
                            <input className='form-control rounded bg-secondary text-center mt-2 py-2' type="password" placeholder='password' style={{ fontWeight: "bold" }} />
                            {sign ? <button className='mt-2 py-2 form-control btn btn-info rounded'>Signup</button> :
                                <button className='mt-2 py-2 form-control btn btn-success rounded'>Login</button>}

                            {sign ? <h6 className='mt-2'>Already a user? <Link to={'/login'}>Login</Link></h6> :
                                <h6 className='mt-2'>Not a user? <Link to={'/signup'}>Signup</Link></h6>}

                        </div>


                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>

    )
}

export default Authentication