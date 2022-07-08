import React, { useState, useEffect } from "react"
import "./Component.css"
import { useTimer } from 'react-timer-hook';
import checkboxImage from '../images/checkbox.png'
import { useNavigate } from "react-router-dom";

const PageThree = props => {
    const navigate = useNavigate()
    const time = new Date()
    time.setSeconds(time.setSeconds + 60)
    const [color, setColor] = useState("black")

    const {
        seconds,
        minutes,
        restart
      } = useTimer({ time, onExpire: () =>  navigate("/page-four")});

      useEffect(() => {
        setColor("black")
        const time = new Date();
        time.setSeconds(time.getSeconds() + 60);
        restart(time)
      },[]);

      useEffect(() => {
        if (seconds < 20) {
            setColor("red")
        } else if (seconds < 40) {
            setColor("gold")
        } else {
            setColor("black")
        }
      }, [seconds])

    return (
        <div class="body">
            <p class="header">we'll start easy! here's the assignment:</p>
            <div class="image">
                <img 
                    src={checkboxImage} 
                    alt="checkboxes"
                />
            </div>
            <p class="subheader">you have one minute to do this. the timer already started, so hurry up!!</p>
            <div style={{fontSize: '100px', color: color}}>
                <span>0{minutes}</span>:<span>{seconds > 9 ? seconds : "0" + seconds}</span>
            </div>
        </div>
    )
}

export default PageThree