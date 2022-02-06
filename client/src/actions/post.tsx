import api from "../utility/api";

import {
    CREATE_ARTICLE_REQUEST,
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILED,

    GET_ARTICLE_REQUEST,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILED,

    GET_SINGLE_ARTICLE_REQUEST,
    GET_SINGLE_ARTICLE_SUCCESS,
    GET_SINGLE_ARTICLE_FAILED,
} from "../constants/types";

// ARTICLE CREATION PROCESS
export const createArticle = (images: string, title: string, body: string) => async (dispatch: any, getState: any) => {
    try {

        dispatch({
            type: CREATE_ARTICLE_REQUEST,
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

        const { data } = await api.post(
            "post",
            { images, title, body },
            config
        );

        dispatch({
            type: CREATE_ARTICLE_SUCCESS,
            payload: data,
        });

    } catch (error: any) {
        dispatch({
            type: CREATE_ARTICLE_FAILED,
            payload:
                error && error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


// GET ALL ARTICLES
export const getArticle =
    () =>
        async (dispatch: any) => {
            try {

                dispatch({
                    type: GET_ARTICLE_REQUEST,
                });


                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                const { data } = await api.get(
                    "post",
                    config
                );

                

                dispatch({
                    type: GET_ARTICLE_SUCCESS,
                    payload: data,
                });

    
            } catch (error: any) {
                dispatch({
                    type: GET_ARTICLE_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        
}

// GET ALL ARTICLES
export const getSingleArticles =
    (id: any) =>
        async (dispatch: any) => {
            try {

                dispatch({
                    type: GET_SINGLE_ARTICLE_REQUEST,
                });

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                const { data } = await api.get(
                    `post/${id}`,
                    config
                );
                

                dispatch({
                    type: GET_SINGLE_ARTICLE_SUCCESS,
                    payload: data,
                });
    
            } catch (error: any) {
                dispatch({
                    type: GET_SINGLE_ARTICLE_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };