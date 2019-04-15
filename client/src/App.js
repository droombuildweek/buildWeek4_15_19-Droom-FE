import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Footer />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Router>
      </>
    );
  }
}

export default App;
