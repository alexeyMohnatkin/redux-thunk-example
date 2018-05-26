import React from 'react';
import styles from './styles.module.css';

const PostComment = ({ comment }) => {
  if (!comment) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.email}>{comment.email}</div>
      <blockquote className={styles.body}>{comment.body}</blockquote>
    </div>
  );
}

export default PostComment;

