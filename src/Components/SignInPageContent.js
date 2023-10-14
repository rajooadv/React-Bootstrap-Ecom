import React, { useState } from 'react';
import signInImage from '../Assets/signInImage.png';
import '../style/SignInPageContent.css';
export default function SignInPage() {
    return (
        <>
            <div className='d-flex '>
                <div className="imgSingInPageContent">
                    <img src={signInImage} alt="" />
                </div>
                <div className="signInData container">
                    <h1 className='fw-bold '>Sign In Page</h1>
                    <div className="signInButtons d-flex justify-content-center align-items-center flex-direction-column">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M20.5002 10.2219C20.5002 9.3997 20.4321 8.7997 20.2848 8.17749H10.7041V11.8885H16.3277C16.2144 12.8108 15.6022 14.1997 14.2416 15.133L14.2225 15.2572L17.2517 17.5569L17.4616 17.5775C19.389 15.833 20.5002 13.2663 20.5002 10.2219Z" fill="#4285F4" />
                                <path d="M10.7027 20.0001C13.4578 20.0001 15.7708 19.1111 17.4602 17.5778L14.2402 15.1333C13.3785 15.7222 12.222 16.1333 10.7027 16.1333C8.0043 16.1333 5.71403 14.3889 4.89761 11.9778L4.77794 11.9877L1.62811 14.3767L1.58691 14.4889C3.26493 17.7555 6.71171 20.0001 10.7027 20.0001Z" fill="#34A853" />
                                <path d="M4.89914 11.9777C4.68372 11.3555 4.55904 10.6888 4.55904 9.99996C4.55904 9.31103 4.68372 8.64439 4.8878 8.02218L4.8821 7.88966L1.69278 5.4624L1.58843 5.51104C0.896838 6.86661 0.5 8.38886 0.5 9.99996C0.5 11.6111 0.896838 13.1332 1.58843 14.4888L4.89914 11.9777Z" fill="#FBBC05" />
                                <path d="M10.7028 3.86663C12.6189 3.86663 13.9114 4.67773 14.6484 5.35555L17.5283 2.59999C15.7596 0.988889 13.4579 0 10.7028 0C6.71174 0 3.26494 2.24442 1.58691 5.51105L4.88629 8.02218C5.71405 5.61108 8.00433 3.86663 10.7028 3.86663Z" fill="#EB4335" />
                            </svg>
                            Continue With Google
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M6.77767 20C4.46696 20 2.31298 19.1818 0.5 17.7701C2.03928 17.8914 4.75576 17.601 6.44541 15.6389C3.90363 15.497 2.75733 13.1237 2.60781 12.1095C2.82378 12.211 3.85379 12.3327 4.43524 12.0487C1.51136 11.1562 1.06281 8.03245 1.16248 7.07911C1.71071 7.54564 2.64104 7.70791 3.00652 7.66734C0.281995 5.29412 1.26216 1.72414 1.74394 0.953347C3.69916 4.25101 6.62943 6.1031 10.2546 6.20612C10.1862 5.84118 10.1501 5.46124 10.1501 5.07099C10.1501 2.27036 12.0096 0 14.3034 0C15.5018 0 16.5817 0.619786 17.3398 1.61116C18.1406 1.3827 19.3459 0.847885 19.9352 0.385396C19.6382 1.68357 18.7135 2.76651 18.1542 3.16789C18.1497 3.15418 18.1589 3.18155 18.1542 3.16789C18.6455 3.07742 19.9748 2.76641 20.5 2.33266C20.2403 3.06196 19.26 4.27455 18.4555 4.95341C18.6052 12.9896 13.5546 20 6.77767 20Z" fill="#47ACDF" />
                            </svg>
                            Continue with Twitter
                        </button>
                    </div>

                    <div className="orDivSignInContent">
                        <div class="line"></div>
                        <div class="or">OR</div>
                        <div class="line"></div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label font-causten enterEmailLable">User name or email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <div class="mb-3">
                        <div className="passwordSingInPage">
                            <label for="exampleFormControlInput1" class="form-label font-causten enterEmailLable">Password</label>
                            <div className="hideIconSignIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                    <path d="M16.9682 0.869862L16.2322 0.133919C16.0242 -0.0740721 15.6402 -0.042063 15.4002 0.245882L12.84 2.78985C11.688 2.29391 10.4241 2.05391 9.09604 2.05391C5.14392 2.06984 1.72014 4.37381 0.0720207 7.68602C-0.0240069 7.89401 -0.0240069 8.14994 0.0720207 8.32593C0.839954 9.89395 1.99202 11.19 3.43203 12.1659L1.33603 14.2939C1.09603 14.5339 1.06402 14.9179 1.22407 15.1259L1.96002 15.8618C2.16801 16.0698 2.55199 16.0378 2.79199 15.7499L16.8399 1.70198C17.1439 1.46211 17.1759 1.07815 16.9679 0.870136L16.9682 0.869862ZM9.94403 5.70175C9.67202 5.63773 9.38407 5.55778 9.11205 5.55778C7.752 5.55778 6.66411 6.6458 6.66411 8.00571C6.66411 8.27772 6.72813 8.56566 6.80809 8.83768L5.73597 9.89372C5.41601 9.33376 5.24003 8.70966 5.24003 8.00574C5.24003 5.87776 6.95205 4.16574 9.08003 4.16574C9.78409 4.16574 10.4081 4.34172 10.968 4.66168L9.94403 5.70175Z" fill="#807D7E" />
                                    <path d="M18.1206 7.68596C17.5606 6.56591 16.8246 5.55798 15.9127 4.74194L12.9366 7.68596V8.00591C12.9366 10.1339 11.2246 11.8459 9.09661 11.8459H8.77665L6.88867 13.7339C7.59273 13.8779 8.32868 13.9739 9.04868 13.9739C13.0008 13.9739 16.4246 11.6699 18.0727 8.34177C18.2167 8.11771 18.2167 7.8938 18.1206 7.68578L18.1206 7.68596Z" fill="#807D7E" />
                                </svg>
                                <span>Hide</span>
                            </div>
                        </div>
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <p className='forgetPassword'>Forget Password</p>
                <div className="bottomButtonSignInPage">
                <button className='signInPageButton border border-0 fw-bold loginButton'>Sign In</button>
                <p className='dontHaveAccountP'>Dont have account?  <span className='dontHaveAccountSignup'>SignUp</span></p>
                </div>
                </div>

            </div>
        </>
    )
}
