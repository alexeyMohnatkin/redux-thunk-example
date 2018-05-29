import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import WithUsers from 'modules/users/containers/WithUsers'
import { loadPost, loadComments, sendComment } from 'modules/posts/actions';
import PostDetails from 'modules/posts/components/PostDetails'

class PostPage extends PureComponent {
  state = {
    formVisible: true,
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.loadPost(postId);
    this.props.loadComments(postId);
  }

  sendComment = ({ email, text }) => {
    const postId = this.props.match.params.id;

    // thunk returns promise
    this.props.sendComment(postId, { email, text })
      .then(this.toggleForm)
  }

  toggleForm = () => {
    this.setState((state) => ({
      formVisible: !state.formVisible,
    }))
  }

  render() {
    const {
      formVisible,
    } = this.state;

    const {
      post,
      fetchingPost,
      fetchingPostError,
      comments,
      fetchingComments,
      fetchingCommentsError,
      sendingComment,
      sendingCommentError,
    } = this.props;


    return (
      <div>
        {!!post && <h1>{post.title}</h1>}
        <PostDetails
          post={post}
          fetchingPost={fetchingPost}
          fetchingPostError={fetchingPostError}
          comments={comments}
          fetchingComments={fetchingComments}
          fetchingCommentsError={fetchingCommentsError}
          onSendComment={this.sendComment}
          sendingComment={sendingComment}
          sendingCommentError={sendingCommentError}
          formVisible={formVisible}
          toggleForm={this.toggleForm}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
  fetchingPost: state.posts.fetchingPost,
  fetchingPostError: state.posts.fetchingPostError,

  comments: state.posts.comments,
  fetchingComments: state.posts.fetchingComments,
  fetchingCommentsError: state.posts.fetchingCommentsError,

  sendingComment: state.posts.sendingComment,
  sendingCommentError: state.posts.sendingCommentError,
})

export default WithUsers(connect(mapStateToProps, { loadPost, loadComments, sendComment })(PostPage));
