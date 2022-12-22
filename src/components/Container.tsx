import React, { ReactElement } from "react";
import "./Container.css";

const Container: React.FC<{children: ReactElement, style?: React.CSSProperties}> = ({children, style}) => {
    return ( 
        <div className="container" style={style}>
            {children}
        </div>
     );
}

export default Container;