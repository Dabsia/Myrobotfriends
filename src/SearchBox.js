import React from "react";
import './SearchBox.css'

const SearchBox = ({searchfield, SearchChange}) => {
    return (
        <input className = 'input'
         placeholder = 'search robots'
         onChange = {SearchChange}
         />
    )
}



export default SearchBox 