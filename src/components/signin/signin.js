import React from 'react'

import './signin.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase'

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: 'asdf',
            password: 'ssssss'
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        handlechange={this.handleChange}
                        value={this.state.email} required />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        handlechange={this.handleChange}
                        value={this.state.password} required />
                    <CustomButton
                        onClick={this.handleClick}> Submit Form</CustomButton>{' '}
                    <CustomButton
                        onClick={signInWithGoogle} isGoogleSignIn>SignIn with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;