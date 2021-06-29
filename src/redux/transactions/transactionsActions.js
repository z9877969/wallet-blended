import { createAction } from "@reduxjs/toolkit";

export const getCostsRequest = createAction("transactions/getCostsRequest");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequest = createAction("transactions/getIncomesRequest");
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequest = createAction("transactions/addIncomesRequest");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const editCostsRequest = createAction("transactions/editCostsRequest");
export const editCostsSuccess = createAction("transactions/editCostsSuccess");
export const editCostsError = createAction("transactions/editCostsError");

export const editIncomesRequest = createAction(
  "transactions/editIncomesRequest"
);
export const editIncomesSuccess = createAction(
  "transactions/editIncomesSuccess"
);
export const editIncomesError = createAction("transactions/editIncomesError");

export const addTransactionId = createAction("transactions/addTransactionId");
export const removeTransactionId = createAction(
  "transactions/removeTransactionId"
);

export const changeDataForm = createAction("transactions/changeDataForm");

export const resetDataForm = createAction("transactions/resetDataForm");
