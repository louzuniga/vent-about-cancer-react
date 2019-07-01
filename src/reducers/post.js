import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LOVE,
  DELETE_POST,
  ADD_POST,
  GET_POST
} from '../actions/constsants';

const intialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LOVE:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === payload.id ? { ...post, love: payload.love } : post
        ),
        loading: false
      };
    default:
      return state;
  }
}
