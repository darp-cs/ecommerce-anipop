import React from 'react';
import Funko from './Funko/Funko'
import classes from './Funkos.module.css'
import LtH from '../Filter/LowtoHigh/LowtoHigh'
import HtL from '../Filter/HightoLow/HightoLow';



const funkos = (props) => {

    switch(props.filter){
        case '1':
            LtH(props)
            break;
        case '2':
            HtL(props)
            break;
        default:
            break;
    }

    
    const allProducts = props.funko
    .map(funko => {
        return(
        <Funko 
        Name = {funko.name}
        Description = {funko.description}
        Price = {funko.price}
        key = {funko.id}
        Source = {funko.source}
        filter = {1}
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