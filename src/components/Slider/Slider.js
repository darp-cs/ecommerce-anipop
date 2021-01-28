import React from 'react';
import classes from './Slider.module.css'

const slider = (props) =>
{
    const source = 'url('+props.featuredProduct.source+')'
    return (
    <div className = {classes.Slider}>
        <button onClick = {props.back}></button>
        <div className = {classes.Card}>
        <div style ={{content: source}} className = {classes.Image}></div>
        <ul className = {classes.Content}>
            <li className ={classes.Name}>{props.featuredProduct.name}</li>
            <li className ={classes.Anime}>{props.featuredProduct.anime}</li>
            <li className ={classes.Price}>${props.featuredProduct.price}</li>
        </ul>
    </div>
        <button onClick = {props.forward}></button>
    </div>
    )
}


export default slider