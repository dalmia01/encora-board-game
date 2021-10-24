type BoardProps = {
    gridSystem: number;
    clickHandler: (row: number, column: number) => void;
    boardValues: number[][];
};

const boardStyle = (gridSystem: number) => ({
    width: gridSystem * 80,
});

export const Board = (props: BoardProps) => {
    const { gridSystem, clickHandler, boardValues } = props;
    return (
        <div className="board" style={boardStyle(gridSystem)}>
            {[...boardValues].map((item, index) => {
                return (
                    <div className="row" key={`row${index}`}>
                        {[...item].map((innerItem, innerIndex) => {
                            return (
                                <div
                                    onClick={() =>
                                        clickHandler(index, innerIndex)
                                    }
                                    className={`column column${innerItem}`}
                                    key={`colum${innerIndex}`}
                                >
                                    {innerItem}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
