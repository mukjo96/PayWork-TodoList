import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

export const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

middleware = [...middleware];

export function configureStore() {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(...middleware))
    );
    return store;
}
