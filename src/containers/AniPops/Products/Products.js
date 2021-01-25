import React, { Component } from 'react'
import Funkos from '../../../components/Funkos/Funkos'
import classes from './Products.module.css'
import database from '../../../components/External/External'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

class Products extends Component{

    
    state = {
       merch : database.merch,
       filter: null
    }

    filterHandler = (type) =>{
        switch(type){
            case '1' :
                this.setState({filter: 1})
                break;
            case '2':
                this.setState({filter: 2})
                break;
            default:
                break;

        }
    }

    render(){

        return(
            <Auxiliary>
                <div className = {classes.ProductsGrid}>
                    <div click ={this.filterHandler} className = {classes.Filter}>Filter</div>
                    <Funkos filter = {this.filter} funko ={this.state.merch}/>
                    <div  className = {classes.ItemSummary}>Item Summary</div>
                </div>
            </Auxiliary>
        )
    }

    
}

export default Products;