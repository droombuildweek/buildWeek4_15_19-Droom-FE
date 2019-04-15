import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Redux
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

// Components
import Header from "./components/nav/Header";
// import Footer from "./components/nav/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// Styling
import "./App.css";

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
