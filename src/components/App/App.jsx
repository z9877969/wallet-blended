import { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>App</h1>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/:transType" component={TransactionPage} />
          <Redirect to={"/"}/>
        </Switch>
      </>
    );
  }
}

export default App;
