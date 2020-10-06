import React, { Component } from "react"
import prod from '../assets/banner_image.svg';
var Carousel = require('react-responsive-carousel').Carousel;
class Productos extends Component {


    render() {
        return (
            <Carousel showThumbs={false}>



                <div class="container">


                    <img src={prod} alt="yeguada"></img>





                </div>



            </Carousel>
        );
    }




}


export default Productos