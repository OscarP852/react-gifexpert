import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }
    
    const onSubmit = ( event ) => {

        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue <= 1 ) return;
        onNewCategory(newValue);
        setInputValue('');

    }
    return (
        <form onSubmit={ onSubmit }>
            <input type="text"
            placeholder="Buscar Imagenes"
            value={ inputValue }
            onChange={  onInputChange }
            />
        </form>
    )
}