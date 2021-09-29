import React,{useState} from "react"
const CaughtPokemon=function(props){
    const [poke,setpoke]=useState([])
    const[pokemonNameInput,setpokemonNameInput]=useState("")
    const catchPokemon=function(){
        return setpoke("")
       
    }
    const handleInputChange=function(event){
        return setpokemonNameInput(event.target.value)
    }

    
    return<p>
        Caught {pokemonNameInput}Pokémon on {props.date}
        <input value={pokemonNameInput} onChange={handleInputChange}></input>
        <button onClick={catchPokemon}> catch pokemon</button>
         </p>
    
    
    
    
};



export default CaughtPokemon;