import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import expenseSlice from "./features/expense/expenseSlice";
import IncomeSlice from "./features/income/IncomeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  user: userSlice,
  expense: expenseSlice,
  income: IncomeSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [],
  whiteList: ["user", "expense", "income"],
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
