import React from "react";

const OperatorButton = (props) => {
  const run = () =>{
      if(props.operator.value === "+"){
          props.setValue(props.value + props.numArr[1])
      }
  }
 if(props.operator.value === "="){
  return (
   
      <div className="operatorButton">
            <button onClick={run}>{props.operator.char}</button>
        </div>
   
  );
 }else{
  return (
   
    <div className="operatorButton">
          <button onClick={() => props.setOperator(props.operator.value)}>{props.operator.char}</button>
      </div>
 
);
 }
 
};

export default OperatorButton;
