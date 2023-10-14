import React from 'react';
import signInImage from '../Assets/signInImage.png';
import '../style/CheckEmailContent.css'

export default function CheckEmailContent() {
    return (
        <>
            <div className='d-flex '>
                <div className="imgSingInPageContent">
                    <img src={signInImage} alt="" />
                </div>
                <div className="signInData container">
                    <h1 className='fw-bold '>Check Email</h1>


                    <p className='alreadyHaveAccount  my-3 resetDesc'>Please check your email inbox and click on the provided link to reset your
                        password . If you don’t receive email, <a href="#">Click here to resend</a></p>


                    <p className='alreadyHaveAccount  my-3'><i class=" me-2 fa-angle-left"></i> Back to <span className='dontHaveAccountSignup'>Log in</span></p>

                </div>

            </div>
        </>
    )
}
