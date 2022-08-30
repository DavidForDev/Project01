import React, { useState } from 'react';
import './search.style.scss';

// Import Icons
import Searchi from '../../assets/icons/search';
import Close from '../../assets/icons/close';

// Import data base
import { test } from '../../lib/test';

// Import Components
import productCard from '../productCard/productCard';

const Search = () => {
    const [searched, setSearched] = useState([]);

    function searchClose() {
        const searchContainer = document.querySelector('.search__container');

        searchContainer.style.display = 'none'
    }


    function searchFun(input) {
        const inputValue = input.target.value;

        test.forEach((e) => {
            if(e.kind === inputValue) {
                return setSearched(e);
            }
        })
    }

    return ( 
        <div className='search__container container-full flex justify-center align-items-center'>
            <div className='search-box flex align-items-center'>
                <Searchi />
                <input type='text' onChange={(e) => searchFun(e)} className='search' placeholder='Search for products or'/>

            </div>
            <div className='closer' onClick={searchClose}>
                <Close />
            </div>
        </div>
    );
}
 
export default Search;