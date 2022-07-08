import "./Component.css"
import React from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const PageTwo = () => {
    const navigate = useNavigate()
    const onClickButton = () => { 
        navigate("/page-three")
    }
    return (
        <div className="body">
            <p className="header"><b>jk haha.</b> i guess it's your birthday too! i have a fun challenge for u. if u win you'll get a prize!</p>
            <p className="header">are u ready?!</p>
            <br></br>
            <p className="note">{'(p.s. please win. the prize is quite cool. i will be super upset and disappointed if u don\'t win!)'}</p>
            <div className="nextPage">
                <NextButton onClick = {onClickButton}/>
            </div>
        </div>
    )
}

export default PageTwo