import React from 'react';
import './login_in.style.scss';

const LoginIn = () => {
    return ( 
        <div className="login__in">
            <form action='' method='POST'>
                <div className='flex direction-column'>
                    <input type='text' className='primary_input' placeholder='Email Address'/>
                    <input type='password' className='primary_input' placeholder='Password'/>
                </div>    
                <div className='flex direction-column'>
                    <button className='tertiary_btn' type='submit'>Continue</button>
                    <a href='###'>Forgot your password?</a>
                    <a href='/sign'>Don’t have an account? Register now</a>
                </div>                
            </form> 
        </div>
    );
}
 
export default LoginIn;