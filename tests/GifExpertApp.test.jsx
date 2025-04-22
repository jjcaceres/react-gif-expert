import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testear el componente <GifExpertApp />', () => {

    test('should first', () => {
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.change(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        expect(screen.getAllByText('One Punch').length).toBe(1)
        screen.debug()

    })

})