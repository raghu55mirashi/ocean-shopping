import React from 'react'

import './signin-and-signup.scss';

import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/signup'

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;
