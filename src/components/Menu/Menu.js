import React from "react";
import {hot} from "react-hot-loader";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
     <ul>
       <li>
         <a href="#"><i class="material-icons">face</i>Profile</a>
       </li>
       <li>
        <a href="#"><i class="material-icons">grade</i>Current Challenge</a>
       </li>
       <li>
       <a href="#"><i class="material-icons">stars</i>All Challenges</a>
       </li>
       <li>
         <a href="#"><i class="material-icons">list_alt</i>Leaderboard</a>
       </li>
       <li>
        <a href="#"><i class="material-icons">memory</i>Rules</a>
       </li>
     </ul>
    </div>
  );
};

export default hot(module)(Menu);