import React from 'react'
import './homepage.css'

const SignIn = () => {
    return (
        <>
            <div className="signcontainer">
                <div className="signinsideconatainer">

                    <div className="SignInleftpannel">
                    <img src="https://www.freeiconspng.com/uploads/login-button-png-0.png" alt="" />
                    </div>
                    <div className="SignInrightpannel">
                        <span>Sign In Here..</span>
                        <form action="">
                        <label for="fname">First name:</label> <br />
                        <input type="text" id="fname" name="fname" /> <br />
                        <label for="lname">Last name:</label> <br />
                        <input type="text" id="lname" name="lname" /> <br />
                        <label for="fname">Email:</label> <br />
                        <input type="text" id="fname" name="fname" /> <br />
                        <label for="lname">Password:</label> <br />
                        <input type="text" id="lname" name="lname" /> <br />
                        
                        <button>Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SignIn;
