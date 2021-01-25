import React from 'react';
import Funko from './Funko/Funko'
import classes from './Funkos.module.css'



const funkos = (props) => {

    const allProducts = props.funko
    .map(funko => {
        return(
        <Funko 
        Name = {funko.name}
        Description = {funko.description}
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