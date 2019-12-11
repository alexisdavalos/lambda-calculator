import React from "react";

const SpecialButton = ({char}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="specialButton">
            <button>{char}</button>
        </div>
    </>
  );
};
export default SpecialButton;
