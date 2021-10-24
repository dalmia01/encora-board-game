import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Title } from "./Components/Title";

function App() {
    const [boardNumber, setBoardNumber] = useState(3);
    const [finalBoard, setFinalBoard] = useState(3);
    const [playerValues, setPlayerValues] = useState({
        player1: 0,
        player2: 0,
    });
    const [winner, setWinner] = useState(null);
    const [boardValues, setBoardValues] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
    const [count, setCount] = useState(0);
    const [player, setPlayer] = useState(1);

    const changeBoardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) return;
        setBoardNumber(Number(e.target.value));
    };

    const changeBoardHandler = () => {
        if (boardNumber < 2 || boardNumber > 8) return;
        setFinalBoard(boardNumber);
        let allBoardValues : number[][] = [];
        Array.from({ length: boardNumber }).forEach((_, index) => {
            allBoardValues.push([]);
            Array.from({ length: boardNumber }).forEach(() => {
                allBoardValues[index].push(0);
            });
        });
        setBoardValues(allBoardValues);
    };

    const resetHandler = () => {
        setBoardNumber(3);
        setFinalBoard(3);
        setPlayer(1);
        setBoardValues([[0,0,0],[0,0,0],[0,0,0]]);
        setPlayerValues({player1 : 0 ,player2 : 0});
        setWinner(null);
        setCount(0);
    };

    const fillColorHandler = (row: number, column: number) => {
        if (boardValues[row][column] === 1 || boardValues[row][column] === 2)
            return;
        let newBoardValues = [...boardValues];
        newBoardValues[row][column] = player;
        setBoardValues(newBoardValues);
        let newCount = count + 1;
        setCount(newCount);
    };

    return (
        <main className="App">
            <Title title={"Encora Board Game"} />
            <Input
                value={boardNumber}
                changeValue={changeBoardNumber}
                placeholder={"Select Board Type - (2- 8)"}
            />
            <Button
                text={"Set Board"}
                clickHandler={changeBoardHandler}
                disabled={boardNumber < 2 || boardNumber > 8}
            />
            <Board
                gridSystem={finalBoard}
                clickHandler={fillColorHandler}
                boardValues={boardValues}
            />
            <div className="player-values">
                <div>Player 1 : {playerValues.player1} </div>
                <div>Player 2 : {playerValues.player2} </div>
                {winner && <div>winner : {winner}</div>}
            </div>
            <div>
                <Button text={"Reset"} clickHandler={resetHandler} />
            </div>
        </main>
    );
}

export default App;
