import React, {Component} from 'react'
import database from '../../../components/External/External'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import classes from './Home.module.css'
import Slider from '../../../components/Slider/Slider'


class Home extends Component{

    state = {
        featured : database.featured,
        currentImg: 0,
        currentProduct:database.featured[0]
     }


    fowardHandler = () =>{
        
        
        if(this.state.currentImg <=1){
            let nextImg = this.state.currentImg + 1
            let nextProduct = this.state.featured[nextImg]
            this.setState({currentImg:nextImg, currentProduct: nextProduct})
        } else{
            let firstImg = 0
            let firstProduct = this.state.featured[0]
            this.setState({currentImg:firstImg, currentProduct: firstProduct})
        }
    }

    backHandler = () =>{
        if(this.state.currentImg >=1){
            let nextImg = this.state.currentImg -1 
            let nextProduct = this.state.featured[nextImg]
            this.setState({currentImg:nextImg, currentProduct: nextProduct})
        } else{
            let lastImg = 2
            let lastProduct = this.state.featured[2]
            this.setState({currentImg:lastImg, currentProduct: lastProduct})
        }
    }


        
    
    
    render(){


        return (

            <div>

                
                <Slider 
                forward = {this.fowardHandler}
                back = {this.backHandler}
                featuredProduct = {this.state.currentProduct}
                />

            </div>  
    )
    }
}

export default Home;