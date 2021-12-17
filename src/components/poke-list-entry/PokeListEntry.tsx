
type Props = {
    pokemonName?: string,
    pokemonUrl?: string
};

const PokeListEntry = ({pokemonName = 'Bulbasaur',
                        pokemonUrl= 'https://pokeapi.co/api/v2/pokemon/1/'} : Props) => {
    return (
        <a href={pokemonUrl} data-testid="pokemonUrl-id">
            {pokemonName}
        </a>
    );
};

export default PokeListEntry;