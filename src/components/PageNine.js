import "./Component.css"
import React, { useState } from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const PageNine = () => {
    const navigate = useNavigate()
    const [text, setText] = useState("")
    const onClickButton = () => { 
        const txt = text.split(' ').join('').toLowerCase()
        console.log(txt)
        if (txt == "youaresocute!!!!!!!") {
            navigate("/page-ten")
        }
    }

    const onChangeText = event => {
        setText(event.target.value)
    }

    return (
        <div className="bodyLeft" style={{width: "45%", textAlign: "center"}}>
            <p className="header">ok last one hehe i promise :D</p>
            <p className="header">decode this message:</p>
            <div style={{width: "90%", margin: "auto", marginBottom: "30px"}}>
                <iframe 
                    style={{borderRadius: "8px"}}
                    src="https://open.spotify.com/embed/playlist/1v8A35HXXsvTQO6NKh1Fh8?utm_source=generator" 
                    width="100%" 
                    height="380" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="spotify"
                ></iframe>
            </div>
            <input 
                value={text}
                className="textIn" 
                placeholder="type here!"
                onChange={event => onChangeText(event)}
            />
            <div className="next" style={{marginRight: "10%"}}>
                <NextButton onClick = {onClickButton}/>
            </div>
        </div>
    )
}

export default PageNine