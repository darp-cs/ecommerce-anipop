import React from 'react';
import classes from './Filter.module.css'

const filter =(props) => (

    <div>
        <label>Sort by: </label>
        <select onChange = {e => props.change(e.target.value)} className = {classes.DropDown}>
            <option className = {classes.O1} value = '0'></option>
            <option className = {classes.O2} value = '1'>Price: Low To High</option>
            <option className = {classes.O3} value = '2'>Price: High to Low</option>
            <option className = {classes.O4} value = 'Dragon Ball'>Anime: Dragon Ball</option>
            <option className = {classes.O5} value = 'Naruto Shippuden'>Anime: Naruto Shippuden</option>
            <option className = {classes.O6} value = 'Attack On Titan'>Anime: Attack On Titan</option>
        </select>
    </div>

);


export default filter;