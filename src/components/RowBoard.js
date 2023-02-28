import CheckerWhite from '../assets/w.png';
import CheckerWhiteK from '../assets/wq.png';
import CheckerBlack from '../assets/b.png';
import CheckerBlackK from '../assets/bq.png';
import { makeStringFromBoard } from '../utils';

const RowBoard = ({ setValue, setBoard, board, rowBoardArr, rowBoardIndex }) => {

    function returnFigure(cell) {
        if (cell === '.') return false;
        if (cell === 'w') return <img src={CheckerWhite}  />
        if (cell === 'W') return <img src={CheckerWhiteK}  />
        if (cell === 'b') return <img src={CheckerBlack}  />
        if (cell === 'B') return <img src={CheckerBlackK}  />
    }

    const dragStartHandler = (e, fromSymbol, columnIdx, rowBoardIndex) => {
        e.dataTransfer.setData('activeCellX', [fromSymbol, columnIdx, rowBoardIndex]);
        e.target.style.opacity = '.8'
    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dragEndHandler(e) {
        e.target.style.opacity = '1'
    }

    const dropHandler = (e, targetSymbol, columnIdx, rowBoardIndex) =>  {
        e.preventDefault()
        const [activeSymbol, fromX, fromY] = e.dataTransfer.getData('activeCellX').split(',');

    if (targetSymbol === '.') {
        const newBoard = { ...board };

        newBoard[rowBoardIndex][columnIdx] = activeSymbol;
        newBoard[fromY][fromX] = '.';

        setBoard(newBoard);
        
        const newStr = makeStringFromBoard(newBoard);
        setValue(newStr);
    }
}

    return (
        <div className='cell_wrapper'>
            {rowBoardArr.map((symbol, columnIdx) => {
            return ( 
            <div
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, symbol, columnIdx, rowBoardIndex)}
                onDragOver={(e) => dragOverHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, symbol, columnIdx, rowBoardIndex)}
                
                className={['cell', ((rowBoardIndex + columnIdx) % 2 !== 0) ? 'black' : 'white'].join(' ')}
                key={`${columnIdx}-${rowBoardIndex}`}
            >
                {returnFigure(symbol)}     
            </div>
            );
            })}

        </div>
    );
};

export default RowBoard;