//import { Carousel } from 'bootstrap';
import React from 'react';
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} subtitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    )
}

export default HomePage;