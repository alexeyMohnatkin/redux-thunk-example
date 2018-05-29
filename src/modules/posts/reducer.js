import * as t from './actionTypes';

const initialState = {
  posts: null,
  fetchingPosts: false,
  fetchingPostsError: '',

  post: null,
  fetchingPost: false,
  fetchingPostError: '',

  comments: null,
  fetchingComments: false,
  fetchingCommentsError: '',

  sendingComment: false,
  sendingCommentError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.LOAD_POSTS.REQUEST:
      return {
        ...state,
        fetchingPosts: true,
        fetchingPostsError: '',
      }

    case t.LOAD_POSTS.SUCCESS:
      return {
        ...state,
        fetchingPosts: false,
        posts: action.payload,
      }

    case t.LOAD_POSTS.FAIL:
      return {
        ...state,
        fetchingPosts: false,
        fetchingPostsError: action.payload,
      }

    case t.LOAD_POST.REQUEST:
      return {
        ...state,
        fetchingPost: true,
        fetchingPostError: '',
      }

    case t.LOAD_POST.SUCCESS:
      return {
        ...state,
        fetchingPost: false,
        post: action.payload,
      }

    case t.LOAD_POST.FAIL:
      return {
        ...state,
        fetchingPost: false,
        fetchingPostError: action.payload,
      }

    case t.LOAD_COMMENTS.REQUEST:
      return {
        ...state,
        fetchingComments: true,
        fetchingCommentsError: '',
      }

    case t.LOAD_COMMENTS.SUCCESS:
      return {
        ...state,
        fetchingComments: false,
        comments: action.payload,
      }

    case t.LOAD_COMMENTS.FAIL:
      return {
        ...state,
        fetchingComments: false,
        fetchingCommentsError: action.payload,
      }

    case t.SEND_COMMENT.REQUEST:
      return {
        ...state,
        sendingComment: true,
        sendingCommentError: '',
      }

    case t.SEND_COMMENT.SUCCESS:
      return {
        ...state,
        sendingComment: false,
      }

    case t.SEND_COMMENT.FAIL:
      return {
        ...state,
        sendingComment: false,
        sendingCommentError: action.payload,
      }

    default:
      return state;
  }
}