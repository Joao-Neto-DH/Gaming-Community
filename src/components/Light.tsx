import { CSSProperties, useRef } from "react";
import "./Light.css";

function Light() {
    function color(){
        return Math.min(Math.round(Math.random()*256), 255);
    }

    var size = useRef(Math.min(Math.round(Math.random()*64), 48)).current;

    const styleLight: CSSProperties = {
        width: size,
        height: size,
        background: `rgba(${color()},${color()},${color()},1)`,
        left: `${Math.random()*document.body.clientWidth}px`,
        animationDelay: Math.random()*10 + "s"
    };
     
    return ( <span className="light" style={styleLight}></span> );
}

export default Light;