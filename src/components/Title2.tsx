import { ReactElement } from "react";

const st: React.CSSProperties = {
    display: "block",
    // width: "100%",
    padding: "0.875rem",
    fontSize: "1.375rem"
    // textAlign: "center"
}

const Title1: React.FC<{children: string | ReactElement, align?: "center" | "left" | "right"}> = ({children, align = "left"}) => {
    return ( 
        <h2 style={{textAlign: align, ...st}}>
            {children}
        </h2>
     );
}

export default Title1;