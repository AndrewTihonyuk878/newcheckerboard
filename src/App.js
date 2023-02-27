import { useState, useEffect } from 'react';
import './App.scss';
import BoardComponents from './components/Board';
import Form from './components/Form';
import { makeBoardFromString } from './utils';

import { START_BOARD_STR } from './components/Board';

function App() {
  const [value, setValue] = useState('')
  const [board, setBoard] = useState({})

  useEffect(() => {
    setValue(START_BOARD_STR);
    const startBoard = makeBoardFromString(START_BOARD_STR);
    setBoard(startBoard);
    console.log('app board', startBoard);
  }, []);

  const handleChange = ({ target }) => {
    const newBoard = makeBoardFromString(target.value);
    if (target.value.length < 64) {
      setValue(target.value);
    }
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <BoardComponents 
        value={value}
        setValue={setValue}
        board={board}
        setBoard={setBoard}
        />

      <Form 
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        board={board}
        setBoard={setBoard}/>
    </div>
  );
}

export default App;
