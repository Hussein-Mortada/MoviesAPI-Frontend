import React from 'react';
import NavBar from "../components/NavBar";
import '../App.css';
import "../css/about.css";
import Footer from '../components/Footer';


function About() {
    return (
        <div className="about">

            <NavBar />
            <div className='main-section'>
            <h2>Hello!</h2>
                <p>This project was built using Spring Boot backend and React frontend.  The main functionality is to demonstrate the use of external API's, libraries
                and the creation of new API's for the frontend to communicate to.  The User functionality includes creating a new account with simple validation, and 
                creating reviews as well as viewing reviews from other users. There is no extra functionality as the main point is to demonstrate REST API's.  Feel free to visit my personal
                website or GitHub for the source code!</p>
                <p>Icon from <a href='https://www.freepik.com/'>freepik</a></p>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
