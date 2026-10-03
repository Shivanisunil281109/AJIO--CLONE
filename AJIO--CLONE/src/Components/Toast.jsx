import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../redux/toastSlice";
import "./Toast.css";

const Toast = () => {

    const dispatch = useDispatch();

    const { show, message, type } = useSelector(
        (state) => state.toast
    );

    useEffect(() => {

        if (!show) return;

        const timer = setTimeout(() => {
            dispatch(hideToast());
        }, 3000);

        return () => clearTimeout(timer);

    }, [show, dispatch]);

    if (!show) {
        return null;
    }

    return (
        <div className={`redux-toast redux-toast-${type}`}>
            {message}
        </div>
    );
};

export default Toast;