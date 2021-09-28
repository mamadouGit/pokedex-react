 import Logo from "./components/logo";
 import Bestpokemon from "./components/bestpokemon";
 import CaughtPokemon from "./components/CaughtPokemon";

 var abilities=['Anticipation', 'Adaptability', 'Run-Away'];
 const logWhenClicked=function(){
   console.log("it doesn't matter what the message is")}

const App =function(){
   const logWhenClicked=function(){
      console.log("it doesn't matter what the message is")}

  
  
   return <div>
    <Logo   appName="Pokedex" handleclick={logWhenClicked}/>
    <Bestpokemon abilities={abilities }/>

    <CaughtPokemon  date={new Date().toLocaleDateString()}/>
    

   </div> 

}











export default App;
