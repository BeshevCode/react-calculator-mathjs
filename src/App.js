import React, { useState } from 'react';
import { evaluate } from "mathjs";
import './Style.css';

function App() {
  const [display, setDisplay] = useState("");
  const operands = ["7","8","9","C","4","5","6","-","1","2","3","+","/","0","*","="];

  const onClick = (digit) => {
      if(digit === "="){
        setDisplay(evaluate)
      } else if(digit === "C"){
          setDisplay("")
      } else {
          setDisplay(display + digit)
      }
  }

  return (
    <div className="App">
      <h1>{display}</h1>
      <div className="buttonWrap">{operands.map((button, index) => {
            return (
              <button className={`button-${button}`} onClick={() => onClick(button)} key={index}>{button}</button>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;