// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [!import.meta.env.PROD && logger].filter(Boolean);

// const composeEnhancer =
//   (!import.meta.env.PROD &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );
export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

// export const persistor = persistStore(store);
