import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Footer from '../../components/Footer/Footer';



class Layout extends Component  {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


render(){
    return(
            <Auxiliary>
                <Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler}/>
                            
                <SideDrawer 
                closed = {this.sideDrawerClosedHandler} 
                open = {this.state.showSideDrawer}/>

            
                <main className = {classes.Content}>
                    {this.props.children}
                </main>

                <Footer/>
            </Auxiliary>
        )
    };

}

export default Layout;