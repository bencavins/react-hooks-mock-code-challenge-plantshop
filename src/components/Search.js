import React from "react";

function Search({search, setSearch}) {
  function handleChange(event) {
    // grab data from search input
    const newSearch = event.target.value

    // update search in state
    setSearch(newSearch)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
