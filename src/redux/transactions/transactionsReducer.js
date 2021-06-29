import { combineReducers, createReducer } from "@reduxjs/toolkit";
import moment from "moment";
import {
  addCosts,
  addCostsSuccess,
  addIncomesSuccess,
  addTransactionId,
  changeDataForm,
  editCostsSuccess,
  editIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
  removeTransactionId,
  resetDataForm,
} from "./transactionsActions";

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

const incomesReduser = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => [...payload],
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [editIncomesSuccess]: (state, { payload }) => {
    return state.map((trans) => (trans.id !== payload.id ? trans : payload));
  },
});

const costsReducer = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => [...payload],
  [addCostsSuccess]: (state, action) => [...state, action.payload],
  [editCostsSuccess]: (state, { payload }) => {
    return state.map((trans) => (trans.id !== payload.id ? trans : payload));
  },
});

const dataForm = createReducer(initialState.dataForm, {
  [changeDataForm]: (state, { payload }) => ({
    ...state,
    [payload.name]: payload.value,
  }),
  [resetDataForm]: () => initialState.dataForm,
});

const editedId = createReducer("", {
  [addTransactionId]: (_, { payload }) => payload,
  [removeTransactionId]: () => "",
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReduser,
  editedId,
  dataForm,
});

export default transactionsReducer;
