import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

function MainPage(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Newsletter/>
            <Footer/>
        </>
    );
}

export default MainPage;