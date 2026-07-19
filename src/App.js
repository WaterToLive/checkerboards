import { useState } from 'react';

function Square({color}) {
const [value, setValue] = useState(null);
  function handleClick(){
    setValue('X')
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
  return (
    <>
   
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
