import { ReactElement } from "react";

const style: React.CSSProperties = {
    display: "block",
    // width: "100%",
    padding: "0.875rem",
    textAlign: "center"
}

const Title1: React.FC<{children: string | ReactElement}> = ({children}) => {
    return ( 
        <h2 style={style}>
            {children}
        </h2>
     );
}

export default Title1;