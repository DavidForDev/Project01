import React from 'react';
import './sign_up.style.scss';

const SignUp = () => {
    return ( 
        <div className="sign__up">
            <form action='' method='POST'>
                <div className='flex direction-column'>
                    <input type='text' className='primary_input' placeholder='First Name'/>
                    <input type='text' className='primary_input' placeholder='Last Name'/>
                    <input type='text' className='primary_input' placeholder='Email'/>
                    <input type='password' className='primary_input' placeholder='Password'/>
                    <div className='flex justify-center align-items-center'>
                        <input type='checkbox' style={{width: 'auto'}}/>
                        <p>Receive email updates and special promo offers?</p>
                    </div>
                </div>    
                <div className='flex direction-column'>
                    <button className='tertiary_btn' type='submit'>Create Account</button>
                    <a href='/login'>Already have an account? Sign in here.</a>
                </div>                
            </form> 
        </div>
    );
}
 
export default SignUp;