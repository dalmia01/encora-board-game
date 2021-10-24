import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Title } from './Components/Title';

function App() {

  const [boardNumber,setBoardNumber] = useState(3);
  const [finalBoard,setFinalBoard] = useState(3);

  const changeBoardNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(isNaN(Number(e.target.value))) return;
    setBoardNumber(Number(e.target.value));
  }

  const changeBoardHandler = () => {
    if(boardNumber < 2 || boardNumber > 8) return ;
    setFinalBoard(boardNumber);
  }

  const resetHandler = () => {
    setBoardNumber(3);
    setFinalBoard(3);
}

  return (
    <main className="App">
      <Title title={'Encora Board Game'} />
      <Input value={boardNumber} changeValue={changeBoardNumber} placeholder={'Select Board Type - (2- 8)'}  />
      <Button text={'Set Board'} clickHandler={changeBoardHandler} disabled={boardNumber < 2 || boardNumber > 8} />
      <div><Button text={'Reset'} clickHandler={resetHandler} /></div> 
    </main>
  );
}

export default App;
