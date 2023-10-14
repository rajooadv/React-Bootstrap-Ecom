import React from 'react';
import signInImage from '../Assets/signInImage.png';

export default function NewPasswordContent() {
    return (
        <>
            <div className='d-flex '>
                <div className="imgSingInPageContent">
                    <img src={signInImage} alt="" />
                </div>
                <div className="signInData container">
                    <h1 className='fw-bold '>Create New Password</h1>
                    <p className='signUpDesc'>Your new password must be different from previous used passwords.</p>



                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label font-causten enterEmailLable">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <p className='signUpDesc'>Must be at least 8 characters.</p>


                    <div class="mb-3">
                        <div className="passwordSingInPage">
                            <label for="exampleFormControlInput1" class="form-label font-causten enterEmailLable">Confirm Password</label>
                    
                        </div>
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>


                    <div className="bottomButtonSignInPage">
                        <button className='signInPageButton border border-0 fw-bold loginButton'>Reset Password</button>
                    </div>
                </div>

            </div>
        </>
    )
}
