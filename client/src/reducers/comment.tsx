import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,

  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILED,
} from "../constants/types";

export const createCommentReducer = (state = {}, action:any) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return { loading: true };
    case CREATE_COMMENT_SUCCESS:
      return { loading: false, comment: action.payload };
    case CREATE_COMMENT_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const getCommentReducer = (state = [], action:any) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return { loading: true };
    case GET_COMMENT_SUCCESS:
      return { loading: false, comments: action.payload };
    case GET_COMMENT_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}