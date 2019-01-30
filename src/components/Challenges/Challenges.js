import React from "react";
import {hot} from "react-hot-loader";
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
    <div className="challenges container">
     <h3>Challenges</h3>
     <ul className="challenges-list">
      {this.state.items.map((item) => {
        return (
          <li className="challenges-list-item" key={item.id}>
            <p>{item.description}</p>
            <p>Init: {item.init}</p>
            <p>End: {item.end}</p>
            <p>Active: {item.active}</p>
          </li>
        )
      })}
    </ul>
    </div>
    )
  }
}

export default hot(module)(Challenges);