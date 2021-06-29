import { createReducer } from "@reduxjs/toolkit";
import { loginError, signUpError } from "../auth/authActions";
import {
  getCostsError,
  getIncomesError,
  addIncomesError,
  addCostsError,
  editCostsError,
  editIncomesError,
} from "../transactions/transactionsActions";

const setError = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [loginError]: setError,
  [signUpError]: setError,
  [getIncomesError]: setError,
  [getCostsError]: setError,
  [addIncomesError]: setError,
  [addCostsError]: setError,
  [editIncomesError]: setError,
  [editCostsError]: setError,
});

export default errorReducer;
