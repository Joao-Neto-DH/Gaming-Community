import { ReactElement } from "react";
import "./Main.css";

const Main: React.FC<{children: ReactElement}> = ({children}) => {
    
    return ( 
        <div className="main-content">
            {children}
        </div> 
    );
}

export default Main;