import React from 'react';
import classes from './Funko.module.css'

const funko = (props) =>{

    const source = 'url('+props.Source+')'
    return (
    <div className = {classes.Card}>
        <div style ={{content: source}} className = {classes.Image}></div>
        <ul className = {classes.Content}>
            <li className ={classes.Name}>{props.Name}</li>
            <li className ={classes.Description}>{props.Description}</li>
            <li className ={classes.Price}>${props.Price}</li>
        </ul>
        <button className ={classes.Button}>Add to Cart</button>
    </div>
    )
    };



export default funko;