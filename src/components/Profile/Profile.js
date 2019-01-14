import React from "react";
import {hot} from "react-hot-loader";
import "./Profile.css";

const Profile = props => {
  const { user } = props;
  const imageUrl = props.user.photoURL;
  const userName = props.user.displayName;

  return (
    <div className="profile">
     <ul className="profile--data">
       <li>
          <p className="profile-user-name">{userName}</p>
          <img className="profile-user-image" src={imageUrl} alt={userName}/>
       </li>
     </ul>
    </div>
  );
};

export default hot(module)(Profile);