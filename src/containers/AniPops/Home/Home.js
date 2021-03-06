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

    componentDidMount() {
        window.scrollTo(0, 0);
    }

        
    
    
    render(){
    

        return (

                <Auxiliary>

                    <div className = {classes.HeroContainer}>
                        <div className ={classes.Hero}>
                            Content
                        </div>
                    </div>
                    <div className = {classes.LogoContainer}>
                        <span className = {classes.Logo}>AniPops</span>
                    </div>
                    <div className = {classes.Content}></div>
                    <div className= {classes.GridArea}>
                        <div className= {classes.LeftSide}></div>
                        <div className = {classes.SliderContainer}>
                            <Slider 
                            forward = {this.fowardHandler}
                            back = {this.backHandler}
                            featuredProduct = {this.state.currentProduct}
                            />
                        </div>
                        <div className= {classes.RightSide}></div>
                    </div>  

            </Auxiliary>
    )
    }
}

export default Home;