type BoxProps = {
    clickHandler: any;
    columnIndex: number;
    playerValue: number;
};

export const Box = (props: BoxProps) => {
    const { clickHandler, columnIndex, playerValue } = props;
    return (
        <div
            onClick={clickHandler}
            className={`column column${playerValue}`}
            key={`colum${columnIndex}`}
        >
            {playerValue}
        </div>
    );
};
