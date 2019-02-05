import React from "react";
import {hot} from "react-hot-loader";
import firebase from "../../config/firebaseConfig";
import "./Leaderboard.css";

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  
  componentDidMount() {
    const itemsRef = firebase.database().ref('leaderboard');
    console.log(itemsRef);
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          points: items[item].points
        });
      }
      newState.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
      this.setState({
        items: newState
      });
    });
  }

  render() {
    let place = 0;
    return (
    <div className="leaderboard container top-space">
    <h3>Leaderboard</h3> 
     <ul className="leaderboard-list">
      <li className="leaderboard-list-item leaderboard-list-header">
        <div className="leaderboard-list-item-items">
          <h4>Place</h4>
          <h4>Name</h4>
          <h4>Score</h4>
        </div>
      </li>
      {this.state.items.map((item) => {
        place++;
        return (
          <li className="leaderboard-list-item" key={item.id}>
            <div className="leaderboard-list-item-items">
              <p>{place}</p>
              <p>{item.name}</p>
              <p>{item.points}</p>
            </div>
          </li>
        )
        
      })}
    </ul>
    </div>
    )
  }
}

export default hot(module)(Leaderboard);