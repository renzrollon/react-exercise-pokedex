import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserInput from "../UserInput";


describe('UserInput', () => {
    const userInputTestId = "userInput-id";

    it('should render the default name', () => {
        render(<UserInput/>);
        expect(screen.getByText("Hello World!")).toBeInTheDocument();
    });

    it('should render the inputted name', () => {
        render(<UserInput/>);
        userEvent.type(screen.getByTestId(userInputTestId), "Carl");
        expect(screen.getByText("Hello Carl!")).toBeInTheDocument();
    });


});