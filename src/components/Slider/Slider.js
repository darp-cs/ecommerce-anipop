import React from 'react';
import classes from './Slider.module.css'
import Auxiliary from './../../hoc/Auxiliary/Auxiliary'

const slider = (props) =>
{
    const source = 'url('+props.featuredProduct.source+')'
    return (
    <div className = {classes.Slider}>
       
        <div className = {classes.Card}>
            <div style ={{content: source}} className = {classes.Image}></div>
            <ul className = {classes.Content}>
                <li className ={classes.Name}>{props.featuredProduct.name}</li>
                <li className ={classes.Anime}>{props.featuredProduct.anime}</li>
                <li className ={classes.Price}>${props.featuredProduct.price}</li>
            </ul>
        </div>
        <button className={classes.Back} onClick = {props.back}>&#8592;</button>
        <button className={classes.Forward} onClick={props.forward}>&#8594;</button>
    </div>
    )
}


export default slider