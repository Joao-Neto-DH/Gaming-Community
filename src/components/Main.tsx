import { ReactElement } from "react";
import "./Main.css";

const Main: React.FC<{children: ReactElement}> = ({children}) => {
    
    return ( 
        <div className="main-content">
            <main>
                {children}
            </main>
            <aside>
                {children}
            </aside>
        </div> 
    );
}

export default Main;