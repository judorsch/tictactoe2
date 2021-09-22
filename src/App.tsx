import React, { useState } from 'react';
import { TicButton } from './components/TicButton';
import './App.css';
import {Turn} from './components/Turn';

function App():JSX.Element {
  const [turn, setTurn] = useState<string>("Player O Turn");
  const [s1, setSymbol1] = useState<string>("");
  const [s2, setSymbol2] = useState<string>("");
  const [s3, setSymbol3] = useState<string>("");
  const [s4, setSymbol4] = useState<string>("");
  const [s5, setSymbol5] = useState<string>("");
  const [s6, setSymbol6] = useState<string>("");
  const [s7, setSymbol7] = useState<string>("");
  const [s8, setSymbol8] = useState<string>("");
  const [s9, setSymbol9] = useState<string>("");
  const [end, setEnd] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  function refreshPage(){
    window.location.reload();
  }
  const checkWin = () =>{
    if(s1 !== "" && (s1 === s2) && (s2 === s3)){
      return true;
    }
    else if(s4 !== "" && (s4 === s5) && (s5 === s6)){
      return true;
    }
    else if(s7 !== "" && (s7 === s8) && (s8 === s9)){
      return true;
    }
    else if(s1 !== "" && (s1 === s4) && (s4 === s7)){
      return true;
    }
    else if(s2 !== "" && (s2 === s5) && (s5 === s8)){
      return true;
    }
    else if(s3 !== "" && (s3 === s6) && (s6 === s9)){
      return true;
    }
    else if(s1 !== "" && (s1 === s5) && (s5 === s9)){
      return true;
    }
    else if(s3 !== "" && (s3 === s5) && (s5 === s7)){
      return true;
    }
    else{
      return false;
    }
  }
  if(checkWin() && (end === false)){
    setTurn("Winner!");
    setEnd(true);
  }
  else if((count === 9) && (end === false)){
    console.log(count);
    setTurn("It's a Tie!");
    setEnd(true);
  }
  return (
    <div className="App">
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <p>Click on any square below to begin playing! "O"s will be going first!</p>
      <Turn text={turn}></Turn>
      <div className="tic-spaces">
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol1} symbol={s1} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol2} symbol={s2} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol3} symbol={s3} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol4} symbol={s4} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol5} symbol={s5} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol6} symbol={s6} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol7} symbol={s7} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol8} symbol={s8} end = {end} incr = {setCount} turns = {count}></TicButton>
        <TicButton change={setTurn} textTitle={turn} symbolC={setSymbol9} symbol={s9} end = {end} incr = {setCount} turns = {count}></TicButton>
      </div>
      <div>
        <button id="refreshBut" onClick={refreshPage}>Start Over!</button>
      </div>
    </div>

  );
}

export default App;
