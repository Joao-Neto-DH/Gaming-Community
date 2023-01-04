import { CSSProperties, ReactNode } from "react";
import { Form } from "react-router-dom";
import Container from "../components/Container";
import Main from "../components/Main";
import Separator from "../components/Separator";
import Streammer from "../components/Streammer";
import Title1 from "../components/Title1";
import "./GamePage.css";

const asideStyle: CSSProperties = {
    display:"flex",
    flexDirection:"column",
    alignSelf:"flex-start",
    position:"sticky",
    top:"85px", 
    height:"calc(100vh - 85px)"
};

function GamePage() {
    return ( 
        <>
            <div className="cover">
                <img src="/assets/img/gow.jpg" alt="God of war" />
            </div>
            <Main>
                <>
                    <aside>
                        <Container style={asideStyle}>
                            <>
                                <Form method="get" className="search-form">
                                    <div className="search-form-inner">
                                        <button type="button" className="btn">
                                            Filtrar
                                        </button>
                                        <input type="text" name="search" required/>
                                        <button type="submit" className="btn">🔍</button>
                                    </div>
                                </Form>
                                <div className="games" style={{height:"100%", overflow:"auto"}}>
                                    <div className="game-inner">
                                        {new Array<ReactNode>(1).fill(<Streammer key={0} status="offline"/>)}
                                    </div>
                                </div>
                            </>
                        </Container>
                    </aside>
                    <Container style={{width:"70%",alignSelf:"flex-start", marginLeft:"auto", marginRight:"auto"}}>
                        <>
                            <div className="game-imgs">
                                <img key={0} src="/assets/img/gow.jpg" alt="gow" className="game-img" />
                                <img key={1} src="/assets/img/fortnite.jpg" alt="gow" className="game-img" />
                            </div>
                            <Separator/>
                            <div className="details">
                                <div>
                                    <Title1>
                                        Plataformas
                                    </Title1>
                                    <ul>
                                        <li key={0}>
                                            💻 Windows 7/8/8.1/10/11
                                        </li>
                                        <li key={1}>
                                            📱 Android 8
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <Title1>
                                        Requesitos
                                    </Title1>
                                    <ul>
                                        <li key={3}>Computador: i5 @3.0Ghz</li>
                                        <li key={4}>Placa gráfica: AMD Radeon HD - 1GB</li>
                                        <li key={5}>Ram: 8GB</li>

                                    </ul>
                                </div>
                                <div>
                                    <Title1>
                                        Recomendado
                                    </Title1>
                                    <ul>
                                        <li key={3}>Computador: i5 @3.0Ghz</li>
                                        <li key={4}>Placa gráfica: AMD Radeon HD - 1GB</li>
                                        <li key={5}>Ram: 8GB</li>

                                    </ul>
                                </div>
                            </div>
                        </>
                    </Container>
                </>
            </Main>
        </>
     );
}

export default GamePage;