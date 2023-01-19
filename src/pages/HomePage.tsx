import Ad from "../components/Ad";
import Carousel from "../components/Carousel";
import ChatRoom from "../components/ChatRoom";
import Container from "../components/Container";
import GameCard from "../components/GameCard";
import GameCardLoading from "../components/GameCardLoading";
import Main from "../components/Main";
import Separator from "../components/Separator";
import Streammer from "../components/Streammer";
import Title1 from "../components/Title1";
import Title2 from "../components/Title2";
import { useLoadGame } from "../hooks/useLoadGames";
import { useTitle } from "../hooks/useTitle";

const styleContainer: React.CSSProperties = {
  width: "90%", 
  marginLeft:"auto", 
  marginRight:"auto", 
  borderRadius:"8px"
};

function HomePage() {
    useTitle("");
    const { response, nextPage } = useLoadGame();

    return ( 
        <>
            <Carousel/>
            <Main>
            <>
                <main style={{width:"100%"}}>
                <Container style={styleContainer}>
                    <>
                        <Title1>Jogo Mais Falado Na Comunidade</Title1>
                        <Ad></Ad>
                        <Separator/>
                        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem", alignItems:"flex-start"}}>
                            {
                                response.games?.map(game=><GameCard game={game} key={game.id}/>)
                            }
                            {
                                response.loading &&
                                <>
                                    <GameCardLoading/>
                                    <GameCardLoading/>
                                    <GameCardLoading/>
                                </>
                            }
                            <button 
                                onClick={()=>{                   
                                    nextPage();
                                }}
                                style={{
                                    gridColumn: "1/5"
                                }}
                            >contar</button>
                        </div>
                    </>
                </Container>
                </main>
                <aside style={{width:"16.875rem"}}>
                <Container style={styleContainer}>
                    <div style={{padding:"0.5rem"}}>
                    <Title2 styles={{fontSize:"1.125rem", marginTop:"0", paddingLeft:"0",paddingTop:"0"}}>Streammers Parceiros</Title2>
                    <Streammer status="offline"/>
                    <Streammer status="online"/>
                    <Streammer status="offline"/>
                    <Streammer status="online"/>
                    <Streammer status="online"/>
                    <Streammer status="offline"/>
                    </div>
                </Container>
                </aside>
            </>
            </Main>
            
            <ChatRoom/>
        </>
     );
}

export default HomePage;