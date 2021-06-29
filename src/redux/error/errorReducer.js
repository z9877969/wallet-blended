import { createReducer } from "@reduxjs/toolkit";
import { loginError, registerError, getCurrentUserError } from "../auth/authAction";
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
  [registerError]: setError,
  [getCurrentUserError]: setError,
  [getIncomesError]: setError,
  [getCostsError]: setError,
  [addIncomesError]: setError,
  [addCostsError]: setError,
  [editIncomesError]: setError,
  [editCostsError]: setError,
});

export default errorReducer;
