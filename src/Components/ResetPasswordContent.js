import React from 'react'
import signInImage from '../Assets/signInImage.png';

export default function ResetPasswordContent() {
  return (
    <>
      <div className='d-flex '>
                <div className="imgSingInPageContent">
                    <img src={signInImage} alt="" />
                </div>
                <div className="signInData container">
                    <h1 className='fw-bold '>Reset Password</h1>
                
                    <p className='signUpDesc'>Enter your email and we'll send you a link to reset your password.</p>
                    <p className='signUpDesc'>Please  check it.</p>

                    <div class="mb-3 my-4">
                        <label for="exampleFormControlInput1" class="form-label font-causten enterEmailLable">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="designer@gmail.com" />
                    </div>

                   


                    <div className="bottomButtonSignInPage">
                        <button className='signInPageButton border border-0 fw-bold loginButton'>Send</button>
                        <p className='alreadyHaveAccount  my-3'>Back to  <span className='dontHaveAccountSignup'>Log in</span></p>
                    </div>
                </div>

            </div> 
    </>
  )
}
