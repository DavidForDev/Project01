import React from 'react';
import './login.style.scss';

// Import Component
import LoginIn from '../../components/login_in/login_in';

const Login = () => {
    return ( 
        <div className='home__container flex justify-center align-items-center'>
            <div className='home_display'>
                <LoginIn />
            </div>
        </div>
    );
}
 
export default Login;