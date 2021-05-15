import { combineReducers, createReducer } from "@reduxjs/toolkit";
import moment from "moment";
import { addCosts, changeDataForm, resetDataForm } from "./transactionsActions";

const initialState = {
  incomes: [],
  costs: [],
  dataForm: {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    category: "Еда",
    sum: "",
    currency: "RUB",
    comment: "",
  },
};

const incomesReduser = (state = initialState.incomes, { type, payload }) => {
  switch (type) {
    case "transactions/addIncomes":
      return [...state, payload];
    default:
      return state;
  }
};

const costsReducer = createReducer([], {
  [addCosts]: (state, action) => [...state, action.payload],
});

const dataForm = createReducer(initialState.dataForm, {
  [changeDataForm]: (state, { payload }) => ({
    ...state,
    [payload.name]: payload.value,
  }),
  [resetDataForm]: () => initialState.dataForm,
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReduser,
  dataForm,
});

export default transactionsReducer;
