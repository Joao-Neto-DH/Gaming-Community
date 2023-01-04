import { CSSProperties, ReactNode } from "react";
import { Form } from "react-router-dom";
import Container from "../components/Container";
import Main from "../components/Main";
import Separator from "../components/Separator";
import Streammer from "../components/Streammer";
import Title1 from "../components/Title1";
import Title2 from "../components/Title2";
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
                <h2 className="game-title">God Of war</h2>
                <div className="classification-game">
                    <span>16</span>
                </div>
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
                    <main style={{width:"70%",alignSelf:"flex-start", marginLeft:"auto", marginRight:"auto"}}>
                        <Container >
                            <>
                                <div className="game-imgs">
                                    <img key={0} src="/assets/img/gow.jpg" alt="gow" className="game-img" />
                                    <img key={1} src="/assets/img/fortnite.jpg" alt="gow" className="game-img" />
                                    <img key={2} src="/assets/img/mario.jpg" alt="gow" className="game-img" />
                                </div>
                                <Separator/>
                                <div className="details box">
                                    <div>
                                        <Title2>
                                            Plataformas
                                        </Title2>
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
                                        <Title2>
                                            Requesitos
                                        </Title2>
                                        <ul>
                                            <li key={3}>Computador: i5 @3.0Ghz</li>
                                            <li key={4}>Placa gráfica: AMD Radeon HD - 1GB</li>
                                            <li key={5}>Ram: 8GB</li>

                                        </ul>
                                    </div>
                                    <div>
                                        <Title2>
                                            Recomendado
                                        </Title2>
                                        <ul>
                                            <li key={3}>Computador: i5 @3.0Ghz</li>
                                            <li key={4}>Placa gráfica: AMD Radeon HD - 1GB</li>
                                            <li key={5}>Ram: 8GB</li>

                                        </ul>
                                    </div>
                                </div>
                                <Separator />
                                <div className="box" style={{display:"flex",flexDirection:"column"}}>
                                    <Title2>
                                        Descrição
                                    </Title2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure maiores laborum quas nesciunt nihil, praesentium aliquam mollitia perferendis. Maxime eaque sunt, dolorem rem architecto doloremque repellat tempore distinctio? Alias, aperiam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem minima! Perspiciatis officia veritatis dolorem. Sit nam voluptates, eaque dolor esse repellat magni repellendus perferendis laboriosam id nihil! Mollitia, ea?
                                    </p>
                                    <figure className="img-text">
                                        <img src="/assets/img/gow.jpg" alt="gow" />
                                        <figcaption>Fonte: GameVicio</figcaption>
                                    </figure>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure maiores laborum quas nesciunt nihil, praesentium aliquam mollitia perferendis. Maxime eaque sunt, dolorem rem architecto doloremque repellat tempore distinctio? Alias, aperiam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem minima! Perspiciatis officia veritatis dolorem. Sit nam voluptates, eaque dolor esse repellat magni repellendus perferendis laboriosam id nihil! Mollitia, ea?
                                    </p>
                                </div>
                            </>
                        </Container>

                        <Container style={{marginTop: "4rem", padding:"2rem"}}>
                            <>
                                <Title2 styles={{marginTop:"0"}}>Comentários</Title2>
                                <Form className="comment-form">
                                    <textarea name="comment" id="comment" rows={10} required></textarea>
                                    <button type="submit" className="btn">Comentar</button>
                                </Form>
                                <Separator />
                                <div className="comment-section">
                                    <div className="comment">
                                        <div className="comment-header">
                                            <img src="/logo192.png" alt="comment" className="comment-img" />
                                            <span>04/01/2023</span>
                                        </div>
                                        <div className="comment-body">
                                            <div>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum expedita vel nemo ab possimus maxime obcaecati eos non culpa omnis debitis hic enim perspiciatis cupiditate nostrum tempora sequi tenetur.</p>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum expedita vel nemo ab possimus maxime obcaecati eos non culpa omnis debitis hic enim perspiciatis cupiditate nostrum tempora sequi tenetur.</p>
                                                <div className="comment-footer">
                                                    <a href="/">Responder</a>
                                                    <button type="button" className="btn">👍</button>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="comment">
                                                            <div className="comment-header">
                                                                <img src="/logo192.png" alt="comment" className="comment-img" />
                                                                <span>04/01/2023</span>
                                                            </div>
                                                            <div className="comment-body">
                                                                <div>
                                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum expedita vel nemo ab possimus maxime obcaecati eos non culpa omnis debitis hic enim perspiciatis cupiditate nostrum tempora sequi tenetur.</p>
                                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum expedita vel nemo ab possimus maxime obcaecati eos non culpa omnis debitis hic enim perspiciatis cupiditate nostrum tempora sequi tenetur.</p>
                                                                    <div className="comment-footer">
                                                                        <a href="/">Responder</a>
                                                                        <button type="button" className="btn">👍</button>
                                                                    </div>
                                                                    <ul>
                                                                        
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </Container>
                    </main>
                </>
            </Main>
        </>
     );
}

export default GamePage;