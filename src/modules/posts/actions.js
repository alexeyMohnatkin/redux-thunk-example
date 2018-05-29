import * as t from './actionTypes';
import { baseUrl } from 'config';

export const loadPosts = (userId) => {
  return (dispatch, getState) => {
    dispatch({
      type: t.LOAD_POSTS.REQUEST,
    })

    const url = new URL(`${baseUrl}/posts`);

    if (userId) {
      url.searchParams.set('userId', userId)
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load posts list`);
        }
        return response.json();
      })
      .then(posts => {
        const users = getState().users.users;
        const postsWithAuthors = posts.map(post => {
          const author = users.find(({ id }) => id === post.userId);
          return {
            ...post,
            author,
          }
        })
        dispatch({
          type: t.LOAD_POSTS.SUCCESS,
          payload: postsWithAuthors,
        });
      })
      .catch(error => {
        dispatch({
          type: t.LOAD_POSTS.FAIL,
          payload: error.message,
        })
      });
  }
}

export const loadPost = (postId) => {
  return (dispatch, getState) => {
    dispatch({
      type: t.LOAD_POST.REQUEST,
    })

    fetch(`${baseUrl}/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load post`);
        }
        return response.json();
      })
      .then(post => {
        const users = getState().users.users;
        const author = users.find(({id}) => id === post.userId);
        dispatch({
          type: t.LOAD_POST.SUCCESS,
          payload: {
            ...post,
            author,
          }
        });
      })
      .catch(error => {
        dispatch({
          type: t.LOAD_POST.FAIL,
          payload: error.message,
        })
      });
  }
}

export const loadComments = (postId) => {
  return (dispatch) => {
    dispatch({
      type: t.LOAD_COMMENTS.REQUEST,
    })

    fetch(`${baseUrl}/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load comments`);
        }
        return response.json();
      })
      .then(comments => {
        dispatch({
          type: t.LOAD_COMMENTS.SUCCESS,
          payload: comments,
        });
      })
      .catch(error => {
        dispatch({
          type: t.LOAD_COMMENTS.FAIL,
          payload: error.message,
        })
      });
  }
}

export const sendComment = (postId, { email, text }) => {
  return (dispatch) => {
    dispatch({
      type: t.SEND_COMMENT.REQUEST,
    })

    return fetch(`${baseUrl}/posts/${postId}/comments`, {
      method: 'POST',
      body: { email, text },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load comments`);
        }
        return response.json();
      })
      .then(() => {
        dispatch({
          type: t.SEND_COMMENT.SUCCESS,
        });
      })
      .catch(error => {
        dispatch({
          type: t.SEND_COMMENT.FAIL,
          payload: error.message,
        })
      });
  }
}