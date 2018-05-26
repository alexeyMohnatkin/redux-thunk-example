import React, { PureComponent } from 'react';
import PostsFilter from 'modules/posts/components/PostsFilter'
import PostsList from 'modules/posts/components/PostsList'
import { baseUrl } from 'config';
import styles from './styles.module.css';

class PostsPage extends PureComponent {
  state = {
    posts: null,
    fetchingPosts: false,
    fetchingPostsError: '',
    users: null,
    fetchingUsers: false,
    fetchingUsersError: '',
    selectedUser: null,
  }

  componentDidMount() {
    this.loadPosts();
    this.loadUsers();
  }

  loadPosts() {
    const { selectedUser} = this.state;
    const userId = (!selectedUser || !selectedUser.length) ? null : selectedUser[0].id;
    const url = new URL(`${baseUrl}/posts`);

    if (userId) {
      url.searchParams.set('userId', userId)
    }

    this.setState(() => ({
      fetchingPosts: true,
      fetchingPostsError: '',
    }));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load posts list`);
        }
        return response.json();
      })
      .then(posts => {
        this.setState(() => ({
          posts,
          fetchingPosts: false,
        }));
      })
      .catch(error => {
        this.setState({
          fetchingPostsError: error.message,
          fetchingPosts: false,
        });
      });
  }

  loadUsers() {
    this.setState(() => ({
      fetchingUsers: true,
      fetchingUsersError: '',
    }));

    fetch(`${baseUrl}/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load users list`);
        }
        return response.json();
      })
      .then(users => {
        this.setState(() => ({
          users,
          fetchingUsers: false,
        }));
      })
      .catch(error => {
        this.setState({
          fetchingUsersError: error.message,
          fetchingUsers: false,
        });
      });
  }

  filterUsers = selected => {
    this.setState(() => ({ selectedUser: selected }), this.loadPosts);
  }

  render() {
    const {
      users,
      fetchingUsers,
      fetchingUsersError,
      posts,
      fetchingPosts,
      fetchingPostsError,
      selectedUser,
    } = this.state;

    return (
      <div>
        <h1>Posts</h1>
        <PostsFilter
          users={users}
          fetching={fetchingUsers}
          error={fetchingUsersError}
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

export default PostsPage;
