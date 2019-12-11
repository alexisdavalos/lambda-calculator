import React from "react";


const NumberButton = ({number,setValue}) => {

  if (number < 1){
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <div className="numberButton">
          <button className="zero" onClick={() => setValue(number)}>{number}</button>   
          </div>
      </>
    );
  }else{
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <div className="numberButton">
          <button onClick={() => setValue(number)}>{number}</button>   
          </div>
      </>
    );
  }
  
};

export default NumberButton;