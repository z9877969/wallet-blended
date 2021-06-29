import { refreshOperation } from "../auth/authOperations";
import {
  addCostsError,
  addIncomesError,
  editCostsError,
  editIncomesError,
  getCostsError,
  getIncomesError,
} from "../transactions/transactionsActions";

export const getError = (errorData) => (dispatch) => {
  const { error, requestCallback, requestData, errorType } = errorData;

  console.log(errorData);

  if (errorData.error.status === 401) {
    const isDataArr = Array.isArray(requestData);
    isDataArr
      ? dispatch(refreshOperation(requestCallback, ...requestData))
      : dispatch(refreshOperation(requestCallback, requestData));
    return;
  }

  switch (errorType) {
    case "transacions/getIncomesError":
      dispatch(getIncomesError(error.message));
      break;
    case "transacions/getCostsError":
      dispatch(getCostsError(error.message));
      break;
    case "transacions/addIncomesError":
      dispatch(addIncomesError(error.message));
      break;
    case "transacions/addCostsError":
      dispatch(addCostsError(error.message));
      break;
    case "transacions/editIncomesError":
      dispatch(editIncomesError(error.message));
      break;
    case "transacions/editCostsError":
      dispatch(editCostsError(error.message));
      break;

    default:
      break;
  }
};
