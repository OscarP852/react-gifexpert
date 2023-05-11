import { render, screen, fireEvent } from '@testing-library/react';
import { GiftExpertApp } from '../src/GiftExpertApp'

describe('Pruebas en <GiftExpertApp/>',()=>{

    test('evaluar el snapshot', () => {
        const { container } = render( <GiftExpertApp/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe validar que las categorias no se repitan', () => {
        render( <GiftExpertApp />);
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
       
        fireEvent.input( input, { target: { value: 'Dir En Grey' } } );
        fireEvent.submit( form );
        fireEvent.input( input, { target: { value: 'Dir En Grey' } } );
        fireEvent.submit( form );
        
        expect( screen.getByText('Dir En Grey') ).toBeTruthy();
    });
    test('no debe añadir una categoría existente', () => {
 
        render( <GiftExpertApp />);
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: 'Dir En Grey' } } );
        fireEvent.submit( form );
        
        expect( screen.getAllByText('Dir En Grey').length ).toBe( 1 );
 
    });
 
});