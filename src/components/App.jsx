import React, { useState } from "react";


function App() {

const [headingText,setHeadingText] =useState("Hello");
const [isMouseOver, setMouseOver] = useState( false );

   function mouseOver(){
     setMouseOver(true);
   }
  function mouseOut(){
     setMouseOver(false);
  }
  function handleClick(){
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMouseOver ? "black":"white"}} 
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
