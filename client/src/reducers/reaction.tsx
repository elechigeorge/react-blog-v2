import {
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_SUCCESS,
  CREATE_LIKE_FAILED,

  GET_LIKE_REQUEST,
  GET_LIKE_SUCCESS,
  GET_LIKE_FAILED,
} from "../constants/types";

export const createLikeReducer = (state = {}, action:any) => {
  switch (action.type) {
    case CREATE_LIKE_REQUEST:
      return { loading: true };
    case CREATE_LIKE_SUCCESS:
      return { loading: false, reactions: action.payload };
    case CREATE_LIKE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const getLikeReducer = (state = [], action:any) => {
  switch (action.type) {
    case GET_LIKE_REQUEST:
      return { loading: true };
    case GET_LIKE_SUCCESS:
      return { loading: false, reactions: action.payload };
    case GET_LIKE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}