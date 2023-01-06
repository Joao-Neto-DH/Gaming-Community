import { CSSProperties } from "react";
import { useRouteError } from "react-router-dom";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import "./ErrorPage.css";

const style: CSSProperties = {
    display: "inline-block",
    position: "relative",
    left: "50%",
    transform: "translate(-50%, -25%)"
}

function ErrorPage() {
    type Error = {
        statusText: string,
        status: number,
        error: {
            message: string
        }
    }
    const error: Error = useRouteError() as Error;
    
    return ( 
        <>
            <Header/>
            <Carousel/>
            <div style={ style }>
                <Container style={{padding:"20px", borderRadius: "6px"}}>
                    <div className="error">
                        <h2>Oops!!!🙀😲</h2>
                        <p>
                            <i>Parece que algo deu errado<br/>Resolveremos esse erro o mais breve possível!</i>
                        </p>
                        <h2>{ error.statusText } - { error.status }</h2>
                        { error.error && <p>{ error.error.message }</p>}
                    </div>
                </Container>
            </div>
            <Newsletter/>
            <Footer/>
        </>
     );
}

export default ErrorPage;