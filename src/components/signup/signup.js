import React, { useState } from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase'

import './signup.scss'

const SignUp = () => {
    const [signUpCredentials, setSignUpCredentials] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    const { displayName, email, password, confirmPassword } = signUpCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("passwords do not match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            setSignUpCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setSignUpCredentials({
            ...signUpCredentials,
            [name]: value
        })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I don't have account</h2>
            <span>SignUp with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}


export default SignUp;