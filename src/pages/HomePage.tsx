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
import { useLoadGame } from "../hooks/useLoadGame";
import { useTitle } from "../hooks/useTitle";

const styleContainer: React.CSSProperties = {
  width: "90%", 
  marginLeft:"auto", 
  marginRight:"auto", 
  borderRadius:"8px"
};

// type Game = {
//     type: "SUCCESS" | "ERROR" | "LOADING",
//     games: GameResponse[],
//     error?: ErrorResponse
// }

// type Action = {type: "SUCCESS" | "ERROR" | "LOADING", response: any}

// function reducer(state: Game, action: Action): Game {    
//     switch (action.type) {
//         case "SUCCESS":
//             return {
//                         type: "SUCCESS",
//                         games: [...state.games, ...action.response.datas],
//                         error: undefined
//                     };

//         case "ERROR":
//             return {
//                         type: "ERROR",
//                         games: state.games,
//                         error: action.response
//                     };
    
//         default:
//             return state;
//     }
// }

// const initState: Game = {type: "LOADING", games: [], error: undefined};

function HomePage() {
    useTitle("");
    let page = 1;
    const { response, setPage } = useLoadGame(page);
    console.log(response);

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
                                response.games?.map(game=><GameCard key={game.id}/>)
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
                                    // dispatch({ type: "LOADING", response: {datas: undefined}});                    
                                    setPage(page + 1);
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