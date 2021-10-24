/** calculates biggest connecting group */

/** increment the connecting count */
const incrementBiggestCount = (grid:number[][], row:number, col:number,player:number,finalBoard:number) => {
    let allPossibleDirections = [-1, 0, 1, 0, -1];
    let count = 1;
    grid[row][col] = 0;
    for(let i = 0; i < 4; i++) {
        let rw = row + allPossibleDirections[i];
        let cl = col + allPossibleDirections[i + 1];
        if(rw >= 0 && rw < finalBoard && cl >=0 && cl < finalBoard && grid[rw][cl] === player) {
            count += incrementBiggestCount(grid, rw, cl,player,finalBoard);
        }
    }
   return count;
 }

 /** gets biggest count of matching values */
 export const getBiggestCount = function (grid: number[][], player: number,finalBoard:number) {
    let bigCount = 0;
    for (let i = 0; i < finalBoard; i++) {
        for (let j = 0; j < finalBoard; j++) {
            if (grid[i][j] === player) {
                bigCount = Math.max(bigCount, incrementBiggestCount(grid, i, j, player, finalBoard));
            }
        }
    }
    return bigCount;
};


 /** initial board setup */
 export const getInitialBoardValues = (boardNumber:number) => {
    let allBoardValues : number[][] = [];
    Array.from({ length: boardNumber }).forEach((_, index) => {
        allBoardValues.push([]);
        Array.from({ length: boardNumber }).forEach(() => {
            allBoardValues[index].push(0);
        });
    });
    return allBoardValues;
 }