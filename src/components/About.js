import React from 'react';

export default function About(props) {
    console.log("props.mode",props.mode);
    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#042743" : "white",
    };

    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <p>
                Welcome to <strong>TextUtils</strong>, your go-to tool for text analysis and transformation! 
                Whether you need to convert text to uppercase, lowercase, or analyze word count, 
                we've got you covered.
            </p>
            <h3>Features</h3>
            <ul>
                <li>Convert text to uppercase and lowercase</li>
                <li>Copy text with one click</li>
                <li>Clear text easily</li>
                <li>Analyze word and character count</li>
                <li>Toggle between dark and light mode</li>
            </ul>
            <h3>Why Choose Us?</h3>
            <p>
                We aim to provide a simple and effective text utility tool that helps users in everyday 
                tasks related to text formatting. Our user-friendly interface ensures a seamless experience.
            </p>
        </div>
    );
}
