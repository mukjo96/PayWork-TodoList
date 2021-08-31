import { Provider } from "react-redux";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigations";

import { configureStore, sagaMiddleware } from "./src/store";
import sagas from "./src/store/sagas";

const store = configureStore();

sagaMiddleware.run(sagas);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </Provider>
    );
}
