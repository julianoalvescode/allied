import { combineReducers, createStore, Store } from "redux";

import { IState } from "data/models";

import { checkout } from "./checkout";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const reducers = combineReducers<IState>({
  checkout,
});

export const initialState: IState = {
  checkout: null,
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["checkout"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: Store<IState> = createStore(
  persistedReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
