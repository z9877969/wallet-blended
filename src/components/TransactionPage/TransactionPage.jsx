import { Component, useState, useEffect } from "react";
import { Route } from "react-router";
import { connect, useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Button from "../_share/Button/Button";
import LableInput from "../_share/LableInput/LableInput";
import Section from "../_share/Section/Section";
import getTransOpts from "../../assets/options/transactionsOpts";
import CategoriesList from "../CategoriesList/CategoriesList";
import {
  addIncomes,
  addCosts,
  editCosts,
  editIncomes,
} from "../../redux/transactions/transactionsOperations";
import {
  addTransactionId,
  removeTransactionId,
} from "../../redux/transactions/transactionsActions";

function TransactionPage(props) {
  const { history, location, match, resetDataForm, dataForm } = props;
  const dispatch = useDispatch();
  const { params, path } = match;
  const url = match.url.slice(1);
  const title = url === "incomes" ? "Доходы" : "Расходы";
  const category = url === "incomes" ? "Зарплата" : "Еда";
  const transId = Number(params.transId);

  const data =
    useSelector((state) => state.transactions)[url] || [];
  const editedId = useSelector((state) => state.transactions.editedId);
  const editTransaction = data.find(
    (transaction) => transaction.id === transId
  );
  const inititalTransaction = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    category,
    sum: "",
    currency: "RUB",
    comment: "",
  };

  const [isCategoryList, setIsCategoryList] = useState(false);
  const [transaction, setTransaction] = useState(() =>
    params.transId ? editTransaction : inititalTransaction
  );

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    history.push(`${match.url}/categories`);
    handleToggleCatList();
  };

  const handleToggleCatList = () => {
    setIsCategoryList((prev) => !prev);
  };

  const handleGoBack = () => {
    history.push(location.state?.from || "/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedId) {
      url === "incomes" && dispatch(editIncomes(transaction));
      url === "costs" && dispatch(editCosts(transaction));
      dispatch(removeTransactionId());
    } else {
      url === "incomes" && dispatch(addIncomes(transaction));
      url === "costs" && dispatch(addCosts(transaction));
    }
    handleGoBack();
  };

  useEffect(() => {
    transId && dispatch(addTransactionId(transId));
  }, [transId]);

  return (
    <>
      {!isCategoryList && (
        <Section>
          <form onSubmit={handleSubmit}>
            <Button title="GoBack" cbOnClick={handleGoBack} />
            <h2>{title}</h2>
            <Button title="Ok" type="submit" />
            <ul>
              {getTransOpts({
                cbOnChange: handleChange,
                cbOnClick: handleClick,
                values: transaction,
              }).map((option) => (
                <li key={option.name}>
                  <LableInput {...option} />
                </li>
              ))}
            </ul>
          </form>
        </Section>
      )}
      <Route
        path={`${path}/categories`}
        render={(props) => (
          <CategoriesList
            {...props}
            transType={url}
            handleChange={handleChange}
            onToggle={handleToggleCatList}
          />
        )}
      />
    </>
  );
}

export default TransactionPage;
