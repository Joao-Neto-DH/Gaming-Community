import { CSSProperties, ReactNode } from "react";
import { Form, Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Main from "../components/Main";
import Separator from "../components/Separator";
import Title2 from "../components/Title2";
import View from "../components/View";
import { useLoadGame } from "../hooks/useLoadGame";
import { useTitle } from "../hooks/useTitle";
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
    useTitle("Jogos");
    const { id } = useParams();
    const game   = useLoadGame(id);
    
    return ( 
        <>
            <div className="cover">
                <View src="/assets/img/gow.jpg" alt="God of war" />
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
                                <Form method="get" className="search-form" style={{marginBottom:"20px"}}>
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
                                        
                                        {new Array<ReactNode>(1).fill(<Game key={0}/>)}
                                    </div>
                                </div>
                            </>
                        </Container>
                    </aside>
                    <main style={{width:"70%",alignSelf:"flex-start", marginLeft:"auto", marginRight:"auto"}}>
                        <Container >
                            <>
                                <div className="game-imgs">
                                    <View key={0} src="/assets/img/gow.jpg" alt="gow" className="game-img" />
                                    <View key={1} src="/assets/img/fortnite.jpg" alt="gow" className="game-img" />
                                    <View key={2} src="/assets/img/mario.jpg" alt="gow" className="game-img" />
                                    {game.game?.screenshoots.map(img=><View key={img.image_path} src={img.image_path} alt={img.image_path} className="game-img"/>)}
                                </div>
                                {/* <Separator/> */}
                                <div className="details box not">
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
                                <Title2 styles={{marginTop:"0"}}>Comentário</Title2>
                                <Form className="comment-form">
                                    <textarea name="comment" id="comment" rows={10} required></textarea>
                                    <button type="submit" className="btn">Comentar</button>
                                </Form>
                                <Separator />
                                <div className="comment-section">
                                    { game.game?.comments.map(comment=><Comment key={comment.id} comment={comment} />) }
                                </div>
                            </>
                        </Container>
                    </main>
                </>
            </Main>
        </>
     );
}

function Game() {
    return ( 
        <Link to="/" className="game">
            <div className="game-img">
                <img src="/assets/img/gow.jpg" alt="gow" />
            </div>
            <div className="game-body">
                <strong className="game-title">God of War</strong>
                <span>Acção | Aventura</span>
            </div>
        </Link>
     );
}

function Comment({ comment }:any){    
    return (
        <div className="comment">
            <div className="comment-header" style={{alignItems:"center"}}>
                <img src="/logo192.png" alt="comment" className="comment-img" />
                <span>{ comment.User.name }</span>
            </div>
            <div className="comment-body">
                <div>
                    <pre>{comment.description}</pre>
                    <div className="comment-footer">
                        <Link to="/">Responder</Link>
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
                                            <Link to="/">Responder</Link>
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
    );
}

export default GamePage;