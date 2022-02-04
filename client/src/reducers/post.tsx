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

export const createArticleReducer = (state = {}, action:any) => {
  switch (action.type) {
    case CREATE_ARTICLE_REQUEST:
      return { loading: true };
    case CREATE_ARTICLE_SUCCESS:
      return { loading: false, article: action.payload };
    case CREATE_ARTICLE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const getArticleReducer = (state = [], action:any) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return { loading: true };
    case GET_ARTICLE_SUCCESS:
      return { loading: false, articles: action.payload };
    case GET_ARTICLE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

  export const getSingleArticleReducer = (state = {}, action:any) => {
  switch (action.type) {
    case GET_SINGLE_ARTICLE_REQUEST:
      return { loading: true };
    case GET_SINGLE_ARTICLE_SUCCESS:
      return { loading: false, article: action.payload };
    case GET_SINGLE_ARTICLE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}