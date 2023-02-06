import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [isSoldOut, setIsSoldOut] = useState(false)

  function handleClick(event) {
    setIsSoldOut(prev => !prev)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!isSoldOut ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
