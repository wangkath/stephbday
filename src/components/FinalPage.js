import "./Component.css"
import React, { useState } from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
    const navigate = useNavigate()

    const onClickButton = () => { 

    }


    return (
        <div className="body">
            
            
            <div className="next">
                <NextButton onClick = {onClickButton}/>
            </div>
        </div>
    )
}

export default FinalPage