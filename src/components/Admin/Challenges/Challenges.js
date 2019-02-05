import React from "react";
import "./Challenges.css";

const Challenges = props => {
  const { title, content, imageUrl } = props;
  return (
    <div className="challenge">
      <h2>Current Challenge</h2>
      <p></p>
    </div>
  );
};

export default Challenges;