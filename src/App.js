import React, { Component} from "react";
import {hot} from "react-hot-loader";
import firebase from "./config/firebaseConfig";
import withFirebaseAuth from "react-auth-firebase";
import Home from "./Home";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component{
  render(){

    const {
      signInWithGoogle,
      signOut,
      user,
      error
    } = this.props;
    if (user) {
      return <Home user={user} error={error} signOut={signOut} />;
    }

    return(
      <div className="App">
        <Hero></Hero>
        <div className="login-button">
          <button className="button black" onClick={signInWithGoogle}>Login</button>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

const authConfig = {
  google: {
    // redirect: true, // Opens a pop up by default
    returnAccessToken: true, // Returns an access token as googleAccessToken prop
    saveUserInDatabase: true // Saves user in database at /users ref
  }
};

export default withFirebaseAuth(hot(module)(App), firebase, authConfig);