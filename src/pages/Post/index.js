import React, { PureComponent } from 'react';
import { baseUrl } from 'config';
import PostDetails from 'modules/posts/components/PostDetails'

class PostPage extends PureComponent {
  state = {
    post: null,
    fetchingPost: false,
    fetchingPostError: '',
    comments: null,
    fetchingComments: false,
    fetchingCommentsError: '',
    sendingComment: false,
    sendCommentError: '',
    formVisible: true,
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.loadPost(postId);
    this.loadComments(postId);
  }

  loadPost(postId) {
    this.setState(() => ({
      fetchingPost: true,
      fetchingPostError: '',
    }));

    fetch(`${baseUrl}/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load post`);
        }
        return response.json();
      })
      .then(post => {
        this.setState(() => ({
          post,
          fetchingPost: false,
        }));
      })
      .catch(error => {
        this.setState({
          fetchingPostError: error.message,
          fetchingPost: false,
        });
      });
  }

  loadComments(postId) {
    this.setState(() => ({
      fetchingComments: true,
      fetchingCommentsError: '',
    }));

    fetch(`${baseUrl}/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load comments`);
        }
        return response.json();
      })
      .then(comments => {
        this.setState(() => ({
          comments,
          fetchingComments: false,
        }));
      })
      .catch(error => {
        this.setState({
          fetchingCommentsError: error.message,
          fetchingComments: false,
        });
      });
  }

  sendComment = ({ email, text }) => {
    const postId = this.props.match.params.id;
    this.setState(() => ({
      sendCommentError: '',
      sendingComment: true,
    }))

    fetch(`${baseUrl}/posts/${postId}/comments`, {
      method: 'POST',
      body: { email, text },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't save comment`);
        }
        return response.json();
      })
      .then(() => {
        this.setState(() => ({
          sendingComment: false,
          formVisible: false,
        }))
      })
      .catch((error) => {
        this.setState(() => ({
          sendCommentError: error.message,
          sendingComment: false,
        }))
      })
  }

  showForm = () => {
    this.setState(() => ({
      formVisible: true,
    }))
  }

  render() {
    const {
      post,
      fetchingPost,
      fetchingPostError,
      comments,
      fetchingComments,
      fetchingCommentsError,
      sendingComment,
      sendCommentError,
      formVisible,
    } = this.state;


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
          sendCommentError={sendCommentError}
          formVisible={formVisible}
          showForm={this.showForm}
        />
      </div>
    );
  }
}

export default PostPage;
