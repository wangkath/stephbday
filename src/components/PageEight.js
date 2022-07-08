import "./Component.css"
import React, { useState } from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const PageEight = () => {
    const navigate = useNavigate()
    const [text, setText] = useState("")

    const onClickButton = () => { 
        const txt = text.split(' ').join('').toLowerCase()
        console.log("text: " + txt)
        if (txt == "nigeria") {
            navigate("/page-nine")
        }
    }

    const onChangeText = event => {
        setText(event.target.value)
    }

    return (
        <div className="body">
            <p className="header">good job! ok ur almost done (i'm so bad at coming up with these i'm so sorry if ur bored out of ur mind lol)</p>
            <p className="header">find the country: (7.000000, 10.000000)</p>
            <input 
                type="text"
                value={text}
                className="textIn" 
                placeholder="enter answer here!"
                onChange={event => onChangeText(event)}
            />
            <div className="nextPage">
                <NextButton onClick = {onClickButton}/>
            </div>
        </div>
    )
}

export default PageEight