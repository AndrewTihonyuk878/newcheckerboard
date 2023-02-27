export function makeBoardFromString(str) {
    const board = {};
  
    const strArr = str.split('');
  
    for (let i = 0; i < 8; i++) {
        const row = {};
  
        for (let j = 0; j < 8; j++) {
            row[j] = strArr.shift();
        }
  
        board[i] = row;
    }
  
    return board;
  }
  
export function makeStringFromBoard(board) {
      return Object.values(board).reduce((totalStr, rowArr) => {
        let rowStr = "";
    
        Object.values(rowArr).forEach((s) => (rowStr += s));
    
        totalStr += rowStr;
    
        return totalStr;
      }, "");
}