import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState({operators});
  // console.log(Object.values(operatorState.operators));
  
  
  return (
    
    <div className="operatorButtonContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

            Object.values(operatorState.operators).map((item, index) => (
              <OperatorButton key = {index} operator={item} setOperator={props.setOperator} numArr={props.numArr} value={props.value}setValue={props.setValue}/>
            )) 
      }
       
       
       
    </div>
  );
};
export default Operators;
