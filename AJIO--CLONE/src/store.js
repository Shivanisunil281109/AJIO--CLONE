
import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./redux/toastSlice";
import authReducer from "./redux/authSlice";

const store = configureStore({
    reducer: {
        toast: toastReducer,
        auth: authReducer
    }
});

export default store;
