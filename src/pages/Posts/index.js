import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PostsFilter from 'modules/posts/components/PostsFilter'
import PostsList from 'modules/posts/components/PostsList'
import { loadPosts } from 'modules/posts/actions';
import WithUsers from 'modules/users/containers/WithUsers'
import styles from './styles.module.css';

class PostsPage extends PureComponent {
  state = {
    selectedUser: null,
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    const { selectedUser} = this.state;
    const userId = (!selectedUser || !selectedUser.length) ? null : selectedUser[0].id;
    this.props.loadPosts(userId);
  }

  filterUsers = selected => {
    this.setState(() => ({ selectedUser: selected }), this.loadPosts);
  }

  render() {
    const {
      selectedUser,
    } = this.state;

    const {
      users,
      posts,
      fetchingPosts,
      fetchingPostsError,
    } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <PostsFilter
          users={users}
          selectedUser={selectedUser}
          onChange={this.filterUsers}
          className={styles.filter}
       />
        <PostsList
          posts={posts}
          fetching={fetchingPosts}
          error={fetchingPostsError}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  users: state.users.users,
  posts: state.posts.posts,
  fetchingPosts: state.posts.fetchingPosts,
  fetchingPostsError: state.posts.fetchingPostsError,
})

export default WithUsers(connect(mapStateToProps, { loadPosts })(PostsPage));
