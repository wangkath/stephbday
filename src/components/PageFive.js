import "./Component.css"
import React from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const PageFive = () => {
    const navigate = useNavigate()
    const onClickButton = () => { 
        navigate("/page-six")
    }
    return (
        <div className="body">
            <p className="header">jk! i'm giving you one more chance to win this super awesome prize</p>
            <NextButton onClick = {() => onClickButton()}/>
        </div>
    )
}

export default PageFive