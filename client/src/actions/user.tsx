import api from "../utility/api";

import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from "../constants/types";

// USER LOGIN PROCESS
export const login = (email: string, password: string) => async (dispatch: any) => {
    try {

        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await api.post(
            "login",
            { email, password },
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error: any) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// STUDENT LOGOUT PROCESS
export const logout = () => (dispatch: any) => {

    localStorage.removeItem("userInfo");

    dispatch({ type: USER_LOGOUT });

    document.location.href = "/";

};

// STUDENT REGISTRATION PROCESS
export const register =
    (image: string, name: string, email: string, password: string, occupation: string) =>
        async (dispatch: any) => {
            try {

                dispatch({
                    type: USER_REGISTER_REQUEST,
                });

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                const { data } = await api.post(
                    "/register",
                    {
                        image,
                        name,
                        email,
                        password,
                        occupation
                    },
                    config
                );

                dispatch({
                    type: USER_REGISTER_SUCCESS,
                    payload: data,
                });

                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    payload: data,
                });

                localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error: any) {
                dispatch({
                    type: USER_REGISTER_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };