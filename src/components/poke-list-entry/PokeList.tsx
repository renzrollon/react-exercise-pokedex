import PokeListResponse from "./PokeListResponse.json";
import PokeListEntry from "./PokeListEntry"
import React, {useState, useEffect} from 'react';
import usePokemonList from "./UsePokemonList";


const PokeList = () => {
    const pokemonList = usePokemonList();

    if(!pokemonList) {
        return null;
    }

    return (

        <ol data-testid="pokemonList-id">
            {pokemonList.map(
                (pokemon: {name: string; url: string;}) => (
                    <li key={pokemon.name}>
                        <PokeListEntry
                            pokemonName={pokemon.name}
                            pokemonUrl= {pokemon.url}
                        />
                    </li>
                )
            )}
        </ol>
    );
};

export default PokeList;