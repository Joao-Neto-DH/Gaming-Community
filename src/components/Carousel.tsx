import "./Carousel.css";
import Light from "./Light";

function Carousel() {
    var lights : Array<JSX.Element> = [];

    for (let index = 0; index < 16; index++) {
        lights[index] = <Light key={index}/>
        
    }
    return ( 
    <div className="carousel">
        <div className="carousel-inner">
            <img src="/background.png" alt="logo" />
            <div className="carousel-info">
                <h2>Something to say</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                     Nisi iste error dolore repudiandae, dolor maiores.</p>
                     <a href="/" className="btn btn-carousel">Scroll Down</a>
            </div>
            {lights}
        </div>
    </div> 
    );
}

export default Carousel;