import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./redux/toastSlice";

const store = configureStore({
    reducer: {
        toast: toastReducer
    }
});

export default store;