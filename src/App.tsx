import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Title1 from './components/Title1';
import Container from './components/Container';
import Ad from './components/Ad';

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
                <Title1 align="center">Jogos Mais Procurados</Title1>
                <Ad></Ad>
              </>
            </Container>
          </main>
          <aside>
            <Container style={styleContainer}>
              <>
                <Title1>Something</Title1>
              </>
            </Container>
          </aside>
        </>
      </Main>
      <p>Count {count}</p>
      <button onClick={()=>{
        setCount(i => ++i)
      }}>add</button>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
