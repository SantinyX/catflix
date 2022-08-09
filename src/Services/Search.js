//Criando import do input buscando do API
import React from "react";

const SearchInput = ({ value, onChange }) => {
    
    //Function de criação do evento do valor do input 
    function handleChange(event) {
        onChange(event.target.value);
    }
    
    //Retornando o Input com event.target.value (seu valor)
    return (
        <input type="search" value={value} onChange={handleChange} />
    )
}

export default SearchInput;