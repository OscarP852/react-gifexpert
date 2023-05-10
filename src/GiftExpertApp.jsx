import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategorie ) =>{

        if(categories.includes(newCategorie)) return;
        setCategories([newCategorie, ...categories]);

    }
    
    return (
        <>
            <h1>Buscador de Imagenes</h1>
            <AddCategory 
                onNewCategory = { onAddCategory }
            />
                { 
                    categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                    ))
                }
        </>
    );
}