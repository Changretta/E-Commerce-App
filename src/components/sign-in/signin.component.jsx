import React from 'react';

import './signin.scss';
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom.button.component'
import { signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password: ''})
    }
 

    handleChange = event => {
        const { value , name } = event.target;

        this.setState = ({[name]: value })
    }

    render(){

        return(
            <div className='sign-in'>
                <h2> I already have account </h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} required label="email"/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required label="password" />

                    <div className='buttons'>
                    <CustomButtom type="submit"> Sign In</CustomButtom>
                    <CustomButtom onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButtom>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;