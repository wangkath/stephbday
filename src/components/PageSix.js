import "./Component.css"
import React, {useState} from "react";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

const PageSix = () => {
    const navigate = useNavigate()

    const [correct, setCorrect] = useState(true)

    const [answerOne, setAnswerOne] = useState(-1)
    const [answerTwo, setAnswerTwo] = useState(-1)
    const [answerThree, setAnswerThree] = useState(-1)
    const [answerFour, setAnswerFour] = useState(-1)
    const [answerFive, setAnswerFive] = useState(-1)
    const [answerSix, setAnswerSix] = useState(-1)

    const [counter, setCounter] = useState(-1)

    const array = [
        "wrong! hehe", 
        "nopeeeee! try again", 
        "nonono!!", 
        "still wrong :(",
        "ur so close!",
        "really?! is it that hard?!", 
        "stephanie! do better hehe",
        "u got this hehe",
        "don't give up!",
        "ok one more then u got it!",
        "did u give up?!"
    ]


    const onClickButton = () => { 
        if (answerOne == 2 && answerTwo == 4 && answerThree == 2 && answerFour == 1 && answerFive == 3 && answerSix == 4) {
            setCorrect(true)
            navigate("/page-seven")
        } else if (answerOne == -1 || answerTwo == -1 || answerThree == -1 || answerFour == -1 || answerFive == -1 || answerSix == -1) {
            setCorrect(true)
        } else {
            setCorrect(false)
            setCounter(counter + 1)
        }
    }
    return (
        <div className="bodyLeft">
            <p className="header" style={{textAlign: 'center', padding: '20px'}}><i>answer all of these questions correctly to move on!</i></p>
            <hr></hr>
            <br></br>
        
            <p className="question">&nbsp; &nbsp; which year did we meet in?</p>
            <div className="radio" onChange={event => setAnswerOne(event.target.value)}>
                <div className="radio_group">
                    <input id = "q1-1" type = "radio" value = "1" name="q1"/>
                    <label for = "q1-1">2011</label>
                </div>
                <div className="radio_group">
                    <input id = "q1-2" type = "radio" value = "2" name="q1"/>
                    <label for = "q1-2">2012</label>
                </div>
                <div className="radio_group">
                    <input id = "q1-3" type = "radio" value = "3" name="q1"/>
                    <label for = "q1-3">2013</label>
                </div>
                <div className="radio_group">
                    <input id = "q1-4" type = "radio" value = "4" name="q1"/>
                    <label for = "q1-4">2014</label>
                </div>
                <div className="radio_group">
                    <input id = "q1-5" type = "radio" value = "5" name="q1"/>
                    <label for = "q1-5">2015</label>
                </div>
            </div>

            <p className="question">&nbsp; &nbsp; which dining hall are most of our photos taken in?</p>
            <div className="radio" onChange={event => setAnswerTwo(event.target.value)}>
                <div className="radio_group">
                    <input id = "q2-1" type = "radio" value = "1" name="q2"/>
                    <label for = "q2-1">hillel</label>
                </div>
                <div className="radio_group">
                    <input id = "q2-2" type = "radio" value = "2" name="q2"/>
                    <label for = "q2-2">commons</label>
                </div>
                <div className="radio_group">
                    <input id = "q2-3" type = "radio" value = "3" name="q2"/>
                    <label for = "q2-3">lauder</label>
                </div>
                <div className="radio_group">
                    <input id = "q2-4" type = "radio" value = "4" name="q2"/>
                    <label for = "q2-4">quaker kitchen</label>
                </div>
                <div className="radio_group">
                    <input id = "q2-5" type = "radio" value = "5" name="q2"/>
                    <label for = "q2-5">mclelland</label>
                </div>
            </div>

            <p className="question">&nbsp; &nbsp; what was the first market we visited in london?</p>
            <div className="radio" onChange={event => setAnswerThree(event.target.value)}>
                <div className="radio_group">
                    <input id = "q3-1" type = "radio" value = "1" name="q3"/>
                    <label for = "q3-1">spitalfields market</label>
                </div>
                <div className="radio_group">
                    <input id = "q3-2" type = "radio" value = "2" name="q3"/>
                    <label for = "q3-2">columbia rd flower market</label>
                </div>
                <div className="radio_group">
                    <input id = "q3-3" type = "radio" value = "3" name="q3"/>
                    <label for = "q3-3">leadenhall market</label>
                </div>
                <div className="radio_group">
                    <input id = "q3-4" type = "radio" value = "4" name="q3"/>
                    <label for = "q3-4">borough market</label>
                </div>
                <div className="radio_group">
                    <input id = "q3-5" type = "radio" value = "5" name="q3"/>
                    <label for = "q3-5">broadway market</label>
                </div>
            </div>

            <p className="question">&nbsp; &nbsp; what's the first stop on the northern line after edgware?</p>
            <div className="radio" onChange={event => setAnswerFour(event.target.value)}>
                <div className="radio_group">
                    <input id = "q4-1" type = "radio" value = "1" name="q4"/>
                    <label for = "q4-1">burnt oak</label>
                </div>
                <div className="radio_group">
                    <input id = "q4-2" type = "radio" value = "2" name="q4"/>
                    <label for = "q4-2">belsize park</label>
                </div>
                <div className="radio_group">
                    <input id = "q4-3" type = "radio" value = "3" name="q4"/>
                    <label for = "q4-3">hendon central</label>
                </div>
                <div className="radio_group">
                    <input id = "q4-4" type = "radio" value = "4" name="q4"/>
                    <label for = "q4-4">brent cross</label>
                </div>
                <div className="radio_group">
                    <input id = "q4-5" type = "radio" value = "5" name="q4"/>
                    <label for = "q4-5">colindale</label>
                </div>
            </div>

            <p className="question">&nbsp; &nbsp; what has your average response time been in the past month? {"(this is actually accurate, to the minute)"}</p>
            <div className="radio" onChange={event => setAnswerFive(event.target.value)}>
                <div className="radio_group">
                    <input id = "q6-1" type = "radio" value = "1" name="q5"/>
                    <label for = "q6-1">4 hours, 33 minutes</label>
                </div>
                <div className="radio_group">
                    <input id = "q6-2" type = "radio" value = "2" name="q5"/>
                    <label for = "q6-2">3 hours, 28 minutes</label>
                </div>
                <div className="radio_group">
                    <input id = "q6-3" type = "radio" value = "3" name="q5"/>
                    <label for = "q6-3">6 hours, 9 minutes</label>
                </div>
                <div className="radio_group">
                    <input id = "q6-4" type = "radio" value = "4" name="q5"/>
                    <label for = "q6-4">5 hours, 57 minutes</label>
                </div>
                <div className="radio_group">
                    <input id = "q6-5" type = "radio" value = "5" name="q5"/>
                    <label for = "q6-5">8 hours, 43 minutes</label>
                </div>
            </div>

            <p className="question">&nbsp; &nbsp; what are you?!</p>
            <div className="radio" onChange={event => setAnswerSix(event.target.value)}>
                <div className="radio_group">
                    <input id = "q7-1" type = "radio" value = "1" name="q6"/>
                    <label for = "q7-1">cute</label>
                </div>
                <div className="radio_group">
                    <input id = "q7-2" type = "radio" value = "2" name="q6"/>
                    <label for = "q7-2">very cute</label>
                </div>
                <div className="radio_group">
                    <input id = "q7-3" type = "radio" value = "3" name="q6"/>
                    <label for = "q7-3">so so cute!</label>
                </div>
                <div className="radio_group">
                    <input id = "q7-4" type = "radio" value = "4" name="q6"/>
                    <label for = "q7-4">the cutest of all time {";)"}</label>
                </div>
            </div>


            <div className="nextNonCenter">
                <NextButton onClick = {onClickButton}/>
                <p style = {correct ? {visibility: "hidden"} : {visibility: "visible", color: "red"}}>{array[counter] ? array[counter] : array[10]}</p>
            </div>
        </div>
    )
}

export default PageSix