import "./Component.css"
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";

const PageFour = () => {
    const navigate = useNavigate()

    const time = new Date()
    time.setSeconds(time.setSeconds + 60)

    const {
        restart
      } = useTimer({ time, onExpire: () =>  navigate("/page-five")});

      useEffect(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 3);
        restart(time)
      },[]);

    return (
        <div className="body">
            <p className="header">u failed :{"("}</p>
        </div>
    )
}

export default PageFour