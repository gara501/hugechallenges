import React from "react";
import {hot} from "react-hot-loader";
import "./Header.css";

const Header = props => {
  const { user, signOut } = props;
  const imageUrl = props.user.photoURL;
  const userName = props.user.displayName;
  console.log(imageUrl);
  return (
    <div className="header">
      <div className="header-section header-left">
        <a href="http://www.hugeinc.com" target="_blank" rel="noopener">
          <svg className="h-logo__svg" viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg" title="Menu"><path className="h-logo__path" d="M35,24H28V51h7V41h6V51h7V24H41V34H35V24Z" transform="translate(-28 -24)"></path></svg>
        </a>
      </div>
      <div className="header-section header-center">
        <div className="header-user-profile">
          <p className="header-user-profile-item">{userName}</p>
          <img className="header-user-profile-item" src={imageUrl} alt={userName}/>
        </div>
      </div>
      <div className="header-section header-right">
        <button className="header-user-profile-item button black" onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default hot(module)(Header);