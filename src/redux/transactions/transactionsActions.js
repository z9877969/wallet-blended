import { createAction } from "@reduxjs/toolkit";

export const addIncomes = (transaction) => ({
  type: "transactions/addIncomes",
  payload: transaction,
});

export const addCosts = createAction("transactions/addCosts");

export const changeDataForm = createAction("transactions/changeDataForm");

export const resetDataForm = createAction("transactions/resetDataForm");
