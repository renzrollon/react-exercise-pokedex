import {render} from '@testing-library/react';
import PokeListEntry from "../PokeListEntry";

describe('PokeListEntry', () => {
    const pokemonNames = ['Bulbasaur', 'Eevee', 'Pickachu', 'Mew'];
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/151/';
    const pokemonUrlTestId = "pokemonUrl-id";

    it.each(pokemonNames)
    ('should render the passed pokemon name', (pokemonName) => {
        const {getByText} = render(<PokeListEntry pokemonName={pokemonName}/>)
        expect(getByText(pokemonName)).toBeInTheDocument();
    });

    it('should have link to pokemon url', () => {
        const {queryByTestId} = render(<PokeListEntry pokemonUrl={pokemonUrl}/>)
        expect(queryByTestId(pokemonUrlTestId)).toHaveAttribute('href', pokemonUrl);
    })
});