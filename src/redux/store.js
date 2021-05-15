import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactions from "./transactions/transactionsReducer";

const persistConfigTransactions = {
  key: "root",
  storage,
  blacklist: ["dataForm"],
};

const store = configureStore({
  reducer: {
    transactions: persistReducer(
      persistConfigTransactions,
      transactions
    ),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
