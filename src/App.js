import { useState } from 'react';

var checkpieces =  [
["", "c", "", "c", "", "c", "", "c"],
["c", "", "c", "", "c", "", "c", ""],
["", "c", "", "c", "", "c", "", "c"],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["c", "", "c", "", "c", "", "c", ""],
["", "c", "", "c", "", "c", "", "c"],
["c", "", "c", "", "c", "", "c", ""],
  /*fix starting position now*/
  ]

function Square({color,value}) {

  function handleClick(){

 if (value == "") {
  console.log("empty space!!!")
 }
 if (value == "c"){
  console.log("PIIEECCEEEE")
  console.log(value)
 } 
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
<div className="hue"></div>

export default function Board() {
  const [squares, setSquare] = useState(checkpieces);
  return (
    <>
   
      <div className= "board-row">
      <Square value={squares[0][0]}  color = "square"/>
      <Square  value={squares[0][1]} color="squareB"/>
      <Square  value={squares[0][2]} color = "square"/>
      <Square  value={squares[0][3]} color = "squareB"/>
      <Square  value={squares[0][4]} color = "square"/>
      <Square  value={squares[0][5]} color = "squareB"/>
      <Square  value={squares[0][6]} color = "square"/>
      <Square  value={squares[0][7]} color = "squareB"/>
      
      
      </div>
      
      <div className= "board-row">
      <Square value={squares[1][0]} color = "squareB"/>
      <Square value={squares[1][1]} color = "square"/>
      <Square value={squares[1][2]} color = "squareB"/>
      <Square value={squares[1][3]} color = "square"/>
      <Square value={squares[1][4]} color = "squareB"/>
      <Square value={squares[1][5]} color = "square"/>
      <Square value={squares[1][6]} color = "squareB"/>
      <Square value={squares[1][7]} color = "square"/>
      
      
      </div>
         
      <div className= "board-row">
      <Square  value={squares[2][0]}  color = "square"/>
      <Square  value={squares[2][1]} color="squareB"/>
      <Square  value={squares[2][2]} color = "square"/>
      <Square  value={squares[2][3]} color = "squareB"/>
      <Square  value={squares[2][4]} color = "square"/>
      <Square  value={squares[2][5]} color = "squareB"/>
      <Square  value={squares[2][6]} color = "square"/>
      <Square  value={squares[2][7]} color = "squareB"/>
      
      </div>
      
        <div className= "board-row">
      <Square value={squares[3][0]}  color = "squareB"/>
      <Square  value={squares[3][1]} color="square"/>
      <Square  value={squares[3][2]} color = "squareB"/>
      <Square  value={squares[3][3]} color = "square"/>
      <Square  value={squares[3][4]} color = "squareB"/>
      <Square  value={squares[3][5]} color = "square"/>
      <Square  value={squares[3][6]} color = "squareB"/>
      <Square  value={squares[3][7]} color = "square"/>
      
      </div>
         
        <div className= "board-row">
      <Square value={squares[4][0]}  color = "square"/>
      <Square  value={squares[4][1]} color="squareB"/>
      <Square  value={squares[4][2]} color = "square"/>
      <Square  value={squares[4][3]} color = "squareB"/>
      <Square  value={squares[4][4]} color = "square"/>
      <Square  value={squares[4][5]} color = "squareB"/>
      <Square  value={squares[4][6]} color = "square"/>
      <Square  value={squares[4][7]} color = "squareB"/>
      
      
      </div>
      
     <div className= "board-row">
      <Square value={squares[5][0]}  color = "squareB"/>
      <Square  value={squares[5][1]} color="square"/>
      <Square  value={squares[5][2]} color = "squareB"/>
      <Square  value={squares[5][3]} color = "square"/>
      <Square  value={squares[5][4]} color = "squareB"/>
      <Square  value={squares[5][5]} color = "square"/>
      <Square  value={squares[5][6]} color = "squareB"/>
      <Square  value={squares[5][7]} color = "square"/>
      
      
      </div>
         
      <div className= "board-row">
      <Square value={squares[6][0]}  color = "square"/>
      <Square  value={squares[6][1]} color="squareB"/>
      <Square  value={squares[6][2]} color = "square"/>
      <Square  value={squares[6][3]} color = "squareB"/>
      <Square  value={squares[6][4]} color = "square"/>
      <Square  value={squares[6][5]} color = "squareB"/>
      <Square  value={squares[6][6]} color = "square"/>
      <Square  value={squares[6][7]} color = "squareB"/>
      
      
      </div>
      
        <div className= "board-row">
      <Square value={squares[7][0]}  color = "squareB"/>
      <Square  value={squares[7][1]} color="square"/>
      <Square  value={squares[7][2]} color = "squareB"/>
      <Square  value={squares[7][3]} color = "square"/>
      <Square  value={squares[7][4]} color = "squareB"/>
      <Square  value={squares[7][5]} color = "square"/>
      <Square  value={squares[7][6]} color = "squareB"/>
      <Square  value={squares[7][7]} color = "square"/>
      
      </div>
    </>


  );
}
