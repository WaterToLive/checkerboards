import { useState } from 'react';

var checkpieces =  [
  ['','n','','b','','b','','b'],
  ['','b','','b','','b','','b'],
  ['','b','','b','','b','','b'],
  ['','b','','b','','b','','b'],
  ['','b','','b','','b','','b'],
  ['','b','','b','','b','','b'],
  ['','b','','b','','b','','b'],
  ['','b','','b','','a','','d'],
  /*fix starting position now*/
  ]

function Square({color,value}) {

  function handleClick(){
 //   setValue('X')
  }
  return (
  <button 
    className={color}
    onClick={handleClick}
  >
    {value}
  </button>
  );
}


export default function Board() {
  const [squares, setSquare] = useState(checkpieces);
  return (
    <>
   
      <div className= "board-row">
      <Square value={squares[0][0]}  color = "square"/>
      <Square  value={squares[0][1]} color="squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      
      
      </div>
      
      <div className= "board-row">
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      
      
      </div>
         
      <div className= "board-row">
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      
      
      </div>
      
      <div className= "board-row">
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      
      
      </div>
         
      <div className= "board-row">
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      
      
      </div>
      
      <div className= "board-row">
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      
      
      </div>
         
      <div className= "board-row">
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      
      
      </div>
      
      <div className= "board-row">
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      <Square  color = "squareB"/>
      <Square  color = "square"/>
      
      
      </div>
    </>


  );
}
