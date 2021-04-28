import React from 'react';
import './search-box.styles.css';


export const Search = ({placeholder, type, handleChange}) => (
    <input className="search"
    placeholder={placeholder}
    type={type}
    onChange={handleChange}
    />
);