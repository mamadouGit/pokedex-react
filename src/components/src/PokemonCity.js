import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  const updatecity=function(event){
      return setCity(event.target.value)
  }

  return (
    <div>
        <input value={city} onChange={updatecity}></input>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
