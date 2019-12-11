import React from "react";

const Display = (props) => {
  if (props.numArr.length > 0 && props.operator !== null ){
    return (
      <div className="display">
        {/* Display any props data here */}
        {`${props.value} ${props.operator} ${props.numArr[props.numArr.length -1]}`}
        </div>)
  }
  if(props.operator !== null){
    return (
      <div className="display">
        {/* Display any props data here */}
        {`${props.value} ${props.operator}`}
        </div>)
  }else{
    return (
      <div className="display">
        {/* Display any props data here */}
        {`${props.value}`}
        </div>)
  }

};
export default Display;