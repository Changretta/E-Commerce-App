import React ,{ useState } from 'react';
import { connect } from 'react-redux'
import './signin.scss';
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom.button.component'
// import { auth , signInWithGoogle} from '../../firebase/firebase.utils'
import { googleSignInStart , emailSignInStart} from '../../redux/user/user.actions';




const SignIn = ({emailSignInStart, googleSignInStart}) => {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }
    const [userCredentials, setCredentials] = useState({email:'', password:''})



    const { email , password } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
        // const { emailSignInStart} = this.props;

        emailSignInStart(email, password);
        // try{
        //     await auth.signInWithEmailAndPassword(email,password);
        //     this.setState({ email: '' ,password: '' })
        // }catch (error){
        //     console.log(error); 
        // }



        // this.setState({email:'',password: ''})
    }
 

   const  handleChange = event => {
        const { value , name } = event.target;
        setCredentials({...userCredentials,[name]: value })

    }

        // const { googleSignInStart } = this.props;
        return(
            <div className='sign-in'>
                <h2> I already have account </h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email"  value={email} handleChange={handleChange} required label="email"/>
                    <FormInput name="password" type="password" value={password} handleChange={handleChange} required label="password" />

                    <div className='buttons'>
                    <CustomButtom type="submit"> Sign In</CustomButtom>
                    <CustomButtom type="button" onClick={googleSignInStart} isGoogleSignIn > Sign In with Google</CustomButtom>
                    </div>
                </form>

            </div>
        )
    }



const mapDispatchToProps = dispatch => ({
    googleSignInStart:() => dispatch(googleSignInStart()),
    emailSignInStart: (email , password) => dispatch(emailSignInStart({email , password}))

})

export default connect(null,mapDispatchToProps)(SignIn);