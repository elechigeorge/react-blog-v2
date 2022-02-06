import api from "../utility/api";

import {
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_SUCCESS,
  CREATE_LIKE_FAILED,

  GET_LIKE_REQUEST,
  GET_LIKE_SUCCESS,
  GET_LIKE_FAILED,
} from "../constants/types";


// ARTICLE CREATION PROCESS
export const makeReaction =
    (id: any) =>
        async (dispatch: any, getState: any) => {
            try {

                dispatch({
                    type: CREATE_LIKE_REQUEST,
                });

                 const {
                      userLogin: { userInfo },
                    } = getState();

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "token": userInfo.token
                    },
                };

                const { data } = await api.get(
                    `reaction/like/${id}`,
                    config
                );

                console.log(config.headers.token)
                console.log(id)

                dispatch({
                    type: CREATE_LIKE_SUCCESS,
                    payload: data,
                });

                 console.log(config.headers.token)
                console.log(id)

    
            } catch (error: any) {
                dispatch({
                    type: CREATE_LIKE_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        
}

// GET ALL ARTICLES
export const getAllReaction =
    (id: any) =>
        async (dispatch: any, getState: any) => {
            try {

                dispatch({
                    type: GET_LIKE_REQUEST,
                });

                 const {
                      userLogin: { userInfo },
                    } = getState();

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "token": userInfo.token
                    },
                };

                const { data } = await api.get(
                    `reaction/like/${id}`,
                    config
                );

                dispatch({
                    type: GET_LIKE_SUCCESS,
                    payload: data,
                });

    
            } catch (error: any) {
                dispatch({
                    type: GET_LIKE_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        
}