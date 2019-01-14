import React from "react";
import withAuthFirebase from "react-auth-firebase";
import firebase from "./config/firebaseConfig";
import App from "./App";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import "./Home.css";


const Home = props => {
  const { user, signOut, error } = props;
  if (!user) {
    return <App />;
  }
  return (
    <div className="app-container">
      <div className="app-header">
        <Header user={user} signOut={signOut} ></Header>
      </div>
      <div className="app-menu">
        <Menu></Menu>
      </div>
      <div className="app-content">
        
      </div>
      {error ? <h1>{error.message}</h1> : null}
    </div>
  );
};

export default Home;