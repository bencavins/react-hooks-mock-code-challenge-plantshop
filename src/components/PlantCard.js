import React, { useState } from "react";

function PlantCard({ id, image, name, price }) {
  const [isInStock, setIsInStock] = useState(true)
  const [priceData, setPriceData] = useState(price)

  function handleClick() {
    setIsInStock(prev => !prev)
  }

  function handleChange(event) {
    setPriceData(event.target.value)

    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: event.target.value
      })
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {/* <p>Price: {price}</p> */}
      <input value={priceData} type="number" onChange={handleChange} />
      {isInStock ? (
        <button 
          className="primary"
          onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
