import React from "react";
import "./Challenge.css";

const Challenge = props => {
  const { title, content, imageUrl } = props;
  return (
    <div className="challenge">
      <h2>Current Challenge</h2>
      <p></p>
    </div>
  );
};

export default Challenge;