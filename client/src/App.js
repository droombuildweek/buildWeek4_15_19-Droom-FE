import React, { Component } from "react";

// Components
import Header from "./components/nav/Header";
// import Footer from "./components/nav/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// Styling
import "./App.css";

// React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Redux Setup
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Header />
            {/* <Footer /> */}

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
