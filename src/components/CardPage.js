import "./Component.css"
import React, { useState } from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const CardPage = () => {
    const navigate = useNavigate()

    const [text, setText] = useState("")
    const onChangeText = event => {
        setText(event.target.value)
    }

    return (
        <div className="bodyLeft">    
            <div style={{display: "flex", alignItems: "center"}}>
                <p className="header">enter password :</p>
                <input 
                    type="password"
                    value={text}
                    className="textIn"
                    style={{fontSize: "20px", height: "22px", margin: 0, marginLeft: "20px"}}
                    onChange={event => onChangeText(event)}
                />
            </div>
            <p></p>
        </div>
    )
}

export default CardPage