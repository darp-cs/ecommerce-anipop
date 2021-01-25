import React from 'react';
import classes from './Filter.module.css'

const filter =(props) => (

    <div>
        <label>Sort by: </label>
        <select onChange = {e => props.change(e.target.value)} className = {classes.DropDown}>
            <option value = '0'></option>
            <option value = '1'>Price: Low To High</option>
            <option value = '2'>Price: High to Low</option>
        </select>

    </div>

);


export default filter;