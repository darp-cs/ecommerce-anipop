import React from 'react';
import classes from './Footer.module.css'



const footer = () =>(

    <div className = {classes.FooterContainer}>
        <ul className = {classes.List}>
            <li className = {classes.Insta}><a  target="_blank" href = "https://www.twitter.com">Instagram</a></li>
            <li className = {classes.Twitter}><a href = "https://www.instagram.com"  target="_blank">Twitter</a></li>
            <li className = {classes.Copyright}>Copyright &copy;</li>
        </ul>
    </div>
)


export default footer;