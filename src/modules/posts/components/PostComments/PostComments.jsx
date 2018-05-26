import React from 'react';
import {
  Alert,
} from 'reactstrap';
import PostComment from '../PostComment'

const PostComments = ({ comments, fetching, error }) => {
  if (fetching) {
    return <div>loading...</div>;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>
  }

  if (!comments) {
    return null;
  }

  return (
    <div>
      {comments.map(comment => (
        <PostComment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
}

export default PostComments;

