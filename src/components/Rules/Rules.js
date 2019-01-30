import React from "react";
import "./Rules.css";

const Rules = props => {
  console.log(props);
  const { user, signOut, error } = props;
  
  return (
    <div className="rules">
      <div className="container">
        <h1>Rules</h1>
      </div>
    </div>
  );
};

export default Rules;