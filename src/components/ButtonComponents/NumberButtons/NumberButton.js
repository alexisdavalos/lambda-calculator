import React from "react";


const NumberButton = (props) => {
 
  const numberClick = () =>{
    props.setValue(props.number);
    props.numArr.push(props.number);
    
    console.log(props.numArr)
  }
  //toggles className of zero
  if (props.number < 1){
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <div className="numberButton">
          <button className="zero" onClick={numberClick}>{props.number}</button>   
          </div>
      </>
    );
  }else{
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <div className="numberButton">
          <button onClick={numberClick}>{props.number}</button>   
          </div>
      </>
    );
  }
  
};

export default NumberButton;