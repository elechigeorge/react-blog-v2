import api from "../utility/api";

import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,

  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILED,
} from "../constants/types";

// ARTICLE CREATION PROCESS
export const makeComment = (id: any, comment: string) => async (dispatch: any, getState: any) => {
    try {

        dispatch({
            type: CREATE_COMMENT_REQUEST,
        });

        const {
          userLogin: { userInfo },
        } = getState();

        console.log(userInfo.token)

        const config = {
            headers: {
                "Content-Type": "application/json",
                "token": userInfo.token
            },
        };

        const { data } = await api.post(
            `comment/${id}`,
            { comment },
            config
        );

        dispatch({
            type: CREATE_COMMENT_SUCCESS,
            payload: data,
        });

    } catch (error: any) {
        dispatch({
            type: CREATE_COMMENT_FAILED,
            payload:
                error && error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


// GET ALL ARTICLES
export const getAllComment =
    (id: any) =>
        async (dispatch: any, getState: any) => {
            try {

                dispatch({
                    type: GET_COMMENT_REQUEST,
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
                    `comment/${id}`,
                    config
                );

                

                dispatch({
                    type: GET_COMMENT_SUCCESS,
                    payload: data,
                });

    
            } catch (error: any) {
                dispatch({
                    type: GET_COMMENT_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        
}