import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () =>(
    <ul className = {classes.NavItems}>
        <NavigationItem link = '/' exact>Home</NavigationItem>
        <NavigationItem link = '/Products'exact>Products</NavigationItem>
        {/* <NavigationItem link = '/Checkout'exact>Checkout</NavigationItem> */}
        <NavigationItem link = '/Contact' exact>Contact</NavigationItem>
    </ul>
);

export default navigationItems;