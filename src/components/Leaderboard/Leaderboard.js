import React from "react";
import "./Leaderboard.css";

const Leaderboard = props => {
  console.log(props);
  const { user, signOut, error } = props;
  
  return (
    <div className="leaderboard">
      <div className="container">
        <h1>Leaderboard</h1>
      </div>
    </div>
  );
};

export default Leaderboard;