import React, { useState } from 'react';
import './dropdown.style.scss';

// Import Icons

import Arrow from '../../assets/icons/arrow';
import Check from '../../assets/icons/check';

const dropdown_options = [
    {name: 'New'},
    {name: 'Recommended'},
    {name: 'Title Ascending'},
    {name: 'Title Descending'},
    {name: 'Price Ascending'},
    {name: 'Price Descending'},
]


const DropDown = () => {
    const [dropDown, setDropDown] = useState(false);
    const [dropDownStyle, setDropDownStyle] = useState({display: 'none'});
    const [dropArrow, setDropArrow] = useState({transform: 'rotate(0deg)'})
    const [optionValue, setOptionValue] = useState('Recommended');

    function dropdownFun() {
        if(dropDown === false) {
            setDropDownStyle({display: 'flex'})
            setDropArrow({transform: 'rotate(180deg)'});
            setDropDown(true);
        } else {
            setDropDownStyle({display: 'none'})
            setDropArrow({transform: 'rotate(0deg)'});
            setDropDown(false);
        }
    }

    function schoos(target) {
        setOptionValue(target.name);
    }

    return ( 
        <div className='dropdown_container' onClick={dropdownFun}>
            <div className='filter-title flex justify-between align-items-center'>
                <p className='font-bold'>sort By: <span className='font-bold-300'>{optionValue}</span></p>
                <Arrow rotate={dropArrow}/>
            </div>
            <ul className='dropdown_ul flex' style={dropDownStyle}>
                {dropdown_options.map((e) => {
                    return(
                        <li className='dropdown_li flex align-items-center' onClick={() => {schoos(e)}}>
                            <p>{e.name}</p> {optionValue === e.name ? <Check /> : ''}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default DropDown;