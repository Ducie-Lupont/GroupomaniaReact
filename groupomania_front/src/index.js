import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";

//A retirer si mise en prod du site, outils de dev
//import { composeWithDevTools } from "redux-devtools-extension";
//import logger from "redux-logger";
//

const store = createStore(
  rootReducer,
  /*composeWithDevTools(*/applyMiddleware(thunk)//)
);

store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
