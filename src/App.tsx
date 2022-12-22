import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Title1 from './components/Title1';

function App() {
  var [count, setCount] = useState(0);
  return (
    <>
      <Header/>
      <Carousel/>
      <Main>
        <Title1>Something</Title1>
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
