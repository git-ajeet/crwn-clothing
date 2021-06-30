import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("pwd don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have a account</h1>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput value={this.state.displayName} type='text' name='displayName' handleChange={this.handleChange} label='displayName' required />
                    <FormInput value={this.state.email} type='email' name='email' handleChange={this.handleChange} label='Email' required />
                    <FormInput value={this.state.password} type='password' name='password' handleChange={this.handleChange} label='Password' required />
                    <FormInput value={this.state.confirmPassword} type='password' name='confirmPassword' handleChange={this.handleChange} label='Confirm Password' required />

                    <CustomButton type='submit'>SignUp</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;