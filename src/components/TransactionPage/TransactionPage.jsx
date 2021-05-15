import { Component, useState } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import moment from "moment";

import Button from "../_share/Button/Button";
import LableInput from "../_share/LableInput/LableInput";
import Section from "../_share/Section/Section";
import getTransOpts from "../../assets/options/transactionsOpts";
import CategoriesList from "../CategoriesList/CategoriesList";

import {
  addIncomes,
  addCosts,
  changeDataForm,
  resetDataForm,
} from "../../redux/transactions/transactionsActions";

function TransactionPage(props) {
  const {
    history,
    location,
    match,
    changeDataForm,
    addIncomesProps,
    addCostsProps,
    resetDataForm,
    dataForm,
  } = props;
  const { params, path } = match;
  const title = params.transType === "incomes" ? "Доходы" : "Расходы";

  const [isCategoryList, setIsCategoryList] = useState(false);
  const [transaction, setTransaction] = useState({
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    category: "Еда",
    sum: "",
    currency: "RUB",
    comment: "",
  });

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
    params.transType === "incomes" && addIncomesProps(dataForm);
    params.transType === "costs" && addCostsProps(dataForm);
    resetDataForm();
    handleGoBack();
  };

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
            transType={params.transType}
            handleChange={handleChange}
            onToggle={handleToggleCatList}
          />
        )}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  dataForm: state.transactions.dataForm,
});
const mapDispatchToProps = {
  addIncomesProps: addIncomes,
  addCostsProps: addCosts,
  changeDataForm,
  resetDataForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);

// const con = (mSTP, mDTP) => {
//   const store = mSTP(state);

//   return (WrapedComponent) => {
//     return <WrapedComponent {...store} {...mDTP} />;
//   };
// };

// con(mSTP, mDTP)(COMPONENT)
