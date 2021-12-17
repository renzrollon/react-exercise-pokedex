import React from 'react';
import './App.css';
import PokeList from "./components/poke-list-entry/PokeList"
import UserInput from "./components/user-input/UserInput"
const App = () =>{
    return (
        <div>
            <UserInput/>
            <br/>
            <h2>POKEDEX:</h2>
            <PokeList/>
        </div>

    );
}

export default App;
