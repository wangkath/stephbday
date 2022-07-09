import "./Component.css"
import React, { useState } from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
    const navigate = useNavigate()

    const onClickButton = () => { 
        navigate("/page-card")
    }


    return (
        <div className="bodyLeft">
            <div style={{width: "65%", minWidth: "25%", height: "100%", margin: "auto", display: "flex"}}>
                <iframe 
                    width="100%" 
                    height="450px"
                    src="https://www.youtube.com/embed/A0Lp6cA53V4" 
                    title="YouTube video player"
                    frameborder="0" 
                    style={{borderRadius: "10px", margin: "40px 0px"}}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
                ></iframe>
            </div>
            {/* <div className="next">
                <NextButton onClick = {onClickButton}/>
            </div> */}
        </div>
    )
}

export default FinalPage