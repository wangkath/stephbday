import "./Component.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import duck from "../images/duck.png"

const PageSeven = () => {
    const navigate = useNavigate()
    const time = new Date()
    time.setSeconds(time.setSeconds + 60)
    const [color, setColor] = useState("darkgreen")
    const [randX, setRandX] = useState(0)
    const [randY, setRandY] = useState(0)

    const width = window.innerWidth
    const height = window.innerHeight

    const onDuckClick = () => {
        navigate("/page-eight")
    }

    const {
        seconds,
        minutes,
        restart
    } = useTimer({ time, onExpire: () =>  navigate("/")});

    useEffect(() => {
        setColor("black")
        const time = new Date();
        time.setSeconds(time.getSeconds() + 60);
        restart(time)
      },[]);


    useEffect(() => {
        setRandX(Math.round(Math.random()*width))
        setRandY(Math.round(Math.random()*height))
        if (seconds < 20) {
            setColor("red")
        } else if (seconds < 40) {
            setColor("gold")
        } else {
            setColor("darkgreen")
        }
      }, [seconds])

    
    return (
        <div className="bodyLeft">
            <br></br>
            <div className="flex">
                <div>
                    <img 
                    style={{
                        position: "absolute",
                        top: randY,
                        left: randX,
                        width: "10px"
                    }}
                        src={duck} 
                        alt="duck"
                        onClick={() => onDuckClick()}
                    />
                </div>
                <p className="header">yay! i'm so impressed {":)"}</p>
                <div style={{fontSize: '48px', color: color}}>
                    <span>0{minutes}</span>:<span>{seconds > 9 ? seconds : "0" + seconds}</span>
                </div>
            </div>
            <br></br>
            <p className="header">now, find the duck {"(and click on it)"}! and be quick! there's a timer!!</p>
        </div>
    )
}

export default PageSeven