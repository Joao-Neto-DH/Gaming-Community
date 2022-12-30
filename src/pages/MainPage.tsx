import { ReactNode } from "react";
import Header from "../components/Header";

const MainPage: React.FC<{children: ReactNode}> = ({children})=>{
    return(
        <>
            <Header/>
            { children }
        </>
    );
}

export default MainPage;