import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./theme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchReducer from "./features/booksSlice";

const store = configureStore({
  reducer: {
    books: searchReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
