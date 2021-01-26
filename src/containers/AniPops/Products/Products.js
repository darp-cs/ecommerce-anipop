import React, { Component } from 'react'
import Funkos from '../../../components/Funkos/Funkos'
import classes from './Products.module.css'
import database from '../../../components/External/External'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Filter from '../../../components/Filter/Filter'

class Products extends Component{

    
    state = {
       merch : database.merch,
       filter: null
    }

    filterHandler = (type) =>{
        switch(type){
            case '0':
                this.setState({filter:'0'})
                break;
            case '1' :
                this.setState({filter: '1'})
                break;
            case '2':
                this.setState({filter: '2'})
                break;
            case 'Dragon Ball':
                this.setState({filter:'Dragon Ball'})
                break;
            case 'Naruto Shippuden':
                this.setState({filter:'Naruto Shippuden'})
                break;
            case 'Attack On Titan':
                this.setState({filter:'Attack On Titan'})
                break;
            default:
                break;
        }

        
    }

    render(){

        return(
            <Auxiliary>
                <div className = {classes.ProductsGrid}>
                    <Filter change ={this.filterHandler} className = {classes.Filter}/>
                    <Funkos filter = {this.state.filter} funko ={this.state.merch}/>
                    <div  className = {classes.ItemSummary}>Item Summary</div>
                </div>
            </Auxiliary>
        )
    }

    
}

export default Products;