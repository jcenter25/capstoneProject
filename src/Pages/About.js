import React from 'react';
import image from '../graphics/testImage.png'
import '../App.css'

function About() {
    return(
        <div className='about'>
            <div className='container'>
            <h1>About Page</h1>
            <h2>Joseph Center</h2>
            <div class="image">
                <img src={image}></img>
            </div>
            <p>
                My Capstone Project
            </p>
            </div>
        </div>
    );
}


export default About;