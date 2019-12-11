import React from "react";


const NumberButton = ({number}) => {

  if (number < 1){
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <div className="numberButton">
          <button class="zero">{number}</button>   
          </div>
      </>
    );
  }else{
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <div className="numberButton">
          <button>{number}</button>   
          </div>
      </>
    );
  }
  
};

export default NumberButton;