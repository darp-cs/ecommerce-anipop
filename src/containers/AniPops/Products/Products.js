import React, { Component } from 'react'
import Funkos from '../../../components/Funkos/Funkos'
import classes from './Products.module.css'
import database from '../../../components/External/External'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

class Products extends Component{

    
    state = {
       merch : database.merch
    }

    

    render(){

        return(
            <Auxiliary>
                <div className = {classes.ProductsGrid}>
                <div className = {classes.Filter}>Filter</div>
                <Funkos funko ={this.state.merch}/>
                <div  className = {classes.ItemSummary}>Item Summary</div>
                </div>
            </Auxiliary>
        )
    }

    
}

export default Products;