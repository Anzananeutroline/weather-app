import React,{useState,useEffect} from 'react';
import "./Weather.css";

const Weather = () => {
    const apikey = '3de240fbbde1374cde53e54bdc249873';
    const [search, setSearch] = useState("Pokhara");
    const [city, setCity] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apikey}`);
            const data = await response.json();
          setCity(data.main);
          console.log(data)
        }

        fetchData();
    },[search])
  return (
    <div wrapper>
    
      <div className='container'>
         <div id="overlay"></div>
          <div className="input-field">
              <input type="search" className='input'
                  onChange={e => {
                    setSearch(e.target.value);
                  }}
                  value={ search}/>
      </div>
      {!city ? (<div className='error-message'>No results found</div>) : (
       
         <div className="info">
          <div className="location">
              <i className="fa-solid fa-street-view"></i>
            <span>{ search}</span>
          </div>
          <div className="temperature">
            {city.temp}°C
           
              </div>
          </div>
        
      )}
      </div> 
</div>
  )
}

export default Weather;