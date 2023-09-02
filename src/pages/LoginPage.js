import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import '../App.css';
function LoginPage(){
    return(
        <div className='Login-page'>
        <NavBar />
        <LoginForm />
        <Link to="/">Go Home</Link>
        <Link to="/register">Register</Link>
        </div>
    );
}
export default LoginPage;