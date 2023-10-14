import React from 'react';
import signInImage from '../Assets/signInImage.png';

export default function VerificationContent() {
  return (
    <>
       <div className='d-flex '>
                <div className="imgSingInPageContent">
                    <img src={signInImage} alt="" />
                </div>
                <div className="signInData container">
                    <h1 className='fw-bold '>Verification</h1>
                
                    <p className='signUpDesc'>Verify your code.</p>

                    <div class="mb-3 my-4">
                        <label for="exampleFormControlInput1" class="form-label font-causten enterEmailLable">Verification Code </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>

                   


                    <div className="bottomButtonSignInPage">
                        <button className='signInPageButton border border-0 fw-bold loginButton'>Verify Code</button>
                    </div>
                </div>

            </div> 
    </>
  )
}
