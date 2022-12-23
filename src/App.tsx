import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Title1 from './components/Title1';
import Container from './components/Container';
import Ad from './components/Ad';
import Separator from './components/Separator';
import GameCard from './components/GameCard';
import Title2 from './components/Title2';
import Streammer from './components/Streammer';

function App() {
  var [count, setCount] = useState(0);

  const styleContainer: React.CSSProperties = {
    width: "90%", 
    marginLeft:"auto", 
    marginRight:"auto", 
    borderRadius:"8px"
  };

  return (
    <>
      <Header/>
      <Carousel/>
      <Main>
        <>
          <main style={{width:"100%"}}>
            <Container style={styleContainer}>
              <>
                <Title1>Jogo Mais Falado Na Comunidade</Title1>
                <Ad></Ad>
                <Separator/>
                <GameCard/>
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
      <p>Count {count}</p>
      <button onClick={()=>{
        setCount(i => ++i)
      }}>add</button>
    </>
  );
}

export default App;
