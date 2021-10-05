import React,{useState, useEffect} from "react";
import Wcard from "./Wcard";

const Weather = ({apikey}) => {
    const [searchValue, setsearchValue] = useState("Gurugram");
    const [tempInfo, settempInfo] = useState({});
    const getDetails = async ()=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apikey}`;
        try {
            const res  = await fetch(url);
            const data = await res.json(res);
            const {temp, pressure, humidity}= data.main;
            const {main: weatherMood}= data.weather[0];
            const {country}= data.sys;
            const {name}= data;
            const {speed}= data.wind;
            const weatherInfo = {
                temp, pressure, humidity, weatherMood, country, name, speed
            };
            settempInfo(weatherInfo);
            // console.log(temp);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDetails();
    }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-6 mx-auto">
          <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success text-center">
          <h2>Get Weather Info</h2>
          <div className="col-md-12">
            <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
              Search
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Search here..."
                value={searchValue}
                onChange={(e) => setsearchValue(e.target.value)}
              />
              <div className="">
                <button className="btn btn-success" onClick={getDetails}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
            <Wcard tempInfo={tempInfo}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
