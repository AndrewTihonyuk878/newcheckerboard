import CheckerWhite from '../assets/w.png';
import CheckerWhiteK from '../assets/wq.png';
import CheckerBlack from '../assets/b.png';
import CheckerBlackK from '../assets/bq.png';
import { makeStringFromBoard } from '../utils';

const RowBoard = ({ setValue, setBoard, board, rowBoard, rowBoardIndex }) => {

    function returnFigure(cell) {
        if (cell === '.') return ''
        if (cell === 'w') return <img src={CheckerWhite}  />
        if (cell === 'W') return <img src={CheckerWhiteK}  />
        if (cell === 'b') return <img src={CheckerBlack}  />
        if (cell === 'B') return <img src={CheckerBlackK}  />
    }

    const dragStartHandler = (e, symbol, columnIdx, rowBoardIndex) => {
        console.log('DRAG', symbol, columnIdx, rowBoardIndex)
        console.log('drag board', board)
        e.dataTransfer.setData('activeCellX', [symbol, columnIdx, rowBoardIndex]);
        e.target.style.opacity = '.8'

    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dragEndHandler(e) {
        e.target.style.opacity = '1'
    }

    const dropHandler = (e, symbol, columnIdx, rowBoardIndex) =>  {
        e.preventDefault()
        console.log(e.dataTransfer.getData('activeCellX'));
        const [activeSymbol, fromX, fromY] = e.dataTransfer.getData('activeCellX').split(',');
        console.log("e.dataTransfer.getData('activeCellX')",  e.dataTransfer.getData('activeCellX'))
        console.log(activeSymbol);
        console.log(fromX);
        console.log(fromY);

        
    if (symbol === '.') {
        const newBoard = { ...board };

        newBoard[rowBoardIndex][columnIdx] = activeSymbol;
        newBoard[fromY][fromX] = '.';

        setBoard(newBoard);
        console.log('drop board', newBoard)
        
        const newStr = makeStringFromBoard(newBoard);
        setValue(newStr);
        
    }}

    return (
        <div className='cell_wrapper'>
            {rowBoard.map((symbol, columnIdx) => {
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