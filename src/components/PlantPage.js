import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
