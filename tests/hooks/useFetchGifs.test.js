import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
describe('pruebas en hook useFetchFifs', () => {
    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Dir en Grey'));
        const { images , isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
        // console.log( result );
    //    useFetchGifs();
    });
    test('Debe de retornar un arreglo de imagenes y isLoading en false ', async () => {
        const { result } = renderHook(() => useFetchGifs('Dir en Grey'));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );
        const {images , isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy()
    });
});