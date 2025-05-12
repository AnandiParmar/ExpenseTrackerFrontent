import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      <ToastContainer autoClose={500} />
    </PersistGate>
  </Provider>
);
