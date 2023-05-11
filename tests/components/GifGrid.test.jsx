import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/> ',()=>{
    const category = 'Dir en Grey';
    test('Debe mostrar el loading correctamente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={ category }/>);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText( category ) );

    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        
        const images = [
        {
            id: 'ABC',
            url: 'https://localhost/cualquier/direngods.jpg',
            title: 'Dir en grey'
        },
        {
            id: 'ABCD',
            url: 'https://localhost/cualquier/direngods2.jpg',
            title: 'Dir en grey 2'
        },
        ];
        useFetchGifs.mockReturnValue({
            images: images,
            isLoading: true
        });
        
        render(<GifGrid category={ category }/>);

        expect( screen.getAllByRole('img').length ).toBe(2);
       

    });
});