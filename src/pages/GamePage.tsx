import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import "./GamePage.css";

function GamePage() {
    return ( 
        <>
            <Header/>
                <div className="cover">
                    <img src="/assets/img/gow.jpg" alt="God of war" />
                </div>
            <Newsletter/>
            <Footer/>
        </>
     );
}

export default GamePage;