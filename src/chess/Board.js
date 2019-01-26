import React from 'react';

import Knight from './Knight';

import BoardSquare from './BoardSquare';

import {getByPosition} from './Game';

  function renderSquare(i, knightStorage) {

    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i}
          style={{ width: '12.5%', height: '12.5%' }} >
        <BoardSquare id={i} x={x} y={y} actualKnight={knightStorage.actualKnight} >
          { renderPiece(x, y, knightStorage.knightPosition )}
        </BoardSquare>
      </div>
    );
  }

  function renderPiece(x, y, knightPosition) {

    for(let j = 0; j<knightPosition.length; j++)
    {
      
      let getBP = getByPosition(x, y);
      if(getBP !== -1)
      {
        console.log('true');
        return <Knight id={getBP} />
      }
    }

  }
  
  export default function Board(knightStorage)
  {

    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push( renderSquare(i, knightStorage) );
    }      
  
    return (
        
      <div style={{
        width: '20cm',
        height: '20cm',
        display: 'flex',
        flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
          
        );
        
  }