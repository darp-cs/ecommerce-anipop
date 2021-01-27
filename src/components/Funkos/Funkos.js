import React from 'react';
import Funko from './Funko/Funko'
import classes from './Funkos.module.css'
import LtH from '../Filter/LowtoHigh/LowtoHigh'
import HtL from '../Filter/HightoLow/HightoLow';
import ByAnime from '../Filter/ByAnime/ByAnime'



const funkos = (props) => {
    let funkos = props.funko
    switch(props.filter){
        case '1':
            LtH(props)
            break;
        case '2':
            HtL(props)
            break;
        case 'Naruto Shippuden':
           funkos = ByAnime(props, 'Naruto Shippuden')
            break;
        case 'Dragon Ball':
           funkos = ByAnime(props, 'Dragon Ball')
            break;
        case 'Attack On Titan':
           funkos = ByAnime(props, 'Attack On Titan')
            break;
        default:
            break;
    }

    const allProducts = funkos
    .map(funko => {
        return(
        <Funko 
        Name = {funko.name}
        Anime = {funko.anime}
        Price = {funko.price}
        key = {funko.id}
        Source = {funko.source}
        />
        )
        
    })


    return(
    
       <div className = {classes.ProductsGrid}>
           {allProducts}
       </div>
    )
    

};



export default funkos;