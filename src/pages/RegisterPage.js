import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import NavBar from '../components/NavBar';
import '../App.css';



function RegisterPage(){
    return(
        <div className='Login-page'>
        <NavBar />
        <RegisterForm />
        <Link to="/">Go Home</Link>
        <Link to="/login">Login</Link>
        </div>
    );
}
export default RegisterPage;