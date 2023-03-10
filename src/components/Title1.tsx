import { ReactElement } from "react";

const st: React.CSSProperties = {
    display: "block",
    // width: "100%",
    padding: "--fs-body",
    fontSize: "1.625rem"
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