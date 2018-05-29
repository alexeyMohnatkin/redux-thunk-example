import React from 'react';
import {
  Alert,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PostComments from '../PostComments'
import CommentForm from '../CommentForm'
import styles from './styles.module.css';

const PostDetails = ({
  post,
  fetchingPost,
  fetchingPostError,
  comments,
  fetchingComments,
  fetchingCommentsError,
  sendingComment,
  sendingCommentError,
  onSendComment,
  formVisible,
  toggleForm,
}) => {
  if (fetchingPost) {
    return <div>loading...</div>;
  }

  if (fetchingPostError) {
    return <Alert color="danger">{fetchingPostError}</Alert>
  }

  if (!post) {
    return null;
  }

  return (
    <div>
      <div className={styles.author}>
        author: <Link to={`/users/${post.userId}`}>{post.author.name}</Link>
      </div>
      <div className={styles.body}>{post.body}</div>

      <h4>Comments</h4>
      <hr/>
      <PostComments
        comments={comments}
        fetching={fetchingComments}
        error={fetchingCommentsError}
      />

      {!formVisible &&
        <div className={styles.commentForm}>
          <Alert color="success">
            <h4 className="alert-heading">Well done!</h4>
            <Button
              color="primary"
              size="sm"
              onClick={toggleForm}
            >
              Send one more comment
            </Button>
          </Alert>
        </div>
      }
      {formVisible && <CommentForm
        className={styles.commentForm}
        onSubmit={onSendComment}
        submitting={sendingComment}
        error={sendingCommentError}
      />}
      <Button tag={Link} to={`/posts`}>Back to list</Button>
    </div>
  );
}

PostDetails.defaultProps = {
  onSendComment: () => console.log('send comment')
}

export default PostDetails;

