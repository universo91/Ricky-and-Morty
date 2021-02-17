import React, { useState } from "react";
import LocationContainer from "./Clases/LocationContainer";
function App() {
  const [search, setSearch] = useState("");

  function handleSearch (){

  }
  return (
    <>
    <h1>Rick and Morty</h1>
    <LocationContainer/>
    <hr/>
    </>
  );
}

export default App;
