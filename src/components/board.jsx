import React from 'react';
import Square from './square';

function Board(props) {
  const renderSquare = i => <Square
   onClick={() => props.onClick(i)}
   value={props.squares[i]} />


  return (
    <div>
      <div className='board-row'>
        {
          renderSquare(0)
        }
        {
          renderSquare(1)
        }
        {
          renderSquare(2)
        }
      </div>
      <div className='board-row'>
      {
          renderSquare(3)
        }
        {
          renderSquare(4)
        }
        {
          renderSquare(5)
        }
      </div>
      <div className='board-row'>
      {
          renderSquare(6)
        }
        {
          renderSquare(7)
        }
        {
          renderSquare(8)
        }
      </div>
    </div>
  );
}

export default Board;