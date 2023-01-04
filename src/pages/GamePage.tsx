import Container from "../components/Container";
import Main from "../components/Main";
import "./GamePage.css";

function GamePage() {
    return ( 
        <>
            <div className="cover">
                <img src="/assets/img/gow.jpg" alt="God of war" />
            </div>
            <Main>
                <>
                    <Container style={{position:"sticky",top:0}}>
                        <span>olas</span>
                    </Container>
                    <Container>
                        <span>b</span>
                    </Container>
                </>
            </Main>
        </>
     );
}

export default GamePage;