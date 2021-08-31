import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

export const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

middleware = [...middleware];

const initialState = {};

export function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
    return store;
}
