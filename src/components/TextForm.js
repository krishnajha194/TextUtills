import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Chnage to Upper Case","success");
    };

    const handlelowClick = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };

    const handleClearClick = () =>{
        setText("");
    }

    const handleCopy = () =>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'#042743':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'#042743':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p>{0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
