import {useEffect, useState} from "react";

const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<[]>();
    const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const response = await fetch(pokemonApiUrl);
            const pokemonResult = await response.json();
            if(!cancelled){
                setPokemonList(pokemonResult.results);
            }

        })();
        return () => { cancelled = true; };
    }, []);

    return pokemonList;
}

export default usePokemonList;