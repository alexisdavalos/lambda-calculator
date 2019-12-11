import React from "react";

const OperatorButton = ({operator,setOperator}) => {
 
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="operatorButton">
            <button onClick={() => setOperator(operator.value)}>{operator.char}</button>
        </div>
    </>
  );
};

export default OperatorButton;
