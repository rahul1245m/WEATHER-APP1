import React, { useState } from 'react';

const api = {
  key : "2577f3224207ffcd64f5b861b815a25c",
  base :"https://api.openweathermap.org/data/2.5/"
}

function App(){


   const [query , setquery] = useState('');
   const [weather , setWeather] = useState({});
   
     const search = evt => {
       if(evt.key === "Enter"){
         fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
         .then(res => res.json())
         .then( result => {
          setWeather(result);
          setquery("");
          console.log(result);
         }); 
       }
     }




   const dateBuilder = (d) => {
     let months = ["january" , "February" , "March" , "April" , "May" , "june" , "july" , "august" , "september" , "october" , "November" , "December"];
     let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
     
     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${day} ${date} ${month} ${year} `
   }


     const dateBuilder1 = (d) =>{
      let date1 = new Date();
      let time = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();

       return  `${time}`
     }

  return(
    <div className = {( typeof weather.main != "undefined") ?  ((weather.main.temp >16) ?  "app-warm" : 'app') : 'app'}>
       <main>
         <div className = "search-box">
           <input 
            type = "text"
            className = "search-bar"
            placeholder = "search...."
            onChange = {e =>setquery(e.target.value)}
            value = {query}
            onKeyPress = {search}
            />
         </div>

         {(typeof weather.main != "undefined") ? (
           <div>
          <div className="location-box">
           <div className = "location">{weather.name}, {weather.sys.country}</div>
           <div className = "date">{dateBuilder(new Date())}</div>
         </div>

            <div>
            <div className = "times">{dateBuilder1(new Date())}</div>
               
            </div>
         <div className = "weather-box">
           <div className = "temp">
            {Math.round(weather.main.temp)}°c
           </div>
         
            <div id = "image">
             <div className = "inline-block">
             <img src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif" alt = "rah" width="100" height = "100" class = "center"></img>
             </div>
             <div className = "inline-block">
              <img src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c6023f30971807.563b2b13a55cc.gif" alt = "rah1"width="100" height = "100" class = "center"></img> 
             </div>
          </div>
           
           <div className = "weather">
             {weather.weather[0].main}
           </div>
         </div>
         </div>
         ) : ('')}
          
           
       </main>
    </div>
  )
}

export default App;
