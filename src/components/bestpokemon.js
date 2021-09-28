import React from "react"


const Bestpokemon= (props)=>{

 
  return <div> 
    
    <p>My favorite Pokémon is Squirtle</p>
    <ul>
      {props.abilities.map(function(ability){
        return <li>{ability}</li>

      })}
    </ul>
  </div>
}
  export default Bestpokemon;