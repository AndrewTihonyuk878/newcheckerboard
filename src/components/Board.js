import React from 'react';
import RowBoard from './RowBoard';



export const START_BOARD_STR =    
    "W..w.w....w......W.b.W.............B..........b....b....b.......";
    // ".w.w.w.ww.w.w.w..w.w.w.w................b.b.b.b..b.b.b.bb.b.b.b"
const Board = ({handleChange, value, setValue, board, setBoard}) => {

  return (
    <>
        {Object.values(board).map((rowBoardObj, indexObj) => (
          <RowBoard
            handleChange={handleChange}
            value={value}
            setValue={setValue}
            setBoard={setBoard}
            board={board} 
            key={indexObj} 
            rowBoardIndex={indexObj} 
            rowBoardArr={Object.values(rowBoardObj)} />
      ))}
    </>
  );
};

export default Board;