import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home'
import Products from './Products/Products'
import Checkout from './Checkout/Checkout'
import Contact from './Contact/Contact'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'


class AniPops extends Component{

        

    render (){

        return(
            <Auxiliary>
            <Route path ='/' exact component = {Home}/>
            <Route path ='/Products' exact component = {Products}/>
            {/* <Route path ='/Checkout' exact component = {Checkout}/> */}
            <Route path ='/Contact' exact component = {Contact}/>
            </Auxiliary>
        );
    }




}

export default AniPops;