import { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperations";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import CategoriesListPage from "../../pages/CategoriesListPage";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
    dispatch(getCosts());
  }, []);

  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:transType/edit/:transId" component={TransactionPage} />
        <Route path="/:transType/list" component={CategoriesListPage} />
        <Route path="/:transType" component={TransactionPage} />
        <Redirect to={"/"} />
      </Switch>
    </>
  );
};

export default App;
