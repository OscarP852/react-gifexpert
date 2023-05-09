import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en <GifItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('evaluar el snapshot', () => {
        const { container } = render( <GifItem title={ title } url= { url }/>);
        expect( container ).toMatchSnapshot();
    })
    test('mostrar url y titulo de imagen indicado', () => {
       render( <GifItem title={ title } url= { url }/>);
       const { src , alt } = screen.getByRole('img');
       expect( src ).toBe( url );
       expect( alt ).toBe( title );
    })
    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url= { url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();
     })
}); 