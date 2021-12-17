import {render, screen} from '@testing-library/react';
import PokeList from "../PokeList";
import userEvent from "@testing-library/user-event";

describe('PokeList', () => {
    const expectedPokemonCount = 151;

    it('should render the list with correct count', async () => {
        const {getByTestId, findByTestId} = render(<PokeList/>);
        await findByTestId("pokemonList-id");
        expect(getByTestId("pokemonList-id").children.length)
            .toEqual(expectedPokemonCount);
    });

    it.each(["bulbasaur", "pikachu", "clefairy", "articuno", "mewtwo"])
    ('should render the list with pokemon names', async (pokemonName) => {
        render(<PokeList/>);
        await screen.findByText(pokemonName);
        expect(screen.getByText(pokemonName)).toBeInTheDocument();
    });

});