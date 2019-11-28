import React from 'react';
 import './search-box.style.css';


 export const SearchBox = ({placehold, changehandler}) => (
    <input type="search" 
    class='search'
    placeholder={placehold}
    onChange={changehandler} />
    

 );