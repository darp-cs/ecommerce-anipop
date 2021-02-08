import React from 'react';
import classes from './Footer.module.css'



const footer = () =>(

    <div className = {classes.FooterContainer}>
        <ul className = {classes.List}>
            <li className = {classes.Insta}>Instagram</li>
            <li className = {classes.Twitter}>Twitter</li>
            <li className = {classes.Copyright}>Copyright</li>
        </ul>
    </div>
)


export default footer;