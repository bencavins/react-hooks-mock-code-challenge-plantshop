import React from "react";

import { useState } from "react";

function NewPlantForm({ setPlants }) {

  const [formData, setFormData] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    
    // not needed with controlled form
    // const newPlant = {
    //   'name': event.target.name.value,
    //   'image': event.target.image.value,
    //   'price': event.target.price.value
    // }
    
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(plantData => setPlants(prev => [...prev, plantData]))

    event.target.reset()
  }

  function handleChange(event) {
    setFormData(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
