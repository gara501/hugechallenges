import React from "react";
import "./Hero.css";

const Hero = props => {
  console.log(props);
  const { user, signOut, error } = props;
  
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-logo">
          <a href="http://www.hugeinc.com" target="_blank" rel="noopener">
          <svg className="h-logo__svg" viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg" title="Menu"><path className="h-logo__path" d="M35,24H28V51h7V41h6V51h7V24H41V34H35V24Z" transform="translate(-28 -24)"></path></svg>
          </a>
        </div>
        <h1>Code Challenges</h1>
      </div>
    </div>
  );
};

export default Hero;