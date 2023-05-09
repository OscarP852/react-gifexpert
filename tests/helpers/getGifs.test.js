import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en GifItems',() => {
    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('Dir en Grey');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan( 0 );
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
})