import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }
    
    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde el submit');
        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length <= 1 ) return;
        setInputValue('');
        onNewCategory(newValue);
        

    }
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input type="text"
            placeholder="Buscar Imagenes"
            value={ inputValue }
            onChange={  onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};