import { useState } from "react";

function Carousel({ images }) {
  const [sight, setSight] = useState(0);

  const previousSight = () => {
    setSight((sight => {
      sight--;
      if (sight < 0) {
        return images.length - 1;
      }
      return sight;
    }))
  }

  const nextSight = () => {
    setSight((sight => {
      sight++;
      if (sight > images.length - 1) {
        sight = 0;
      }
      return sight;
    }))
  } 
  
  return (
    <div>
       <div className="container">
        <img src={images[sight]} width="400px" alt="sight"/>
      </div>

      <div className="btn container">
        <button onClick={previousSight}>❰</button>
        <button onClick={nextSight}>❱</button>
      </div>
    </div>
  );
}

export default Carousel;