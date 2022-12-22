import { ReactElement } from "react";
import "./Main.css";

const Main: React.FC<{children: ReactElement}> = ({children}) => {
    
    return ( 
        <main className="main-content">
            {children}
        </main> 
    );
}

export default Main;