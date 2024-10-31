import { useState } from "react";
import { dataAboutCity } from "./data";
import CitySights from "./CitySights";

function Cities() {
  const [cities, setCities] = useState(dataAboutCity);

  const removeCity = (id) => {
    let newList = cities.filter(city => city.id !== id)
    setCities(newList)
  }


  return(
    <div>
      <div className="container">
        <h1>Cities I want to visit</h1>
      </div>
      
      {cities.map((item => {
        const {id, city, country, description} = item;

        return(
          <div key={id}>
            <div className="container">
              <h2>{id} - {city}, {country}</h2>
            </div>

            <div className="container">
              <p>{description}</p>
            </div>

            <div className="container">            
              <CitySights cityName={city} />            
            </div>

            <div className="container">
              <button className="removeBtn" onClick={() => removeCity(id)}>Remove</button>
            </div>
          </div>
        );

      }))}

      <div className="container">
        <button className="removeBtn" onClick={() => setCities([])}>Delete all</button>
      </div>
    </div>
    
  );

}

export default Cities;