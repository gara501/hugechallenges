import React from "react";
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
import firebase from "../../config/firebaseConfig";
import "./Challenges.css";

class Challenges extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  
  componentDidMount() {
    const itemsRef = firebase.database().ref('challenges');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: items[item].id,
          name: items[item].name,
          init: items[item].init,
          end: items[item].end,
          active: items[item].active,
          description: items[item].description,
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
    <div className="challenges container top-space">
    <h3>Challenges</h3> 
     <ul className="challenges-list">
      {this.state.items.map((item) => {
        let enterButton = '';
        if (item.active) {
          enterButton = <button className="header-user-profile-item button black">Apply!</button>;
        }
        
        return (
          <li className="challenges-list-item" key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Init: {item.init}</p>
            <p>End: {item.end}</p>
            {enterButton}
          </li>
        )
      })}
    </ul>
    </div>
    )
  }
}

export default hot(module)(Challenges);