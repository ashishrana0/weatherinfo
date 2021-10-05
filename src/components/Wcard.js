import React,{useState, useEffect} from "react";

import Wdetails from "./Wdetails";
const Wcard = ({ tempInfo }) => {
    const [cloudInfo, setcloudInfo] = useState("");
  const { temp, pressure, humidity, weatherMood, country, name, speed } =
    tempInfo;
    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case "Clear" : setcloudInfo("wi-day-sunny")
                break;
                case "Clouds" : setcloudInfo("wi-day-cloudy")
                break;
                case "Haze" : setcloudInfo("wi-day-haze")
                break;
                case "fog" : setcloudInfo("wi-day-fog")
                break;
                case "rain" : setcloudInfo("wi-day-rain")
                break;
                case "Mist" : setcloudInfo("wi-dust")
                break;
                default: setcloudInfo("wi-day-sunny")
                    break;
                }
            }
    }, [weatherMood]);
  return (
    <>
      <div className="card-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <h2>
                <i className={`wi ${cloudInfo}`}></i>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-2">
              <h2>{temp}&deg;C</h2>
            </div>
            <div className="col-md-4">
              <h4>{weatherMood}</h4>
              <p>{country + ", " + name}</p>
            </div>
            <div className="col-md-4">
              <h4>{new Date().toLocaleString()}</h4>
            </div>
          </div>
        </div>
        <h5 className="card-title"></h5>
      </div>
      <div className="card-footer bg-transparent border-success ">
        <div className="row fs-6 ">
          <div className="col-md-2 fs-2">
            <i className={`wi wi-strong-wind`}></i>
          </div>
          <Wdetails tempInfo={speed + "km/h \n Speed"} tempIcon={weatherMood} />
          <div className="col-md-2 fs-2">
            <i className={`wi wi-humidity`}></i>
          </div>
          <Wdetails tempInfo={humidity + "% \n Humidity"} tempIcon={humidity} />
          <div className="col-md-2 fs-2">
            <i className={`wi wi-thermometer-exterior`}></i>
          </div>
          <Wdetails tempInfo={pressure + "\n Pressure"} tempIcon={pressure} />
          
        </div>
      </div>
    </>
  );
};

export default Wcard;