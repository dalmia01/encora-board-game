import React, { useState } from 'react';
import './App.css';
import { Input } from './Components/Input';
import { Title } from './Components/Title';

function App() {

  const [boardNumber,setBoardNumber] = useState(3);

  const changeBoardNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(isNaN(Number(e.target.value))) return;
    setBoardNumber(Number(e.target.value));
}

  return (
    <div className="App">
      <Title title={'Encora Board Game'} />
      <Input value={boardNumber} changeValue={changeBoardNumber} placeholder={'Select Board Type - (2- 8)'}  />
    </div>
  );
}

export default App;
