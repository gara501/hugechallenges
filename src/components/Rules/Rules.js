import React from "react";
import "./Rules.css";

const Rules = props => {
  console.log(props);
  const { user, signOut, error } = props;
  
  return (
    <div className="rules">
      <div className="container top-space">
        <h3>Rules</h3>
        <ol className="rules-list">
          <li>You will have 3 weeks to finish your code starting 1st day of each month.</li>
          <li>Each challenge must have a Github repo and a github page or codepen link, if the challenge is related with NodeJs, must have
            a free heroku page.
          </li>
          <li>Only finished challenges will have score. </li>
          <li>Framewors and tools are allowed only if the challenge is defined in that way.</li>
        </ol>
      </div>
    </div>
  );
};

export default Rules;