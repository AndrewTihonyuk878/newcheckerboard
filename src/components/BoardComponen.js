import React from 'react';
import { useEffect, useState } from "react";
import CellComponents from './CellComponents';



export const START_BOARD_STR =    
    "W..w.w....w......W.b.W.............B..........b....b....b.......";
    // .w.w.w.ww.w.w.w..w.w.w.w................b.b.b.b..b.b.b.bb.b.b.b

const BoardComponents = ({handleChange, value, setValue, board, setBoard}) => {

    return (
      <>
          {Object.values(board).map((row, index) => (
            <CellComponents
              handleChange={handleChange}
              value={value}
              setValue={setValue}
              setBoard={setBoard}
              board={board} 
              key={index} 
              rowBoardIndex={index} 
              rowBoard={Object.values(row)} />
        ))}
      </>

    );
};

export default BoardComponents;