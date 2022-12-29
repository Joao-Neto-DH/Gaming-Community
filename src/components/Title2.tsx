import { CSSProperties, ReactElement } from "react";

const st: CSSProperties = {
    display: "block",
    // width: "100%",
    padding: "0.875rem",
    fontSize: "1.375rem"
    // textAlign: "center"
}

const Title2: React.FC<{children: string | ReactElement, align?: "center" | "left" | "right",styles?: CSSProperties}> = ({children, align = "left", styles}) => {
    return ( 
        <h3 style={{textAlign: align, ...st,...styles}}>
            {children}
        </h3>
     );
}

export default Title2;