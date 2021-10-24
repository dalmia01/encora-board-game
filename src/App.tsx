import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Title } from "./Components/Title";
import { getBiggestCount, getInitialBoardValues } from "./utils/utils";

function App() {

    /** game state */
    const [boardNumber, setBoardNumber] = useState(3);
    const [finalBoard, setFinalBoard] = useState(3);
    const [playerValues, setPlayerValues] = useState({
        player1: 0,
        player2: 0,
    });
    const [winner, setWinner] = useState("");
    const [boardValues, setBoardValues] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
    const [count, setCount] = useState(0);
    const [player, setPlayer] = useState(1);

    /** change handler for board number state */
    const changeBoardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) return;
        setBoardNumber(Number(e.target.value));
    };

    /** set board state */
    const changeBoardHandler = () => {
        if (boardNumber < 2 || boardNumber > 8) return;
        setFinalBoard(boardNumber);        
        let allBoardValues: number[][] = getInitialBoardValues(boardNumber);        
        setBoardValues(allBoardValues);        
        setPlayer(1);
        setPlayerValues({ player1: 0, player2: 0 });
        setWinner("");
        setCount(0);
    };

    /** reset the game state */
    const resetHandler = () => {
        setBoardNumber(3);
        setFinalBoard(3);
        setPlayer(1);
        setBoardValues([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
        setPlayerValues({ player1: 0, player2: 0 });
        setWinner("");
        setCount(0);
    };
    
    /** change player state - chance */
    const fillColorHandler = (row: number, column: number) => {
        if (boardValues[row][column] === 1 || boardValues[row][column] === 2)
            return;
        let newBoardValues = [...boardValues];
        newBoardValues[row][column] = player;
        setBoardValues(newBoardValues);
        let newCount = count + 1;
        setCount(newCount);

        const maxPlayer = getBiggestCount(
            JSON.parse(JSON.stringify(newBoardValues)),
            player,finalBoard
        );
        let newSetPlayerValues = { ...playerValues };
        switch (player) {
            case 1:
                newSetPlayerValues = { ...playerValues, player1: maxPlayer };
                setPlayerValues(newSetPlayerValues);
                setPlayer(2);
                break;
            case 2:
                newSetPlayerValues = { ...playerValues, player2: maxPlayer };
                setPlayerValues(newSetPlayerValues);
                setPlayer(1);
                break;
            default:
                setPlayer(1);
                break;
        }

        /** set game end state */
        if (newCount === boardNumber * boardNumber) {
            const { player1, player2 } = newSetPlayerValues;
            switch (true) {
                case player1 > player2:
                    setWinner("Player 1");
                    break;
                case player1 < player2:
                    setWinner("Player 2");
                    break;
                default:
                    setWinner("Tie between Player 1 & Player 2");
            }
        }
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
            {winner && <div className='mg-10'>winner : {winner}</div>}
            <Board
                gridSystem={finalBoard}
                clickHandler={fillColorHandler}
                boardValues={boardValues}
            />
            <div className="player-values">
                <div>Player 1 : {playerValues.player1} </div>
                <div>Player 2 : {playerValues.player2} </div>
            </div>
            <div className='mg-10'>
                <Button text={"Reset"} clickHandler={resetHandler} />
            </div>
        </main>
    );
}

export default App;
