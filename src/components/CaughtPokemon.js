import React,{useState} from "react"
const CaughtPokemon=function(props){
    const [poke,setpoke]=useState([])
    const catchPokemon=function(){
        return setpoke(poke+1)
    }

    
    return<p>
        Caught {poke.length}Pokémon on {props.date}
        <button onClick={catchPokemon}> catch pokemon</button>
         </p>
    
    
    
    
};



export default CaughtPokemon;