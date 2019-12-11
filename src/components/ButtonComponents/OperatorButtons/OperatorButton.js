import React from "react";

const OperatorButton = ({operator}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="operatorButton">
            <button>{operator.char}</button>
        </div>
    </>
  );
};

export default OperatorButton;
