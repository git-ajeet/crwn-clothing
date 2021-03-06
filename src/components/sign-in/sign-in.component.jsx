import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'
class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ 'email': '', 'password': '' });
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput required type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='Email' />

                    <FormInput required type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='Password' />
                    <div className='buttons'>
                        <CustomButton type='submit'>SignIn</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            SignIn with Google{'  '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;