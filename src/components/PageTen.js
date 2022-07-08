import "./Component.css"
import React from "react";
import PrizeButton from "./PrizeButton";
import { useNavigate } from "react-router-dom";

const PageTen = () => {
    const navigate = useNavigate()
    const onClickButton = () => { 
        navigate("/page-final")
    }
    return (
        <div className="body">
            <p className="header" style={{lineHeight: "46px"}}>yay u passed the test! sorry that was so long. hopefully it didn't take too much time, lol.</p>
            <PrizeButton onClick = {() => onClickButton()}/>
        </div>
    )
}

export default PageTen