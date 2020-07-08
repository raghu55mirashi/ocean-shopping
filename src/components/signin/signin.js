import React, { useState } from 'react'

import './signin.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase'

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    handlechange={handleChange}
                    value={email} required />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    handlechange={handleChange}
                    value={password} required />
                <CustomButton type="submit"> Submit Form</CustomButton>
                <CustomButton
                    onClick={signInWithGoogle} isGoogleSignIn>SignIn with Google</CustomButton>
            </form>
        </div>
    )
}


export default SignIn;