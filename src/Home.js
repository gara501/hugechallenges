import React from "react";
import App from "./App";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Challenges from "./components/Challenges/Challenges";
import Rules from "./components/Rules/Rules";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import "./Home.css";

const Index = () => <h2>Home</h2>;
const Users = () => <h2>Rules</h2>;

const Home = props => {
  const { user, signOut, error, appcontent } = props;
  if (!user) {
    return <App />;
  }
  return (
    <div className="app-container">
      <div className="app-header">
        <Header user={user} signOut={signOut} ></Header>
      </div>
      
      <Router>
        <div className="app-data">
            <div className="app-menu menu">
            <nav>
              <ul>
                <li>
                  <Link to="/"><i className="material-icons">stars</i>Leaderboard</Link>
                </li>
                <li>
                  <Link to="/challenges/"><i className="material-icons">list_alt</i>Challenges</Link>
                </li>
                <li>
                  <Link to="/rules/"><i className="material-icons">memory</i>Rules</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="app-content">
            <Route path="/" exact component={Leaderboard} />
            <Route path="/challenges/" component={Challenges} />
            <Route path="/rules/" component={Rules} />
          </div>
        </div>
      </Router>
      {error ? <h1>{error.message}</h1> : null}
    </div>
  );
};

export default Home;