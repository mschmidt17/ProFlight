import React, { useState } from "react";
import logo from "../assets/ProFlight.png";
import arrow from "../assets/arrow.png";
import "./CSS/slider.css"



function Slider() {
    const data = [
        {id: 1, image: logo},
        {id: 2, image: logo},
        {id: 3, image: logo},
        {id: 4, image: logo},
    ]

    const [selectedItemId, setSelectedItemId] = useState(1)

    const handleNext = () => {
        let newSelectedItemId
        if (selectedItemId > data.length-1) {
          newSelectedItemId = 1
        } else {
          newSelectedItemId = selectedItemId + 1
        }
        setSelectedItemId(newSelectedItemId)
    };
    
    const handlePrev = () => {
        let newSelectedItemId
        if (selectedItemId < 2) {
          newSelectedItemId = 4
        } else {
          newSelectedItemId = selectedItemId - 1
        }
        setSelectedItemId(newSelectedItemId)
    };
    
    const handleItemClick = (item) => {
        setSelectedItemId(item.id)
    }

    return (
        <div className="container-slider">
            <button onClick={handlePrev} className="btn" id='prev'> <img src={arrow} className="arrow-left" alt="arrow"/> </button>

            <div className="container-items">
                {data.map((item) => (
                    <div 
                    key={item.id} 
                    className={`item ${selectedItemId == item.id ? 'active' : ""}`}
                    onClick={() => handleItemClick(item)}
                    >
                    <img src={item.image} alt="Logo"/>
                    </div>
                ))}
            </div>
            
            <button onClick={handleNext} className="btn" id='next'> <img src={arrow} alt="arrow"/> </button>
        </div>
    );
}

export default Slider;