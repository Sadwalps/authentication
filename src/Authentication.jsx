import React from 'react'

function Authentication() {
    return (
        <>
        <div >
            <h2>auth</h2>

        </div>
            <div className='container-fluid' id='authenticationpage'>
                <div className="row m-2">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                        <div className='w-100 rounded p-3 d-flex flex-column justify-content-center align-items-center bg-light'>
                        <h2>Signup</h2>
                        <h2>Login</h2>
                        <input className='form-control rounded ' type="text" placeholder='Username' />

                        </div>


                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>

    )
}

export default Authentication