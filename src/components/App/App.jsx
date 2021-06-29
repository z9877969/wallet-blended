import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperations";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import CategoriesListPage from "../../pages/CategoriesListPage";
import "./App.css";
import AuthPage from "../../pages/AuthPage";
import LogOut from '../LogOut/LogOut';
import { getIsAuth } from "../../redux/auth/authSelector";
import { getCurUserOperation } from "../../redux/auth/authOperation";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth)
  // const isAuth = false

  useEffect(() => {
    dispatch(getCurUserOperation())
  }, [])

  useEffect(() => {
    if(isAuth){
      dispatch(getIncomes());
      dispatch(getCosts());
    }
  }, [isAuth]);

  // const isAuth = true


  return (
    <>
      <h1>App</h1>
      <LogOut />
      {
        isAuth ? (<Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:transType/edit/:transId" component={TransactionPage} />
        <Route path="/:transType/list" component={CategoriesListPage} />
        <Route path="/costs" component={TransactionPage} />        
        <Route path="/incomes" component={TransactionPage} />        
        <Redirect to={"/"} />
      </Switch>) : (<Switch>
        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
        <Redirect to={"/login"} />
      </Switch> )
      }
    </>
  );
};

export default App;
