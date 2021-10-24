import './Board.css';
import { Box } from './Box';

type BoardProps = {
    gridSystem: number;
    clickHandler: (row: number, column: number) => void;
    boardValues: number[][];
};

/** gets complete board width */
const boardStyle = (gridSystem: number) => ({
    width: gridSystem * 50,
});

export const Board = (props: BoardProps) => {
    const { gridSystem, clickHandler, boardValues } = props;
    return (
        <div className="board" style={boardStyle(gridSystem)}>
            {[...boardValues].map((item, rowIndex) => {
                return (
                    <div className="row" key={`row${rowIndex}`}>
                        {[...item].map((playerValue, columnIndex) => {
                            return (
                                <Box clickHandler={()=>clickHandler(rowIndex,columnIndex)} columnIndex={columnIndex} playerValue={playerValue} />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
