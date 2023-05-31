import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

import { useState, useEffect } from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plantData => setPlants(plantData))
  }, [])

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setSearch={setSearch} />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
