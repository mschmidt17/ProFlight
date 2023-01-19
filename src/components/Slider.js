import React, { useState } from "react";
import logo from "../assets/ProFlight.png";



function Slider() {
  const data = [
    {id: 1, image: logo},
    {id: 2, image: logo},
    {id: 3, image: logo},
    {id: 4, image: logo},
  ]

  const [selectedItemId, setSelectedItemId] = useState(1)

  return (
    <div className="container-slider">
      <div className="container-items">
        {data.map((item) => (
            <div 
              key={item.id} 
              className={`circle ${selectedItemId > item.id ? 'active' : selectedItemId == item.id && 'current'}`} 
            >
              <img src={item.image} alt="Logo"/>
            </div>
        ))}
      </div>

    </div>
  );
}

export default Slider;