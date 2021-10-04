import React, { useEffect, useState } from "react";


function Information(props){
    const [clock, setClockState] = useState();
    const [date, setDateState] = useState();


    useEffect(() => {
        const currentDate = new Date().toDateString();
        const formatDate = currentDate.substring(currentDate.indexOf(" ") + 1);
        setDateState(formatDate);
    },[]);
 
    useEffect(() => {
        setInterval(() => {
            const time = new Date().toLocaleTimeString();
            const index = time.indexOf(":", time.indexOf(":") + 1);
            const timeFormat = time.substring(0, index) + time.substring(time.indexOf(" "), time.length);
            setClockState(timeFormat);
        }, 1000);
    },[]);

    

    return (
        <div id="box" className="col-5 weather-display">
          <div className="container">
            <div className="row row-bottom-margin"><h3>{props.cityName}</h3></div>

            <div id="temp-sign" className="row align-items-center row-bottom-margin">
              <span className="col-6 we">
                <h1 id="temp-indicator">{props.temp}</h1>
              </span>
              <span id="temp-indicator-img" className="col-6 we">
                <i className="bi bi-clouds-fill"></i>
              </span>
            </div>

          <div className="row row-bottom-margin" id="temp-indicator-text">
            <button type="button" className="btn btn-secondary btn-sm rounded-pill" disabled>{props.description}</button>
          </div>
          <div className="row row-bottom-margin" id="more-details">
            <div className="col"><i className="bi bi-moisture"></i> <pre>{props.humidity}</pre></div>
            <div className="col"><i className="bi bi-clock"></i><pre>{clock}</pre></div>
            <div className="col"><i className="bi bi-calendar-week"></i><pre>{date}</pre></div>
          </div>
        </div>
      </div>
    );
}

export default Information;