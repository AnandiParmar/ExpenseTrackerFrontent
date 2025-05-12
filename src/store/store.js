import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/user/userSlice";
import expenseSlice from "./features/expense/expenseSlice";
import IncomeSlice from "./features/income/IncomeSlice";

const reducers = combineReducers({
  user: userSlice,
  expense: expenseSlice,
  income: IncomeSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [],
  whiteList: ["user"],
};

const persistedReducers = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
