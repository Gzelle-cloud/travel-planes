import { useState } from "react";
import { dataCitySights } from "./data2";

function CitySights({cityName}) {
  const citySights = dataCitySights.filter(sightItem => sightItem.city === cityName);

  const [sight, setSight] = useState(0);
  const {name, description, image} = citySights[sight]

  const previousSight = () => {
    setSight((sight => {
      sight--;
      if (sight < 0) {
        return citySights.length - 1;
      }
      return sight;
    }))
  }

  const nextSight = () => {
    setSight((sight => {
      sight++;
      if (sight > citySights.length - 1) {
        sight = 0;
      }
      return sight;
    }))
  } 

  return(
    <div>
       <div className="container">
        <img src={image} width="300px" alt="sight"/>
      </div>

      <div className="container">
        <h3>{name}</h3>
      </div>

      <div className="container">
        <p className="par">{description}</p>
      </div>

      <div className="btn container">
        <button onClick={previousSight}>Previous</button>
        <button onClick={nextSight}>Next</button>
      </div>
    </div>
  );
}

export default CitySights;