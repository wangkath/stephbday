import "./Component.css"
import React, { useState } from "react";
import NextButton from "./NextButton";
import { useNavigate, Link as NavLink } from "react-router-dom";

const IntroPage = () => {
    const [selected, setSelected] = useState("-1")
    const [correct, setCorrect] = useState(true)
    const [counter, setCounter] = useState(-1)
    const array = [
        "wrong! try again >:)", 
        "nope! guess again", 
        "smh ur not doing very great", 
        "really?! is it that hard?!", 
        "stephanie! do better hehe",
        "ok now you've guessed more times than the # of options...",
        "lol guess the right one!",
        "ok i'm confused now u should be getting this",
        "did u give up?!"
    ]
    const navigate = useNavigate()
    
    const onClickButton = () => {
        if (selected == "4") {
            setCorrect(true)
            navigate('/page-two')
        } else if (selected == "-1") {
            setCorrect(true)
        } else {
            setCorrect(false)
            setCounter(counter+1)
        }
    }

    return (
        <div className="body">
            <p className="title"><b>hi stephanie.</b> today is a very special day!</p>
            <p className="question">guess what day it is:</p>

            <div className="radio"  onChange={event => setSelected(event.target.value)}>
                <div className="radio_group">
                    <input id = "1" type = "radio" value = "1" name="q1"/>
                    <label for = "1">your birthday :0</label>
                </div>
                <div className="radio_group">
                    <input id = "2" type = "radio" value = "2" name="q1"/>
                    <label for = "2">bring your duck to work day</label>
                </div>
                <div className="radio_group">
                    <input id = "3" type = "radio" value = "3" name="q1"/>
                    <label for = "3">national pina colada day</label>
                </div>
                <div className="radio_group">
                    <input id = "4" type = "radio" value = "4" name="q1"/>
                    <label for = "4">eat more!!! day</label>
                </div>
                <div className="radio_group">
                    <input id = "5" type = "radio" value = "5" name="q1"/>
                    <label for = "5">laundry day (sunday)</label>
                </div>
            </div>
            <div className="next" >
                <NextButton onClick = {onClickButton}/>
                <p style = {correct ? {visibility: "hidden"} : {visibility: "visible", color: "red"}}>{array[counter] ? array[counter] : array[8]}</p>
            </div>
        </div>
    )
}

export default IntroPage