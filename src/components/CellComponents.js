import React, { FC, useState } from 'react';
import CheckerWhite from '../assets/w.png';
import CheckerWhiteK from '../assets/wq.png';
import CheckerBlack from '../assets/b.png';
import CheckerBlackK from '../assets/bq.png';
import { makeStringFromBoard } from '../utils';
import { findConfigFile } from 'typescript';


const CellComponents = ({handleChange, value, setValue, setBoard, board, rowBoard, rowBoardIndex }) => {

    const [symbol, setSymbol] = useState('')

    function returnFigure(cell) {
        if (cell === '.') return ''
        if (cell === 'w') return <img src={CheckerWhite}  />
        if (cell === 'W') return <img src={CheckerWhiteK}  />
        if (cell === 'b') return <img src={CheckerBlack}  />
        if (cell === 'B') return <img src={CheckerBlackK}  />
    }

    function dragStartHandler(e, cell) {
        console.log('DRAG', cell)
        setSymbol(cell)
        e.target.style.opacity = '.8'
    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dragEndHandler(e) {
        e.target.style.opacity = '1'
    }

    function dropHandler(e, target)  {
        e.preventDefault()
        console.log('DROP', target)
        
    }

    const handleClick = () => {
        const coordFrom = [0, 0];
        const coordTarget = [7, 7];
    
        const [fromX, fromY] = coordFrom;
        const [targetX, targetY] = coordTarget;
    
        const boardSymbol = board[fromX][fromY];
    
        const newBoard = { ...board };
    
        newBoard[targetX][targetY] = boardSymbol;
        newBoard[fromX][fromY] = ".";
    
        setBoard(newBoard);
    
        const newStr = makeStringFromBoard(newBoard);
    
        setValue(newStr);
      };

    return (
        <div className='cell_wrapper'>
            {rowBoard.map((cell, index) => {
            return ( 
            <div
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, cell)}
                onDragOver={(e) => dragOverHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, cell)}
                onClick={(e) => handleClick(cell)}
                className={['cell', ((rowBoardIndex + index) % 2 !== 0) ? 'black' : 'white'].join(' ')}
                key={`${index}-${rowBoardIndex}`}
            >
                {returnFigure(cell)}     
            </div>
            );
            })}
        </div>
    );
};

export default CellComponents;