import React from "react";

function NewPlantForm({setPlants}) {
  function handleSubmit(event) {
    event.preventDefault()
    
    // get data from form
    //event.target.name.value
    //event.target[0].value
    const newPlant = {
      //"id": 1,
      "name": event.target.name.value,
      "image": event.target.image.value,
      "price": event.target.price.value
    }
    console.log(newPlant)

    // sent POST request
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(resp => resp.json())
      .then(data => {
        // add new plant to the page
        setPlants(prevPlants => [...prevPlants, newPlant])
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
