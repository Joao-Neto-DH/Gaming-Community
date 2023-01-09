import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import Light from "./Light";

const Carousel = () => {
    const lights : Array<ReactElement> = [];

    for (let index = 0; index < 16; index++) {
        lights[index] = <Light key={index}/>
    }
    
    return  (
    <div className="carousel">
        <div className="carousel-inner">
            <img src="/assets/img/fortnite.jpg" alt="logo" />
            <div className="carousel-info">
                <h2>Something to say</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                     Nisi iste error dolore repudiandae, dolor maiores.</p>
                     <Link to="/" className="btn btn-carousel">Scroll Down</Link>
            </div>
            {lights}
        </div>
    </div> 
    );
};

export default Carousel;
